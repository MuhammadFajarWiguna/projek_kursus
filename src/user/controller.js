const bcrypt = require("bcrypt");
const {
  tambahUser,
  hapusUser,
  lihatUser,
  ubahUser,
  cariId,
} = require("./servis.js");
const { responGagal, responSukses } = require("../payload/respon.js");
const fs = require("fs");
const path = require("path");

const createUser = async (req, res) => {
  let foto_profil = null;
  try {
    const { nama_user, password, email, alamat, no_hp, role } = req.body;

    if (req.file) {
      foto_profil = req.file.filename;
    }

    console.log(foto_profil);

    const keamanan = 10;
    const hasing = await bcrypt.hash(password, keamanan);

    const body = {
      nama_user,
      password: hasing,
      email,
      alamat,
      no_hp,
      profil: foto_profil,
      role,
    };
    const data = await tambahUser(body);
    return responSukses(
      res,
      200,
      "success",
      "Data berhasil di tambahkan",
      data,
    );
  } catch (error) {
    const letakFoto = path.join(__dirname, "../uploads/", foto_profil);
    fs.unlink(letakFoto, (err) => {
      if (err) console.error(err);
      else console.log("File foto berhasil di hapus");
    });
    return responGagal(res, 500, "error", error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const data = await lihatUser();
    return responSukses(res, 200, "Success", "Data User", data);
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { nama_user, password, no_hp, role } = req.body;

    const body = {
      nama_user,
      password,
      no_hp,
      role,
    };
    const id = req.params.id;

    // ini buat update file profile
    if (req.file) {
      body.profile = req.file.filename;
    }

    //  ini buat update password jika ingin merubah
    if (password) {
      const keamanan = 10;
      body.password = await bcrypt.hash(password, keamanan);
    }

    const data = await ubahUser(id, body);
    return res
      .status(201)
      .json({ status: "Success", message: "Data berhasil di ubah" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const fotoUpload = path.join(__dirname, "../uploads");
    const id = req.params.id;
    const user = await cariId(id);

    if (user.profil) {
      const filePath = path.join(fotoUpload, user.profil);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    await hapusUser(id);

    return res
      .status(201)
      .json({ status: "Success", message: "Data berhasil dihapus" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, updateUser, deleteUser, getUser };
