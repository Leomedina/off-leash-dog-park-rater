/** Dog Park Schema */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogParkSchema = new Schema({
  title: {
    type: String,
    maxlength: [50, 'Please use 50 Characters or less.'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
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
  hoursOpen: {
    type: [Schema.Types.Mixed], // Schema will need to follow [ HOUR:Number, MINUTES:Number, AM/PM:String ]
    default: ['none']
  },
  hoursClose: {
    type: [Schema.Types.Mixed], // Schema will need to follow [ HOUR:Number, MINUTES:Number, AM/PM:String ]
    default: ['none']
  }
});

const DogPark = mongoose.model('Dogpark', dogParkSchema);

/** Exports */
module.exports = DogPark;