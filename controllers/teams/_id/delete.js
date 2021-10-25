/**
 * delete action
 * see {@link module:routes/teams/_id/}
 * @module controllers/teams/_id/delete
 */
const { Team } = require('../../../models')
const { param, validationResult } = require('express-validator')

/**
 * Action to delete a team instance
 * @param {Number} teamId the id of the team to be deleted
 *
 * @returns {res} status 200 if the action succeeded
 */
module.exports = [
  param('id').not().isEmpty().isInt().toInt(),
  async function (req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        // Fields did not pass the validation procedure so send back the errors with sanitized values
        return res.status(400).json({
          errors: errors.array(),
        })
      }
      await Team.destroy({
        where: { id: req.params.id },
      })
      return res.end()
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  },
]
