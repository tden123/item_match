const Router = require('koa-router');
const router = new Router({ prefix: '/user' });
const User = require('../models/User');


// @route   GET api/user
// @desc    Get current user details
// @access  Private
router.get('/', async (ctx, next) => {
    const user = await User.findOne({ shop: ctx.session.shop });
    ctx.body = user;
});

module.exports = router;