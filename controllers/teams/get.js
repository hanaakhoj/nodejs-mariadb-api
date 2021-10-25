/**
 * get
 * Action to get all the teams
 * see {@link module:routes/teams}
 * @module controllers/teams/get
 */
const { Team } = require('../../models')

module.exports = async (req, res) => {
  let teams
  try {
    teams = await Team.findAll({})
  } catch (error) {
    console.error('error while trying to get teams instances', error)
    return res
      .status(500)
      .send('error while trying to get teams instances from db')
  }
  return res.json(teams)
}
