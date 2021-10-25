const session = require('express-session')
// initalize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// require db object
const { sequelize } = require('../models')

// Create a new Store for storing sessions
const myStore = new SequelizeStore({
  db: sequelize,
  // The interval at which to cleanup expired sessions in milliseconds.
  checkExpirationInterval: 15 * 60 * 1000,
  // The maximum age (in milliseconds) of a valid session based on the cookie.expires and if null takes this value which is 24h by defaults
  // expiration: 10 * 1000
})

module.exports = myStore
