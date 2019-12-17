const Router = require('koa-router');
const router = new Router({ prefix: '/question' });
const Question = require('../models/Question');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


// @route   POST api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create', async (ctx, next) => {
  const { question, options } = ctx.request.body;
  const shop = ctx.session.shop;

  try {
    const user = await User.findOne({ shop });
    const newQuestion = await new Question({ question, options });
    user.questions.push(newQuestion);
    await user.save();
    console.log(`new question added to ${shop}!`);
  } catch (error) {
    console.error(error.message);
  }
  await next();
});


// @route   GET api/question
// @desc    Create a new question and store in user
// @access  Private
router.get('/', async (ctx, next) => {
  const user = await User.findOne({ shop: ctx.session.shop });
  console.log(user);
  ctx.response = user;
  await next();
});

module.exports = router;
