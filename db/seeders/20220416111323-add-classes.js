'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Courses',
      [
        {
          name: 'Html',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Css',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', {
      [Op.or]: [{ name: 'Html' }, { name: 'Css' }, { name: 'React' }],
    });
  },
};
