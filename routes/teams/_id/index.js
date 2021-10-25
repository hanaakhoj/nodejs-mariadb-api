/**
 * teams routes
 * @module routes/teams/_id/
 */

// Require controller modules
const update = require('../../../controllers/teams/_id/update')
const deleteAction = require('../../../controllers/teams/_id/delete')

module.exports = (router) => {
  /**
   * @type {put}
   * @name /api/teams/:id/update
   * see {@link module:controllers/teams/_id/update}
   */
  router.put('/api/teams/:id/update', update)
  /**
   * @type {delete}
   * @name /api/teams/:id/delete
   * see {@link module:controllers/teams/_id/delete}
   */
  router.delete('/api/teams/:id/delete', deleteAction)
  return router
}
