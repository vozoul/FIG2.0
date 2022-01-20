const uuid = require('uuid').v4;

'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    pseudo: DataTypes.UUID,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
    bio: DataTypes.STRING,
    avatar: DataTypes.BLOB,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, _ ) => {
    return user.id = uuid();
  });
  return User;
};