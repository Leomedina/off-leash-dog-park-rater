/** Routes for Home Page */
var express = require('express'),
  router = new express.Router(),
  DogPark = require('../models/dogpark'),
  ExpressError = require('../helpers/ExpressError'),
  wrapAsync = require('../helpers/WrapAsync');

/** GET - Renders Home Page */
router.get('/', wrapAsync(async function (req, res, next) {
  const latestParks = await DogPark.find().sort({ dateCreated: -1 }).limit(25);
  if (!latestParks) throw new ExpressError("Error Retrieving Latest Parks", 500);
  res.status(200).render('pages/dogparks', { latestParks });
}));

/** Exports */
module.exports = router;