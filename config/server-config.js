const fs = require('fs')
const path = require('path')

module.exports = {
  development: {
    host: process.env.API_HOST ? process.env.API_HOST : 'localhost',
    port: process.env.API_PORT ? process.env.API_PORT : 3000,
    https: {
      key: fs.existsSync(path.resolve('../ssl', 'key.pem'))
        ? fs.readFileSync(path.resolve('../ssl', 'key.pem'))
        : '',
      cert: fs.existsSync(path.resolve('../ssl', 'key.pem'))
        ? fs.readFileSync(path.resolve('../ssl', 'cert.pem'))
        : '',
    },
  },
  test: {
    host: process.env.API_HOST ? process.env.API_HOST : 'localhost',
    port: process.env.API_PORT ? process.env.API_PORT : 3000,
  },
  production: {
    host: process.env.API_HOST ? process.env.API_HOST : 'localhost',
    port: process.env.API_PORT ? process.env.API_PORT : 80,
    https: {
      key: fs.existsSync(path.resolve('/ssl', 'key.pem'))
        ? fs.readFileSync(path.resolve('/ssl', 'key.pem'))
        : '',
      cert: fs.existsSync(path.resolve('/ssl', 'key.pem'))
        ? fs.readFileSync(path.resolve('/ssl', 'cert.pem'))
        : '',
    },
  },
}
