const mongoose = require('mongoose');
const Question = require('./Question');

const UserSchema = mongoose.Schema({
  shopName: String,
  shopID: String,
  questions: [mongoose.Schema.Types.Mixed]
});

module.exports = User = mongoose.model('user', UserSchema);
