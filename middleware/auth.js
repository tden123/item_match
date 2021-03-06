const User = require('../models/User');
module.exports = (ctx, next) => {

    const { cookie } = ctx.request.header;
    const shopID = cookie.match(/token=(.)+;/)[0].split(' ')[0].slice(6, -1);
    const user = User.findOne({ shopID });

    if (user) {
        next();
    } else {
        console.error('Issue finding user...');
    }
}