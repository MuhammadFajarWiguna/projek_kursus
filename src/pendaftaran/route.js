const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const auth = require("../middleware/auth.js");
const role = require("../middleware/role.js")

router.post("/pendaftaran",auth, role("siswa", "mentor"),
controller.dataPendaftaran)

router.post("/daftar",auth,role("siswa"),controller.daftarKursus)

module.exports = router;

co