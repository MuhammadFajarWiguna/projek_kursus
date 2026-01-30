const { pendaftaran } = require("../interface/db/models/pendaftaran.js");

exports.tambahPendaftaran = (data) => {
  return pendaftaran.create(data);
};

exports.dataPendaftaran = () => {
  return pendaftaran.findAll({
    include: ["user", "kursus"],
  });
};
