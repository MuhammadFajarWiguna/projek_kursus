'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kursus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kursus.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_kursus: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      judul: {
        type: DataTypes.STRING,
      },

      deskripsi: {
        type: DataTypes.STRING,
      },

      harga: {
        type: DataTypes.INTEGER,
      },

      status: {
        type: DataTypes.ENUM("online", "offline"),
        allowNull: false,
      },

      tgl_mulai: {
        type: DataTypes.DATE,
      },

      tgl_selesai: {
        type: DataTypes.DATE,
      },

      thumbnail: {
        type: DataTypes.STRING,
      },
  }, {
    sequelize,
    modelName: 'Kursus',
    tableName: 'kursus',
  });
  return Kursus;
};