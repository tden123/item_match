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
});

// @route   GET api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create', async (ctx, next) => {
  console.log('get questions')
});

module.exports = router;
