/**
 * create action
 * action that creates a new team instance
 * see {@link module:routes/teams}
 * @module controllers/teams/create
 */

const { Team } = require('../../models')
const { body, validationResult } = require('express-validator')

/**
 * action that creates a new team instance
 * @param {String} name the team's name
 * @param {String} description the team's description
 *
 * @returns {Object} returns the newly created team.id in an object
 */
module.exports = [
  body('name').not().isEmpty().isString(),
  body('description').isString(),
  async function (req, res) {
    try {
      const errors = validationResult(req)
      // Fields were not validated
      if (!errors.isEmpty()) {
        return res.status(400).json({
          nameSanitized: req.body.name,
          descriptionSanitized: req.body.description,
          errors: errors.array(),
        })
      }
      const teamInstance = await Team.create({
        name: req.body.name,
        description: req.body.description,
      })
      return res.json({ id: teamInstance.id })
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  },
]
