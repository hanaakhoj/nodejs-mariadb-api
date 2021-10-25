// Require the dotenv for evars
require('dotenv').config()

const app = require('./app')
const consola = require('consola')
const https = require('https')

// Import and Set Nuxt.js options
let config
if (process.env.NODE_ENV !== 'production') {
  config = require('./config/server-config').development
} else {
  config = require('./config/server-config').production
}

async function start() {
  const { host, port, https: options } = config

  // Listen the server
  if (process.env.NODE_ENV !== 'production') {
    if (options.key && options.cert) {
      https.createServer(options, app).listen(port + 1, host)
      consola.ready({
        message: `Server listening on http://${host}:${port + 1}`,
        badge: true,
      })
    }
    app.listen(port, host)
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    })
  } else {
    https.createServer(options, app).listen(port, host)
    consola.ready({
      message: `Server listening on https://${host}:${port}`,
      badge: true,
    })
  }
}
start()

app.get('/', (req, res) => res.send('NodeJS-MariaDB-API'))
