const Router = require('koa-router');
const router = new Router({ prefix: '/quiz' });
const User = require('../models/User');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');

// @route   POST api/quiz/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create_quiz', async (ctx, next) => {
  //const user = await User.findOne({ shop: ctx.session.shop });

  const { quizName, selectedItems } = ctx.request.body;
  let shopName = ctx.session.shop;

  const newQuiz = await new Quiz({ quizName, questions: [], shopName });

  selectedItems.forEach(async _id => {
    const q = await Question.findOne({ _id });
    await newQuiz.questions.push(q);
    console.log(q);
  });

  await newQuiz.save();
  console.log('new quiz created...');
});

// @route   GET api/quiz
// @desc    Create a new question and store in user
// @access  Private
router.get('/', async (ctx, next) => {
  const quizes = await Quiz.find({ shopName: ctx.session.shop });
  if (quizes.length > 0) {
    ctx.body = quizes;
  } else {
    console.log('nothing found');
  }
});


module.exports = router;
