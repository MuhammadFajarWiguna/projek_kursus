const express = require("express");
const router = express.Router();

const {
  createPendaftaran,
  getPendafataran,
  deletePendaftaran,
  updatePendaftaran,
  getAllById,
} = require("./controller.js");

const { cekPendaftaran } = require("./validate.js");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const { roleMiddleware } = require("../middlewares/role.js");

router.post("/tambah", cekPendaftaran, createPendaftaran);
router.get("/", authMiddleware, roleMiddleware(["mentor"]), getPendafataran);
router.get("/data/:id", getAllById);
router.patch("/update/:id", cekPendaftaran, updatePendaftaran);
router.delete("/hapus/:id", deletePendaftaran);

module.exports = router;
