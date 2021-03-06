var logger = require('../util/logger')

module.exports = function errorMiddleware(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send('err: ' + err.message);
}