'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SommesVersees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SommesVersees.init({
    nif: DataTypes.INTEGER,
    numStat: DataTypes.INTEGER,
    cin: DataTypes.STRING,
    dataCin: DataTypes.DATE,
    lieuDeliv: DataTypes.STRING,
    nature: DataTypes.STRING,
    reference: DataTypes.STRING,
    raisonSocial: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    exProviilisees: DataTypes.STRING,
    versees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SommesVersees',
  });
  return SommesVersees;
};