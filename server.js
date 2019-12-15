require("isomorphic-fetch");
const Koa = require("koa");
const next = require("next");
const dotenv = require("dotenv");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const Router = require("koa-router");
const connectDB = require('./db');

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET_KEY } = process.env;

connectDB();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products"],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        console.log(`access token: ${accessToken}`);

        const store_body = {
          "storefront_access_token": {
            "title": "Test"
          }
        };

        const storefront_token = await fetch(
          "https://1a32002e.ngrok.io/admin/api/2019-10/storefront_access_tokens.json",
          {
            method: "POST",
            body: JSON.stringify(store_body),
            headers: {
              "Content-type": "application/json",
              "X-Shopify-Storefront-Access-Token": accessToken
            }
          }
        );

        ctx.cookies.set("shopOrigin", shop, { httpOnly: false });
        ctx.redirect("/");
      }
    })
  );

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
