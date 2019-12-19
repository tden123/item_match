const Router = require('koa-router');
const questionRouter = require('./Question');
const quizRouter = require('./Quiz');
const apiRouter = new Router({ prefix: '/api' });

const routers = [questionRouter, quizRouter];

for (let router of routers) {
  apiRouter.use(router.routes(), router.allowedMethods());
}

module.exports = apiRouter;
