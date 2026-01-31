const {
  buatUser,
  cariUser,
  cariIdUser,
  tampilUser,
  ubahUser,
  hapusUser,
} = require("./service.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const registerUser = async (req, res) => {
  try {
    const { nama_user, password, email, alamat, no_hp } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await buatUser({
      nama_user,
      password: hashedPassword,
      email,
      alamat,
      no_hp,
      role: "siswa",
    });

    res.status(201).json({
      message: "User created",
      user: {
        id: user.id,
        nama_user: user.nama_user,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await cariUser(email);
    if (!user)
      return res.status(404).json({ message: "User tidak ditemukan!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ message: "Password salah silahkan cek kembali" });

    const token = jwt.sign(
      { id: user.id, nama_user: user.nama_user, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({ message: "Login sukses", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await tampilUser();
    return res.status(200).json({ message: "Date user", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cariIdUser(id);
    return res.status(200).json({ message: "Data user berdasar id", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_user, email, alamat, no_hp } = req.body;

    const userLama = await cariIdUser(id);
    if (!userLama) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    let profil = userLama.profil;

    if (req.file) {
      profil = req.file.filename;

      if (userLama.profil) {
        const oldPath = path.join(__dirname, "../src/uploads", userLama.profil);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    const body = { nama_user, email, alamat, no_hp, profil };
    await ubahUser(id, body);
    res.json({ message: "User berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await cariIdUser(id);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    if (user.profil) {
      const filePath = path.join(__dirname, "../src/uploads", user.profil);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await hapusUser(id);

    res.json({ message: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mentorDashboard = (req, res) => {
  res.json({
    message: "Welcome Mentor!",
    user: req.user,
  });
};

const siswaDashboard = (req, res) => {
  res.json({
    message: "Welcome Siswa!",
    user: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getAll,
  mentorDashboard,
  siswaDashboard,
  getById,
  updateUser,
  deleteUser,
};
