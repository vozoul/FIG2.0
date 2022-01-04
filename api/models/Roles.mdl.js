import { Model, DataTypes } from "sequelize";
import db from "../services/db.js";

class Role extends Model {

}

export default Role;

Role.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    level: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: true },
    type: { type: DataTypes.STRING, allowNull: true }
  },{
    sequelize: db,
    modelName: "user",
  });
