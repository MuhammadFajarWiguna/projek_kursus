'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pendaftaran.init({
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
  }, {
    sequelize,
    modelName: 'Pendaftaran',
    tableName: 'pendaftaran',
  });
  return Pendaftaran;
};