const db = require("../src/interface/db/models/index.js");

const { User } = db;

const buatUser = async (data) => {
  return await User.create(data);
};

const cariUser = async (nama_user) => {
  return await User.findOne({ where: { nama_user } });
};

module.exports = { buatUser, cariUser };
