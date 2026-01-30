const service = require("./service.js");

exports.daftarKursus = async (req, res) => {
    try {
        const userId = req.user.id;
        const { kursusId } = req.body;

        const data = await service.tambahPendaftaran({
            userId,
            kursusId,
            tanggal_daftar: new Date(),
            status_pembayaran: "pending",
    });
     return res.status(201).json({message: "Berhasil, daftar kursus", data})
    } catch (error) {
     return res.status(500).json({message: error.message})
    }
}