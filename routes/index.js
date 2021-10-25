const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

const { Router } = require('express')

let router = Router()

/**
 * loopDir will search in the directory specified for routes and import them
 * @param {String} pathDir the directory to search
 *
 */
function importRoutes(pathDir) {
  fs.readdirSync(pathDir, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      importRoutes(path.join(pathDir, dirent.name))
    } else {
      if (
        dirent.name.indexOf('.') !== 0 &&
        (dirent.name !== basename || pathDir !== __dirname) &&
        dirent.name.slice(-3) === '.js'
      ) {
        router = require(path.join(pathDir, dirent.name))(router)
      }
    }
  })
}

importRoutes(__dirname)

module.exports = router
