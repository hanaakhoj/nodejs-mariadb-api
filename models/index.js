const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

require('dotenv').config()

const isProd = process.env.NODE_ENV == 'production'
const db = {}
const username = process.env.DB_USER
const password = process.env.DB_PASS
const database = process.env.DB_NAME
const host = process.env.DB_HOST
const port = process.env.DB_PORT

//Create a db instance with Sequelize
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mariadb',
  port: port,
  // eslint-disable-next-line no-console
  logging: isProd ? false : console.log,
  define: {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
})

/**
 * loopDir will search in the directory specified for models and import it when find
 * @param {String} pathDir the directory to search
 *
 */
function importModels(pathDir) {
  fs.readdirSync(pathDir, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      importModels(path.join(pathDir, dirent.name))
    } else {
      if (
        dirent.name.indexOf('.') !== 0 &&
        dirent.name !== basename &&
        dirent.name.slice(-3) === '.js'
      ) {
        const model = require(path.join(pathDir, dirent.name))(
          sequelize,
          Sequelize
        )
        require(path.join(pathDir, dirent.name))(sequelize, Sequelize)
        db[model.name] = model
      }
    }
  })
}

importModels(__dirname)

//Associating each Model
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
