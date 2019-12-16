const questionRouter = require('./Question');
const Router = require('koa-router');

const apiRouter = new Router({ prefix: '/api' });

const routers = [questionRouter];

for (let router of routers) {
    apiRouter.use(router.routes(), router.allowedMethods());
}

module.exports = apiRouter;