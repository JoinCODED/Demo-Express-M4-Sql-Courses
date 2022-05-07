'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Students',
      [
        {
          name: 'Mohammad',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Aziz',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salma',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', {
      [Op.or]: [{ name: 'Mohammad' }, { name: 'Aziz' }, { name: 'Salma' }],
    });
  },
};
