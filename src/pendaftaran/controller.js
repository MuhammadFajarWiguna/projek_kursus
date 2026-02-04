const {
  tambahPendaftaran,
  hapusPendaftaran,
  ubahPendaftaran,
  lihatPendaftaran,
  cariIdPendaftaran,
} = require("./service.js");

const createPendaftaran = async (req, res) => {
  try {
    const { tanggal_daftar,  siswa_id, kursusId ,status_pembayaran} = req.body;

    const body = { tanggal_daftar,  siswa_id, kursusId ,status_pembayaran };

    const data = await tambahPendaftaran(body);
    return res.status(200).json({ message: "Data berhasil ditambahkan", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPendafataran = async (req, res) => {
  try {
    const data = await lihatPendaftaran();
    return res.status(201).json({ message: "Data pendaftaran", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePendaftaran = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await hapusPendaftaran(id);
    return res.status(200).json({ message: "Data berhasil dihapus" }, null);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cariIdPendaftaran(id);
    return res
      .status(201)
      .json({ message: "Data pendaftaran berdasarkan id", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePendaftaran = async (req, res) => {
  try {
    const id = req.params.id;
    const { tanggal_daftar,  siswa_id, kursusId ,status_pembayaran } = req.body;
    const body = { tanggal_daftar,  siswa_id, kursusId ,status_pembayaran };

    const data = await ubahPendaftaran(id, body);
    return res.status(200).json({ message: "Data berhasil diubah", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createPendaftaran,
  getPendafataran,
  deletePendaftaran,
  updatePendaftaran,
  getAllById,
};
