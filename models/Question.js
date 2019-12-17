const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  question: String,
  options: {}
});

module.exports = Question = mongoose.model('question', QuestionSchema);
