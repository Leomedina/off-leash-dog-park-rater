/** Shared configurations for the app */
const PORT = 3000;
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/off_leash';

/** Exports */
module.exports = { PORT, databaseUri };