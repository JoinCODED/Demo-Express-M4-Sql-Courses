'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Teachers',
      [
        {
          name: 'Ahmad',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Khaled',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salem',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', {
      [Op.or]: [{ name: 'Ahmad' }, { name: 'Khaled' }, { name: 'Salem' }],
    });
  },
};
