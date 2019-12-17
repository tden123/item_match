const Router = require('koa-router');
const router = new Router({ prefix: '/question' });
const Question = require('../models/Question');
const User = require('../models/User');
const auth = require('../middleware/auth');


// @route   POST api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create', auth, async (ctx, next) => {
  const { question, options } = ctx.request.body;
  const { cookie } = ctx.request.header;

  const shopName = cookie
    .match(/shopOrigin=\w+-\w+.myshopify.com/)[0]
    .slice(11);

  const shopID = cookie.match(/token=(.)+;/)[0].split(' ')[0].slice(6, -1);

  console.log(cookie);
  if (!shopName) {
    return "Shop not found...";
  }

  try {
    const user = await User.findOne({ shopID });
    const newQuestion = await new Question({ question, options });

    if (!user) {
      const newUser = await new User({ shopID, shopName, questions: [] });
      newUser.questions.push(newQuestion);
      await newUser.save();
    } else {
      user.questions.push(newQuestion);
      await user.save();
    }
    console.log(`new question added to ${shopName}!`);
  } catch (error) {
    console.error(error.message);
  }
});

// @route   GET api/question/create
// @desc    Create a new question and store in user
// @access  Private
router.post('/create', auth, async (ctx, next) => {
  console.log('get questions')
});

module.exports = router;
