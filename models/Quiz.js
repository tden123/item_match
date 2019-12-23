const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  quizName: String,
  shop: String,
  questions: [{ type: mongoose.Schema.Types.Object, ref: 'question' }]
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
