/**
 * teams routes
 * @module routes/teams/_id/employees/_employeeId
 */

// Require controller modules
const deleteAction = require('../../../../../controllers/teams/_id/employees/_employeeId/delete')

module.exports = (router) => {
  /**
   * @type {delete}
   * @name /api/teams/:id/employees/:employeeId/delete
   * see {@link module:controllers/teams/_id/employees/_employeeId/delete}
   */
  router.delete('/api/teams/:id/employees/:employeeId/delete', deleteAction)
  return router
}
