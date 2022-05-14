'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AchatImmobilier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AchatImmobilier.init({
    nif: DataTypes.INTEGER,
    numStat: DataTypes.INTEGER,
    cin: DataTypes.STRING,
    dateCin: DataTypes.DATE,
    lieuDeliv: DataTypes.STRING,
    nature: DataTypes.STRING,
    reference: DataTypes.STRING,
    raisonSocial: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    exProvince: DataTypes.STRING,
    pays: DataTypes.STRING,
    natureAchatImm: DataTypes.STRING,
    comptabilisees: DataTypes.STRING,
    versees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AchatImmobilier',
  });
  return AchatImmobilier;
};