/**
 * teams routes
 * @module routes/teams/_id/employees/_employeeId
 */

// Require controller modules
const update = require('../../../../../controllers/teams/_id/employees/_employeeId/update')
const deleteAction = require('../../../../../controllers/teams/_id/employees/_employeeId/delete')

module.exports = (router) => {
  /**
   * @type {put}
   * @name /api/teams/:id/employees/:employeeId/update
   * see {@link module:controllers/teams/_id/employees/_employeeId/update}
   */
  router.put('/api/teams/:id/employees/:employeeId/update', update)
  /**
   * @type {delete}
   * @name /api/teams/:id/employees/:employeeId/delete
   * see {@link module:controllers/teams/_id/employees/_employeeId/delete}
   */
  router.delete('/api/teams/:id/employees/:employeeId/delete', deleteAction)
  return router
}
