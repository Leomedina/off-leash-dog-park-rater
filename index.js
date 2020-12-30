/** Off Leash - Dog Park Discovery and Rater */
const express = require("express");
const app = express();
const path = require('path');

/** Express Configuration */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Application Routes */
app.use((req, res) => {
  res.render('home');
});


/** 404 Handler and Error Handlers */

module.exports = app;