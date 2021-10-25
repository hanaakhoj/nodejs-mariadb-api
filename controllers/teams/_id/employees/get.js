/**
 * get action
 * see {@link module:routes/teams/_id/employees}
 * @module controllers/teams/_id/employees/get
 */
const { Employee } = require('../../../../models')
const { param, validationResult } = require('express-validator')

/**
 * Action to get all the employees belonging to a specific team
 * @param {Integer} teamId the team id we want to retrieve its employees
 *
 * @returns {Array} returns the array of found employee instances
 */
module.exports = [
  param('teamId').not().isEmpty().isInt().toInt(),
  async function (req, res) {
    try {
      const errors = validationResult(req)
      // Fields were not validated
      if (!errors.isEmpty()) {
        return res.status(400).json({
          teamIdSanitized: req.params.teamId,
          errors: errors.array(),
        })
      }
      const employeeInstances = await Employee.findAll({
        where: {
          teamId: req.params.teamId,
        },
      })
      return res.json(employeeInstances)
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  },
]
