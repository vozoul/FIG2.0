import sequelize from "sequelize";
import db from "../services/db.js"
// import User from './Users.mdl.js'
// import Role from './Roles.mdl.js'
// import Event from './Events.mdl.js'

const { DataTypes } = sequelize


// Event.init({
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     allowNull: false,
//     primaryKey: true,
//     unique: true,
//   },
//   name: { type: DataTypes.STRING, allowNull: false, unique: true },
//   type: { type: DataTypes.STRING, allowNull: true },
//   desciption: { type: DataTypes.STRING, allowNull: true },
//   start_date: { type: DataTypes.DATE, allowNull: false },
//   end_date: { type: DataTypes.DATE, allowNull: true },
//   location: { type: DataTypes.STRING, allowNull: true },
//   cover: { type: DataTypes.BLOB, allowNull: true },
//   participants: {type: DataTypes.JSON, allowNull: true}
// },
// {
//   sequelize: db,
//   modelName: "event",
//   tableName: "events"
// });

// Role.init({
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     allowNull: false,
//     unique: true
//   },
//   level: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, unique: true },
//   name: { type: DataTypes.STRING, allowNull: true },
//   type: { type: DataTypes.STRING, allowNull: true }
// },{
//   sequelize: db,
//   modelName: "role",
//   tableName: "roles"
// });


// export default {
//   Role,
//   User,
//   Event
// }