const mongoose = require('mongoose');
const Question = require('./Question');

const UserSchema = mongoose.Schema({
  shopifyID: String,
  questions: [Question]
});

module.exports = User = mongoose.model('user', UserSchema);
