import sequelize from "sequelize";
import db from "../services/db.js";
const { Model, DataTypes } = sequelize

class User extends Model {

}

export default User;

User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    pseudo: { type: DataTypes.STRING, allowNull: false, unique: true },
    firstname: { type: DataTypes.STRING, allowNull: true },
    lastname: { type: DataTypes.STRING, allowNull: true },
    roleLevel: { type: DataTypes.INTEGER, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    pwd: { type: DataTypes.STRING, allowNull: false },
    steamId: { type: DataTypes.STRING, allowNull: true },
    avatar: { type: DataTypes.BLOB, allowNull: true }
  },{
    sequelize: db,
    modelName: "user",
  });

