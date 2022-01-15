import sequelize from "sequelize";;

const { Model } = sequelize;
const User =  new Model();

User.init({
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: { type: DataTypes.STRING, allowNull: true },
    lastname: { type: DataTypes.STRING, allowNull: true },
    roleLevel: { type: DataTypes.INTEGER, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    pwd: { type: DataTypes.STRING, allowNull: false },
    steamId: { type: DataTypes.STRING, allowNull: true },
    avatar: { type: DataTypes.BLOB, allowNull: true },
  },
  {
    sequelize: db,
    modelName: "user"  }
);

export default User;


