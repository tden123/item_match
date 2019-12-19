const Router = require('koa-router');
const router = new Router({ prefix: '/quiz' });
const User = require('../models/User');
const Question = require('../models/Question');

// @route   POST api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create_quiz', async (ctx, next) => {
  const user = await User.findOne({ shop: ctx.session.shop });
  /*
  ctx.request.body.map(_id => {
    let question = Question.findOne({ _id });
    if (question) user.quizes.push(question);
  });
  await user.save();
  */
  // Cyclic dependancy here as question is within 2 models
});

module.exports = router;
