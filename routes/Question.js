const Router = require('koa-router');
const router = new Router({ prefix: '/question' });
const Question = require('../models/Question');
const User = require('../models/User');

// @route   POST api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create_question', async (ctx, next) => {
  let { question, options } = ctx.request.body;
  let shop = ctx.session.shop;

  try {
    let user = await User.findOne({ shop });
    let newQuestion = await new Question({ question, options, shop });
    await newQuestion.save();
    user.questions.push(newQuestion);
    await user.save();
    console.log(`new question added to ${shop}!`);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  } catch (error) {
    console.error(error.message);
  }
});

// @route   GET api/question
// @desc    Create a new question and store in user
// @access  Private
router.get('/', async (ctx, next) => {
  try {
    ctx.body = await User.findOne({ shop: ctx.session.shop });
  } catch (error) {
    console.error(error.message);
    ctx.body = {
      _id: 1,
      questions: [],
      quizes: [],
      shop: 'Not Found'
    };
  }
});

module.exports = router;
