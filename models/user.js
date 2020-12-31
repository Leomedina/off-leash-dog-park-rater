/** User Schema */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    requiredL: true
  }
});

const User = mongoose.model('User', UserSchema);

/** Exports */
module.exports = User;