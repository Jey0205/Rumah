'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'number',
     Sequelize.STRING
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'number',
     Sequelize.STRING
    );
  }
};
