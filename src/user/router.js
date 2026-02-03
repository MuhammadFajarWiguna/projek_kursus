const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("./controller.js");
const uploadProfil = require("../middleware/uploadFoto.js");

router.post("/tambah", uploadProfil.single("profile"), createUser);

router.get("/", getUser);

router.patch("/update/:id", updateUser);

router.delete("/hapus/:id", deleteUser);

module.exports = router;
