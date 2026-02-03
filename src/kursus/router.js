const express = require("express");
const {
  createKursus,
  getAll,
  getById,
  updateKursus,
  deleteKursus,
} = require("./controller.js");

const { authMiddleware } = require("../middlewares/authMiddleware.js");
const { roleMiddleware } = require("../middlewares/role.js");
const uploadKursus = require("../multer/uploadKursus.js")

const router = express.Router();


router.get("/",authMiddleware,roleMiddleware(["mentor", "siswa"]), getAll);
router.get("/cari/:id",authMiddleware,roleMiddleware(["mentor", "siswa"]), getById);
router.post("/tambah",authMiddleware,roleMiddleware(["mentor"]),uploadKursus.single("thumbnail"), createKursus);
router.patch("/ubah/:id",authMiddleware,roleMiddleware(["mentor"]), uploadKursus.single("thumbnail"),updateKursus);
router.delete("hapus/:id", authMiddleware,roleMiddleware(["mentor"]),deleteKursus);


module.exports = router;
