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
app.all("*", function (req, res) {
  res.redirect('/');
});

app.use(function (req, res, next) {
  res.send("Something when wrong");
});

/** Exports */
module.exports = app;