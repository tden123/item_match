const mongoose = require('mongoose');

let UserSchema = null;

UserSchema = mongoose.Schema({
  shop: String,
  questions: [{ type: mongoose.Schema.Types.Object, ref: 'question' }],
  quizes: [{ type: mongoose.Schema.Types.Object, ref: 'quiz' }]
});

module.exports = User = mongoose.model('user', UserSchema);
