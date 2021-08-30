'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Rumah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
    }
  };
  Rumah.init({
    title: DataTypes.STRING,
    alamat: DataTypes.STRING,
    luasbangunan: DataTypes.STRING,
    luastanah: DataTypes.STRING,
    interior: DataTypes.STRING,
    lantai: DataTypes.INTEGER,
    listrik: DataTypes.STRING,
    tempatparkir: DataTypes.INTEGER,
    sertifikat: DataTypes.STRING,
    harga: DataTypes.DECIMAL,
    map: DataTypes.DOUBLE,
    foto: DataTypes.JSON,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rumah',
  });
  return Rumah;
};