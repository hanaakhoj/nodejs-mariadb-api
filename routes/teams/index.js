/**
 * teams routes
 * @module routes/teams
 */

// Require controller modules.
const create = require('../../controllers/teams/create')
const get = require('../../controllers/teams/get')

module.exports = (router) => {
  /**
   * @type {get}
   * @name /api/teams/get
   * see {@link module:controllers/teams/get}
   */
  router.get('/api/teams/get', get)
  /**
   * @type {post}
   * @name /api/teams/create
   * see {@link module:controllers/teams/create}
   */
  router.post('/api/teams/create', create)
  return router
}
