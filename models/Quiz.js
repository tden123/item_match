const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  name: String,
  questions: [{ type: mongoose.Schema.Types.Object, ref: 'question' }]
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
