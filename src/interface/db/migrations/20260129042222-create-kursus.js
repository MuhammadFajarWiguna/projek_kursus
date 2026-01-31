"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kursus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_kursus: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

      mentor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      judul: {
        type: Sequelize.STRING,
      },

      deskripsi: {
        type: Sequelize.STRING,
      },

      harga: {
        type: Sequelize.INTEGER,
      },

      status: {
        type: Sequelize.ENUM("online", "offline"),
        allowNull: false,
      },

      tgl_mulai: {
        type: Sequelize.DATE,
      },

      tgl_selesai: {
        type: Sequelize.DATE,
      },

      thumbnail: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kursus");
  },
};
