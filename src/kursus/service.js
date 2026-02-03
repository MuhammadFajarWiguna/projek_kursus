const db = require("../interface/db/models/index.js");
const { Kursus } = db;

const buatKursus = async (data) => {
  return await Kursus.create(data);
};

const cariIdKursus = async (id) => {
  return await Kursus.findByPk(id);
};

const tampilKursus = async () => {
  return await Kursus.findAll();
};

const ubahKursus = async (id, body) => {
  const data = await Kursus.findByPk(id);
  if (!data) return null;

  await data.update(body);
  return data;
};

const hapusKursus = async (id) => {
  return await Kursus.destroy({ where: { id } });
};
module.exports = {
  buatKursus,
  cariIdKursus,
  tampilKursus,
  ubahKursus,
  hapusKursus,
};
