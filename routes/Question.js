const Router = require("koa-router");
const router = new Router({ prefix: '/question' });
const Question = require('../models/Question');

router.post('/create', async (ctx, next) => {
    const { question, options } = ctx.request.body;
    console.log(ctx.request.body);
    await new Question({ question, options }).save();
});

module.exports = router;