/** Database Seed File */
var mongoose = require('mongoose'),
  DogPark = require('./models/dogpark'),
  User = require('./models/user'),
  { databaseUri } = require('./config');

mongoose.connect(databaseUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));


const DogParks = [
  {
    title: "Tompkins Square Dog Run",
    address: 'E 9th St between Aves A and B',
    city: 'New York',
    ratings: 3,
    hoursOpen: ['06', '00', 'AM'],
    hoursClose: ['12', '00', 'AM']
  },
  {
    title: "Sirius Dog Run: Battery Park",
    address: '385 S End Ave',
    city: 'New York',
    ratings: 4,
  },
  {
    title: "Madison Square Park Dog Run",
    address: 'Madison Square Park',
    city: 'New York',
    ratings: 4,
  },
  {
    title: "Tribeca Dog Run at Pier 26",
    address: 'West St at N Moore St',
    city: 'New York',
    ratings: 2,
  },
  {
    title: "Hillside Dog Park",
    address: 'Vine St',
    city: 'Brooklyn',
    ratings: 5,
  }
]

DogPark.insertMany(DogParks)
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err);
  });