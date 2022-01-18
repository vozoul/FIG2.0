'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      leader: {
        allowNull: false,
        type: Sequelize.STRING
      },
      servers: {
        allowNull: true,
        type: Sequelize.JSON
      },
      discord: {
        allowNull: true,
        type: Sequelize.STRING
      },
      teamspeack: {
        allowNull: true,
        type: Sequelize.STRING
      },
      groups: {
        allowNull: true,
        type: Sequelize.JSON
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
    await queryInterface.dropTable('Teams');
  }
};