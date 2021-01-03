/** Off Leash - Dog Park Discovery and Rater */
var express = require('express'),
  app = express(),
  path = require('path'),
  ejsMate = require('ejs-mate');

/** Express Configuration */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

/** Application Routes */
app.use((req, res) => {
  res.render('home');
});

/** Error Handlers */

/** Exports */
module.exports = app;