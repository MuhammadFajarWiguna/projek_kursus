const express = require("express");
const router = express.Router();

const {
  createPendaftaran,
  getPendafataran,
  deletePendaftaran,
  updatePendaftaran,
  getAllById,
} = require("./controller.js");

const { cekPendaftaran } = require("./middleware.js");

router.post("/tambah", cekPendaftaran, createPendaftaran);

router.get("/", getPendafataran);

router.get("/data/:id", getAllById);

router.patch("/update/:id", cekPendaftaran, updatePendaftaran);

router.delete("/hapus/:id", deletePendaftaran);

module.exports = router;
