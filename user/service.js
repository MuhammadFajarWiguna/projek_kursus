const db = require("../src/interface/db/models/index.js");
const { User } = db;

const buatUser = async (data) => {
  return await User.create(data);
};

const cariUser = async (email) => {
  return await User.findOne({ where: { email } });
};

const cariIdUser = async (id) => {
  return await User.findByPk(id);
};

const tampilUser = async () => {
  return await User.findAll();
};

const ubahUser = async (id, body) => {
  const data = await User.findByPk(id);
  if (!data) return null;

  await data.update(body);
  return data;
};

const hapusUser = async (id) => {
  return await User.destroy({ where: { id } });
};
module.exports = {
  buatUser,
  cariUser,
  cariIdUser,
  tampilUser,
  ubahUser,
  hapusUser,
};
