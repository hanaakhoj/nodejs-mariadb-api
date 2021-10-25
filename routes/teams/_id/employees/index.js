/**
 * teams/_id/employees routes
 * @module routes/teams/_id/employees
 */

// Require controller modules
const get = require('../../../../controllers/teams/_id/employees/get')

module.exports = (router) => {
  /**
   * @type {get}
   * @name /api/teams/:teamId/employees/get
   * see {@link module:controllers/teams/_id/employees/get}
   */
  router.get('/api/teams/:teamId/employees/get', get)
  return router
}
