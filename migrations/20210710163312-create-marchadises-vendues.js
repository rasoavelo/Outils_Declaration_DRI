'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MarchadisesVendues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nif: {
        type: Sequelize.INTEGER
      },
      numStat: {
        type: Sequelize.INTEGER
      },
      cin: {
        type: Sequelize.STRING
      },
      dateCin: {
        type: Sequelize.DATE
      },
      lieuDeliv: {
        type: Sequelize.STRING
      },
      nature: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      raisonSocial: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      exProv: {
        type: Sequelize.STRING
      },
      modePaiem: {
        type: Sequelize.STRING
      },
      natureMarch: {
        type: Sequelize.STRING
      },
      montantHorsTva: {
        type: Sequelize.STRING
      },
      tva: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('MarchadisesVendues');
  }
};