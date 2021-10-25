/**
 * update team instance action controller
 * see {@link module:routes/teams/_id}
 * @module controllers/teams/_id/update
 */

const { param, query, validationResult } = require('express-validator')
const { Team } = require('../../../models')
const createUpdateObject = require('../../../helpers/createUpdateObject')

/**
 * Action to update a team instance
 * @param {Number} teamId the id of the instance to be updated
 * @param {String} attribute the attribute that will be updated
 * @param {String} value the value to update in the attribute
 *
 * @returns {res} status 200 if the action succeeded
 */
module.exports = [
  param('id').not().isEmpty().isInt().toInt(),
  query('attribute').not().isEmpty().escape(),
  query('value').not().isEmpty(),
  async function (req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        // Fields did not pass the validation procedure so send back the errors with sanitized values
        return res.status(400).json({
          errors: errors.array(),
        })
      }
      const objectToUpdate = createUpdateObject(
        req.query.attribute,
        req.query.value
      )
      await Team.update(objectToUpdate, {
        where: { id: req.params.id },
      })
      return res.end()
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  },
]
