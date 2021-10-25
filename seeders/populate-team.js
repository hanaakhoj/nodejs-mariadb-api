'use strict'
/**
 * populate-team seeder
 * populate `company`.`team` table
 * to use run :
 * $ env-cmd npx sequelize-cli db:seed --seed populate-team
 * to undo run :
 * $ npx sequelize-cli db:seed:undo --seed populate-team
 * @module seeders/populate-team
 */

module.exports = {
  // eslint-disable-next-line no-unused-vars
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
    return queryInterface.bulkInsert(
      { tableName: 'Team' },
      [
        {
          name: 'Tech',
          description: 'Tech Team',
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
    return queryInterface.bulkDelete({ tableName: 'team' }, {})
  },
}
