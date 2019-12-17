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

  console.log(ctx.session);

  const shop = ctx.session.shop;

  if (!shop) {
    return "Shop not found...";
  }

  try {
    const user = await User.findOne({ shop });

    const newQuestion = await new Question({ question, options });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const accessToken = await bcrypt.hash(ctx.session.accessToken, salt);
      const newUser = await new User({ shop, accessToken, questions: [] });
      newUser.questions.push(newQuestion);
      await newUser.save();
    } else {
      const isMatch = bcrypt.compare(ctx.session.accessToken, user.accessToken);
      if (!isMatch) {
        console.error('Invalid token');
        return;
      }
      user.questions.push(newQuestion);
      await user.save();
    }
    console.log(`new question added to ${shop}!`);
    ctx.redirect('/create-question');
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
