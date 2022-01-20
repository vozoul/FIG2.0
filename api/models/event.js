'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    name: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    place: DataTypes.STRING,
    is_irl: DataTypes.BOOLEAN,
    challengers: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};