'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SommesVersees', {
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
      dataCin: {
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
      ville: {
        type: Sequelize.STRING
      },
      exProviilisees: {
        type: Sequelize.STRING
      },
      versees: {
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
    await queryInterface.dropTable('SommesVersees');
  }
};