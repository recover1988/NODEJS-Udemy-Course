const { Model, DataTypes, Sequelize } = require("sequelize");
const { USE } = require("sequelize/types/index-hints");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    fields: "create_at",
    defaultValue: Sequelize.NOW,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "client",
  },
};

class User extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User,
};
