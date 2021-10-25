/**
 * teams routes
 * @module routes/teams/_id/
 */

// Require controller modules.
const deleteAction = require('../../../controllers/teams/_id/delete')

module.exports = (router) => {
  /**
   * @type {delete}
   * @name /api/teams/get
   * see {@link module:controllers/teams/get}
   */
  router.delete('/api/teams/_id/delete', deleteAction)
  return router
}
