/** Off Leash - Dog Park Discovery and Rater */
var express = require('express'),
  app = express(),
  path = require('path'),
  ejsMate = require('ejs-mate'),
  morgan = require('morgan'),
  homeRoutes = require('./routes/home'),
  dogParkRoutes = require('./routes/dogparks');

/** Express Configuration */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

/** Application Routes */
app.use('/', homeRoutes);
app.use('/dogparks', dogParkRoutes);

/** 404 and Error Handlers */
// app.all("*", function (req, res) {
  // res.redirect('/');
// });

app.use(function (err, req, res, next) {
  const { status = 500, message = "Something when wrong" } = err;
  res.status(status).send(message);
});

/** Exports */
module.exports = app;