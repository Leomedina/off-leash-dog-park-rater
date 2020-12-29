/** 
 * File to run the Express server
 */

const app = require("./app");
const { PORT } = require('./config');

app.listen(PORT, function startServer() {
  console.log(`Listening on Port: ${PORT}`);
});