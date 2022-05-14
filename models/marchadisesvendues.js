'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarchadisesVendues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MarchadisesVendues.init({
    nif: DataTypes.INTEGER,
    numStat: DataTypes.INTEGER,
    cin: DataTypes.STRING,
    dateCin: DataTypes.DATE,
    lieuDeliv: DataTypes.STRING,
    nature: DataTypes.STRING,
    reference: DataTypes.STRING,
    raisonSocial: DataTypes.STRING,
    adresse: DataTypes.STRING,
    pays: DataTypes.STRING,
    ville: DataTypes.STRING,
    exProv: DataTypes.STRING,
    modePaiem: DataTypes.STRING,
    natureMarch: DataTypes.STRING,
    montantHorsTva: DataTypes.STRING,
    tva: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MarchadisesVendues',
  });
  return MarchadisesVendues;
};