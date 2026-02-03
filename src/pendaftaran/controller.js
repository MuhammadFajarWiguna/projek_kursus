const { responGagal, responSukses } = require("../payload/respon");
const {
  tambahPendaftaran,
  hapusPendaftaran,
  ubahPendaftaran,
  lihatPendaftaran,
  cariIdPendaftaran,
} = require("./servis.js");

const createPendaftaran = async (req, res) => {
  try {
    const { tanggal_daftar, status_pembayaran, siswa_id, kursus_id } = req.body;

    const body = { siswa_id, kursus_id, tanggal_daftar, status_pembayaran };

    const data = await tambahPendaftaran(body);
    return responSukses(
      res,
      200,
      "Success",
      "Data berhasil di tambahkan",
      data,
    );
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};

const getPendafataran = async (req, res) => {
  try {
    const data = await lihatPendaftaran();
    return responSukses(res, 200, "Success", "Data Pendaftaran", data);
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};

const deletePendaftaran = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await hapusPendaftaran(id);
    return responSukses(res, 200, "Success", "Data berhasil di hapus");
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};

const getAllById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cariIdPendaftaran();
    return responSukses(res, 200, "Success", "Data pendaftaran", data);
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};

const updatePendaftaran = async (req, res) => {
  try {
    const id = req.params.id;
    const { tanggal_daftar, status_pembayaran } = req.body;
    const body = { tanggal_daftar, status_pembayaran };

    const data = await ubahPendaftaran(id, body);
    return responSukses(res, 200, "Success", "Data berhasil di ubah", data);
  } catch (error) {
    return responGagal(res, 404, error.message);
  }
};
module.exports = {
  createPendaftaran,
  getPendafataran,
  deletePendaftaran,
  updatePendaftaran,
  getAllById
};
