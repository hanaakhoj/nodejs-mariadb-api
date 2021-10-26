/**
 * update action
 * see {@link module:routes/teams/_id/employees/_employeeId/}
 * @module controllers/teams/_id/employees/_employeeId/update
 */
const { Employee } = require('../../../../../models')
const { param, query, validationResult } = require('express-validator')
const createUpdateObject = require('../../../../../helpers/createUpdateObject')

/**
 * Action to update an employee instance
 * @param {Number} employeeId the uuid of the employee to be update
 * @param {String} attribute the attribute that will be updated
 * @param {String} value the value to update in the attribute
 *
 * @returns {res} status 200 if the action succeeded
 */
module.exports = [
  param('employeeId').not().isEmpty().isUUID(4),
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
      await Employee.update(objectToUpdate, {
        where: { id: req.params.employeeId },
      })
      return res.end()
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  },
]
