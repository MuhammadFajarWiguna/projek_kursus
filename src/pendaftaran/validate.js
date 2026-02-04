const cekPendaftaran = async (req, res, next) => {
  const { tanggal_daftar, siswa_id, kursusId, status_pembayaran } =
    req.body || {};
  if (!tanggal_daftar || !siswa_id || !kursusId || !status_pembayaran) {
    return res.status(400).json({
      Status: "error",
      message: "Maaf, Tanggal daftar, Status pembayaran harus di isi..!!",
    });
  }
  next();
};

module.exports = { cekPendaftaran };
