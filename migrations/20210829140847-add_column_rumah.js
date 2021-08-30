'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Rumahs',
      'userid',
     Sequelize.INTEGER
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Rumahs',
      'userid',
     Sequelize.INTEGER
    );
  }
};
