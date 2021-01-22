/** Routes for Home Page */
var express = require('express'),
  router = new express.Router(),
  DogPark = require('../models/dogpark'),
  ExpressError = require('../helpers/ExpressError'),
  wrapAsync = require('../helpers/WrapAsync');

/** GET - Renders Home Page */
router.get('/', wrapAsync(async function (req, res, next) {
  const allParks = await DogPark.find().sort({ dateCreated: -1 }).limit(25);
  if (!allParks) throw new ExpressError("Error Retrieving Latest Parks", 500);
  res.status(200).render('pages/dogparks', { allParks });
}));

router.get('/:id', wrapAsync(async function (req, res, next) {
  const { id } = req.params;
  const dogPark = await DogPark.findById(id);
  if (!dogPark) throw new ExpressError('DogPark not found', 404);
  res.status(200).render('pages/dogpark', { dogPark });
}));

/** Exports */
module.exports = router;