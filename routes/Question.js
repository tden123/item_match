const Router = require("koa-router");
const router = new Router({ prefix: '/question' });

router.post('/create', (ctx, next) => {
    console.log(ctx.request.body);
});

module.exports = router;