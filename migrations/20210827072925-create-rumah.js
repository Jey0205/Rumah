'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rumahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      luasbangunan: {
        type: Sequelize.STRING
      },
      luastanah: {
        type: Sequelize.STRING
      },
      interior: {
        type: Sequelize.STRING
      },
      lantai: {
        type: Sequelize.INTEGER
      },
      listrik: {
        type: Sequelize.STRING
      },
      tempatparkir: {
        type: Sequelize.INTEGER
      },
      sertifikat: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.DECIMAL
      },
      map: {
        type: Sequelize.DOUBLE
      },
      foto: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rumahs');
  }
};