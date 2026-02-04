"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user", [
      {
        nama_user: "Asep",
        password: "12345",
        email: "asep@gmail.com",
        no_hp: "08562937251",
        alamat: "Bandung",
        profile: "",
        role: "siswa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  },
};
