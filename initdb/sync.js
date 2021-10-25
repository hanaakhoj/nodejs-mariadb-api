// require db object
const { sequelize } = require('../models')
const myStore = require('../config/sessionStore.js')

// sync models
sequelize.sync()

// sync table sessions
myStore.sync()
