/**  Extends native Error for better error handling throughout the app. */
class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  };
}

/** Exports */
module.exports = ExpressError;