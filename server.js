/**  File to run the Express server */
var app = require("./index"),
  mongoose = require('mongoose'),
  { PORT, databaseUri } = require('./config');

/** Assign mongoose promise library and connect to database */
mongoose.Promise = global.Promise;
mongoose.connect(databaseUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

/** Start the Server */
app.listen(PORT, function startServer() {
  console.log(`Listening on Port: ${PORT}`);
});