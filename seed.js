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
    rating: 3,
    imageLink: "https://i.imgur.com/aOoaGfU.jpg",
    hoursOpen: ['06', '00', 'AM'],
    hoursClose: ['12', '00', 'AM'],
  },
  {
    title: "Sirius Dog Run: Battery Park",
    address: '385 S End Ave',
    city: 'New York',
    rating: 4,
    imageLink: "https://i.imgur.com/VTw6DOL.jpg",
  },
  {
    title: "Madison Square Park Dog Run",
    address: 'Madison Square Park',
    city: 'New York',
    rating: 4,
    imageLink: 'https://i.imgur.com/r8lNY6z.jpg',
  },
  {
    title: "Tribeca Dog Run at Pier 26",
    address: 'West St at N Moore St',
    city: 'New York',
    rating: 2,
    imageLink: "https://i.imgur.com/YM05CFD.jpg",
  },
  {
    title: "Hillside Dog Park",
    address: 'Vine St',
    city: 'Brooklyn',
    rating: 5,
    imageLink: "https://i.imgur.com/h2jMydz.jpg",
  }
];

async function seedDB() {
  await DogPark.deleteMany({});

  const response = await DogPark.insertMany(DogParks)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    });
};

seedDB();