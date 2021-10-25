/**
 * teams routes
 * @module routes/teams
 */

// Require controller modules.
const get = require('../../controllers/teams/get')

module.exports = (router) => {
  /**
   * @type {get}
   * @name /api/teams
   * see {@link module:controllers/teams/get}
   */
  router.get('/api/teams/get', get)
  return router
}
