/**
 * teams/_id/employees routes
 * @module routes/teams/_id/employees
 */

// Require controller modules
const get = require('../../../../controllers/teams/_id/employees/get')
const create = require('../../../../controllers/teams/_id/employees/create')

module.exports = (router) => {
  /**
   * @type {get}
   * @name /api/teams/:teamId/employees/get
   * see {@link module:controllers/teams/_id/employees/get}
   */
  router.get('/api/teams/:teamId/employees/get', get)
  /**
   * @type {post}
   * @name /api/teams/:teamId/employees/create
   * see {@link module:controllers/teams/_id/employees/create}
   */
  router.post('/api/teams/:teamId/employees/create', create)
  return router
}
