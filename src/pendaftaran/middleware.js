const cekPendaftaran = async (req, res, next) => {
  const { status_pembaayaran, tanggal_daftar } = req.body;
  if (!status_pembaayaran || !tanggal_daftar) {
    return res.status(404).json({
      Status: "error",
      message: "Maaf, Tanggal daftar, Status pembayaran harus di isi..!!",
    });
  }
  next();
};



module.exports = { cekPendaftaran };
