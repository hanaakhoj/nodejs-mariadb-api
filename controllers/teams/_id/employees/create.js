/**
 * create
 * see {@link module:routes/teams/_id/employees}
 * @module controllers/teams/_id/employees/create
 */
const { Employee } = require('../../../../models')
const { param, body, validationResult } = require('express-validator')

/**
 * Action to add a new Employee instance
 * @param {Integer} teamsId
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 * @param {String} address
 * @param {Boolean} isActive
 * @param {Date} registered
 *
 * @returns {Object} returns the newly created employee.id in an object
 */
module.exports = [
  // Validate & Sanitize the input values with express-validator
  param('teamId').not().isEmpty().isInt().toInt(),
  body('firstName').not().isEmpty().isString(),
  body('lastName').not().isEmpty().isString(),
  body('email')
    .isEmail()
    .normalizeEmail()
    // check if the email is already subscribed
    .custom(async (value) => {
      let userId
      try {
        userId = await Employee.findOne({
          where: { email: value },
          attributes: ['id'],
        })
      } catch (error) {
        throw new Error('database_error')
      }
      if (userId) {
        throw new Error('Employee already exists')
      }
      return true
    }),
  body('address').isString(),
  body('isActive').isBoolean().toBoolean(),
  body('registered').not().isEmpty(),
  async function (req, res) {
    const errors = validationResult(req)

    const employeeInput = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,
      isActive: req.body.isActive,
      registered: req.body.registered,
      teamsId: req.params.teamId,
    }
    if (!errors.isEmpty()) {
      // Fields did not pass the validation procedure so send back the values sanitized
      // If the validation of the email throw a sequelize error, send a 500 error because the error is not the responsibility of the user's inputs
      if (
        errors
          .array()
          .findIndex(
            (error) => error.param === 'email' && error.msg === 'database_error'
          ) !== -1
      ) {
        return res.status(500).json({ errors: ['server error'] })
      } else {
        return res.json({
          employeeSanitized: employeeInput,
          errors: errors.array(),
        })
      }
    }

    let employeeInstance
    // Save the user to the db with the encrypted password
    try {
      employeeInstance = await Employee.create(employeeInput)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error })
    }

    return res.json({ id: employeeInstance.id })
  },
]
