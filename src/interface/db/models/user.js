"use strict";
const { Model } = require("sequelize");
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
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_user: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
      },

      alamat: {
        type: DataTypes.TEXT,
      },

      no_hp: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      profil: {
        type: DataTypes.STRING,
      },

      role: {
        type: DataTypes.ENUM("siswa", "mentor"),
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    },
  );
  return User;
};
