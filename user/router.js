const express = require("express");
const {
  registerUser,
  loginUser,
  mentorDashboard,
  siswaDashboard,
  updateUser,
  deleteUser,
} = require("./controller");

const { authMiddleware } = require("../src/middlewares/authMiddleware.js");
const { roleMiddleware } = require("../src/middlewares/role.js");
const uploadUser = require("../src/multer/uploadUser.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get(
  "/mentor",
  authMiddleware,
  roleMiddleware(["mentor"]),
  mentorDashboard,
);

router.get("/siswa", authMiddleware, roleMiddleware(["siswa"]), siswaDashboard);

router.patch(
  "/users/update/:id",
  authMiddleware,
  roleMiddleware(["mentor", "siswa"]),
  uploadUser.single("profil"),
  updateUser,
);

router.delete(
  "/users/delete/:id",
  authMiddleware,
  roleMiddleware(["mentor"]),
  deleteUser,
);

module.exports = router;
