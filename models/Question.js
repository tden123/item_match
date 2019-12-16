const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    name: String,
    items: {}
});

module.exports = Question = mongoose.model('question', QuestionSchema);