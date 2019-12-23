const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  shop: String,
  question: String,
  options: {}
});

module.exports = Question = mongoose.model('question', QuestionSchema);
