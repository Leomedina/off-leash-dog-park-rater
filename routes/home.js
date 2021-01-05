/** Routes for Home Page */
var express = require('express'),
  DogPark = require('../models/dogpark'),
  ExpressError = require('../helpers/ExpressError');
const router = new express.Router();

/** GET - Renders Home Page */
router.get('/', async function (req, res, next) {
  try {
    const latestParks = await DogPark.find().sort({ dateCreated: -1 }).limit(4);
    if (!latestParks) throw new ExpressError("Error Retrieving Latest Parks", 500);
    res.status(200).render('index.ejs', { latestParks });
  } catch (e) {
    next(e);
  };
});

/** Exports */
module.exports = router;