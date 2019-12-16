const Router = require("koa-router");
const router = new Router({ prefix: '/question' });

router.get('/', (ctx, next) => {
    ctx.body = 'hello question';
});

module.exports = router;