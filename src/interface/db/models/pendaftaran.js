"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pendaftaran extends Model {
    static associate(models) {
      Pendaftaran.belongsTo(models.Kursus, {
        foreignKey: "kursus_id",
        as: "kursus",
      });

      Pendaftaran.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Pendaftaran.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tanggal_daftar: {
        type: DataTypes.DATE,
      },

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      kursusId: {
        type: DataTypes.INTEGER,
        references: {
          model: "kursus",
          key: "id",
        },
      },

      status_pembayaran: {
        type: DataTypes.ENUM("pending", "lunas", "cicil"),
      },
    },
    {
      sequelize,
      modelName: "Pendaftaran",
      tableName: "pendaftaran",
    },
  );
  return Pendaftaran;
};
