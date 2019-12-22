const Router = require('koa-router');
const router = new Router({ prefix: '/quiz' });
const User = require('../models/User');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');

// @route   POST api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create_quiz', async (ctx, next) => {
  //const user = await User.findOne({ shop: ctx.session.shop });

  const { quizName, selectedItems } = ctx.request.body;

  const newQuiz = await new Quiz({ name: quizName, questions: [] });

  console.log(newQuiz);

  selectedItems.forEach(async _id => {
    const q = await Question.findOne({ _id });
    await newQuiz.questions.push(q);
    console.log(q);
  });

  await newQuiz.save();
  console.log('new quiz created...');
});

module.exports = router;
