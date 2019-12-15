const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    name: String,
    items: {}
});

module.exports = QuestionSchema = mongoose.model('question', QuestionSchema);