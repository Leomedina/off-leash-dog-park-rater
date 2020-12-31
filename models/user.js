/** User Schema */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    requiredL: true
  }
});

/** Exports */
module.exports = mongoose.model('User', UserSchema);