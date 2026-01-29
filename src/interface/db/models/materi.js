'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materi.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      judul_materi: {
        type: DataTypes.STRING,
      },

      pertemuan: {
        type: DataTypes.INTEGER,
      },

      judul_materi: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      kursusId: {
        type: DataTypes.INTEGER,
        references: {
          model: "kursus",
          key: "id",
        },
      },
  }, {
    sequelize,
    modelName: 'Materi',
    tableName: 'materi',
  });
  return Materi;
};