require('isomorphic-fetch');
const Koa = require('koa');
const next = require('next');
const dotenv = require('dotenv');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const connectDB = require('./db');
const bodyParser = require('koa-bodyparser');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET_KEY } = process.env;

app.prepare().then(async () => {
  const server = new Koa();
  await connectDB();

  server.use(bodyParser());

  const router = require('./routes');
  server.use(router.routes(), router.allowedMethods());

  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products'],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        const user = await User.findOne({ shop });

        if (!user) {
          const salt = await bcrypt.genSalt(10);
          const token = await bcrypt.hash(accessToken, salt);
          const newUser = await new User({ shop, token, questions: [] });
          await newUser.save();
        } else {
          const isMatch = bcrypt.compare(accessToken, user.accessToken);
          if (!isMatch) {
            console.error('Invalid token');
            return;
          }
        }

        ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
        ctx.redirect('/');
      }

    }));

  server.use(verifyRequest());
  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.listen(port, () => {
    console.log(`> Ready on port: ${port}`);
  });
});
