'use strict'
/**
 * populate-employee seeder
 * populate `company`.`employee` table
 * to use run :
 * $ env-cmd npx sequelize-cli db:seed --seed populate-employee
 * to undo run :
 * $ npx sequelize-cli db:seed:undo --seed populate-employee
 * @module seeders/populate-employee
 */
const { Team } = require('../models')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const teamTech = await Team.findOne({
      where: {
        name: 'Tech',
      },
    })

    return queryInterface.bulkInsert(
      { tableName: 'employee' },
      [
        {
          id: uuidv4(),
          firstName: 'Jodie',
          lastName: 'Copeland',
          email: 'jodie.copeland@gmail.com',
          address: '930 Lewis Avenue, Bonanza, Idaho, 7682',
          registered: '2018-04-17 04:59:45.195',
          teamId: teamTech.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete({ tableName: 'employee' }, [], {})
  },
}
