const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogParkSchema = new Schema({
  title: String,
  smallAllowed: Boolean,
  bigAllowed: Boolean,
  location: String,
});

module.exports = mongoose.model('DogPark', DogParkSchema);