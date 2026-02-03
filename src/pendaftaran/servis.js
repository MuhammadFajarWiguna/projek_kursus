const db = require("../interface/db/models/index.js");
const { Pendaftaran } = db;

const tambahPendaftaran = async (body) => {
  return await Pendaftaran.create(body);
};

const lihatPendaftaran = async () => {
  return await Pendaftaran.findAll({
    include: [
      { model: User, as: "user" },
      { model: Kursus, as: "kursus" },
    ],
  });
};

const ubahPendaftaran = async (id, body) => {
  const data = await cariId(id);
  return Pendaftaran.update(id, body);
};

const hapusPendaftaran = async (id) => {
  return await Pendaftaran.destroy({ where: { id: id } });
};

const cariIdPendaftaran = async (id) => {
  return await Pendaftaran.findByPk(id);
};
module.exports = {
  tambahPendaftaran,
  hapusPendaftaran,
  ubahPendaftaran,
  lihatPendaftaran,
  cariIdPendaftaran,
};
