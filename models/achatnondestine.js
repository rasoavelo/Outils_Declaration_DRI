'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AchatNonDestine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AchatNonDestine.init({
    nif: DataTypes.INTEGER,
    numStat: DataTypes.INTEGER,
    cin: DataTypes.STRING,
    dateCin: DataTypes.DATE,
    lieuDeliv: DataTypes.STRING,
    nature: DataTypes.STRING,
    reference: DataTypes.STRING,
    raisoSocial: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    exProv: DataTypes.STRING,
    pays: DataTypes.STRING,
    naturAchatConsommes: DataTypes.STRING,
    comptabilisees: DataTypes.STRING,
    versees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AchatNonDestine',
  });
  return AchatNonDestine;
};