/** Routes for Home Page */
var express = require('express'),
  DogPark = require('../models/dogpark');
const router = new express.Router();

/** GET - Renders Home Page */
router.get('/', async function (req, res) {
  const latestParks = await DogPark.find().sort({ dateCreated: -1 }).limit(4);
  res.status(200).render('index.ejs', { latestParks });
});


/** Exports */
module.exports = router;