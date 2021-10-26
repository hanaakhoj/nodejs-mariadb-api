const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const session = require('express-session')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const busboy = require('connect-busboy')
const myStore = require('./config/sessionStore.js')

// Require API routes
const routes = require('./routes/')

// Create express instnace
const app = express()

// Secure the app by setting various HTTP headers. Best to use it early in the middleware stack
app.use(helmet())

const corsOptions = {
  origin: new RegExp(process.env.API_HOST),
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}
app.use(cors(corsOptions))

// Parse cookies to acces their raw value and pass it to puppeteer
app.use(cookieParser())

// To parse the request body and make it accessible in controllers
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({}))

// Set up Session Connect
if (process.env.NODE_ENV !== 'production') {
  app.use(
    session({
      secret: 'asythvdsuxpmscqzcxgh',
      resave: false,
      // Do not save cookies until logged in
      saveUninitialized: false,
      // set expires to 24h (in ms) in production
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      },
      store: myStore,
    })
  )
} else {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: process.env.SESSION_RESAVE == 'true' ? true : false,
      // Do not save cookies until logged in
      saveUninitialized:
        process.env.SESSION_SAVE_UNINITIALIZED == 'true' ? true : false,
      // set expires to 24h (in ms) in production
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.SESSION_COOKIE_SECURE == 'true' ? true : false,
        httpOnly: process.env.SESSION_COOKIE_HTTPONLY == 'true' ? true : false,
      },
      store: myStore,
    })
  )
}

// Logger setup
if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'))
} else {
  app.use(logger('combined'))
}

app.use(busboy())

// Before all routes so compress all routes
app.use(compression())

// Import API Routes
app.use(routes)

// Serve static files
app.use('/api/static', express.static('static'))

module.exports = app
