'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      pseudo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pwd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bio: {
        allowNull: true,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      steamId: {
        allowNull: true,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: "0000"
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
    await queryInterface.dropTable('Users');
  }
};