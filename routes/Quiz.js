const Router = require('koa-router');
const router = new Router({ prefix: '/quiz' });
const User = require('../models/User');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');

// @route   POST api/quiz/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create_quiz', async (ctx, next) => {

  const { quizName, selectedItems } = ctx.request.body;
  let shop = ctx.session.shop;

  const newQuiz = new Quiz({ quizName, questions: [], shop });

  const foundQuestions = await Question.find({ shop });
  const filtered = foundQuestions.filter(q => selectedItems.includes(q._id.toString()));

  console.log(shop);
  console.log(filtered);
  console.log(newQuiz);

  newQuiz.questions = filtered;

  await newQuiz.save();

  const user = await User.findOne({ shop });
  user.quizes.push(newQuiz);
  await user.save();


  console.log('new quiz created...');
});

// @route   GET api/quiz
// @desc    Get all quizes for current shop
// @access  Private
router.get('/', async (ctx, next) => {
  const quizes = await Quiz.find({ shop: ctx.session.shop });
  if (quizes.length > 0) {
    ctx.body = quizes;
  } else {
    ctx.body = [];
  }
});


module.exports = router;
