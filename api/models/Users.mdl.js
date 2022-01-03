import { Model, DataTypes } from "sequelize";
import db from "../services/db.js";

class User extends Model {

}

export default User;

User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    pseudo: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING, allowNull: true },
    lastname: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    pwd: { type: DataTypes.STRING, allowNull: false },
    steamId: { type: DataTypes.STRING, allowNull: true },
    avatar: { type: DataTypes.BLOB, allowNull: true }
  },{
    sequelize: db,
    modelName: "user",
  });

