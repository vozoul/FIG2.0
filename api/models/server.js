'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Server.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ip_server: DataTypes.STRING,
    port_server: DataTypes.INTEGER,
    max_slots: DataTypes.INTEGER,
    options: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Server',
  });
  return Server;
};