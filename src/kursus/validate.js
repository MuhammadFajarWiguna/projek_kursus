const { cariIdKursus } = require("./service.js");

const cekId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await cariIdKursus(id);
    if (!data) {
      return res.status(404).json({ message: "Data tidak ditemukan" }, null);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};

module.exports = { cekId };
