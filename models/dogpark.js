/** Dog Park Schema */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogParkSchema = new Schema({
  title: {
    type: String,
    maxlength: [30, 'Please use 30 Characters or less.'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'Rating less than 0 is not valid,'],
    max: [5, 'Rating more than 5 is not valid.']
  },
  smallAllowed: Boolean,
  bigAllowed: Boolean
});

/** Exports */
module.exports = mongoose.model('Dogpark', DogParkSchema);