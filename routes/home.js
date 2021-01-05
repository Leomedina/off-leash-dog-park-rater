/** Routes for Home Page */
var express = require('express'),
  DogPark = require('../models/dogpark'),
  ExpressError = require('../helpers/ExpressError'),
  wrapAsync = require('../helpers/WrapAsync');
const router = new express.Router();

/** GET - Renders Home Page */
router.get('/', wrapAsync(async function (req, res, next) {
  const latestParks = await DogPark.find().sort({ dateCreated: -1 }).limit(4);
  if (!latestParks) throw new ExpressError("Error Retrieving Latest Parks", 500);
  res.status(200).render('index.ejs', { latestParks });
}));

/** Exports */
module.exports = router;