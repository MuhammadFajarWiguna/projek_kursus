const db = require("../interface/db/models/index.js");
const { User } = db;

const tambahUser = async (body) => {
  return await User.create(body);
};

const lihatUser = async () => {
  return await User.findAll();
};

const ubahUser = async (id, body) => {
  const data = await cariId(id);
  return User.update(id, body);
};

const hapusUser = async (id) => {
  return await User.destroy({ where: { id: id } });
};

const cariId = async (id) => {
  return await User.findByPk(id);
};
module.exports = { tambahUser, hapusUser, ubahUser, lihatUser, cariId };
