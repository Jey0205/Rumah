'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'photos',
     Sequelize.JSON
    ), queryInterface.changeColumn(
      'Rumahs',
      'foto',
     Sequelize.JSON,
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'photos',
     Sequelize.JSON
    ), queryInterface.changeColumn(
      'Rumahs',
      'foto',
     Sequelize.JSON
    );
  }
};
