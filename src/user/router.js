const express = require("express");
const {
  registerUser,
  loginUser,
  mentorDashboard,
  siswaDashboard,
  updateUser,
  deleteUser,
  getByRole,
  createUser,
} = require("./controller.js");

const { authMiddleware } = require("../middlewares/authMiddleware.js");
const { roleMiddleware } = require("../middlewares/role.js");
const uploadUser = require("../multer/uploadUser.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/tambah", uploadUser.single("profile"), createUser);

router.get(
  "/mentor",
  authMiddleware,
  roleMiddleware(["mentor"]),
  mentorDashboard,
);
router.get(
  "/data_mentor",
  authMiddleware,
  roleMiddleware(["mentor"]),
  getByRole,
);

router.get("/data_siswa", authMiddleware, roleMiddleware(["siswa"]), getByRole);
router.get("/siswa", authMiddleware, roleMiddleware(["siswa"]), siswaDashboard);

router.patch(
  "/update/:id",
  authMiddleware,
  roleMiddleware(["mentor", "siswa"]),
  uploadUser.single("profile"),
  updateUser,
);

router.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware(["mentor"]),
  deleteUser,
);

module.exports = router;
