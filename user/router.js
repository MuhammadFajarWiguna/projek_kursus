const express = require("express");
const {
  registerUser,
  loginUser,
  mentorDashboard,
  siswaDashboard,
  updateUser,
  deleteUser,
} = require("./controller");

const { authMiddleware } = require("../middlewares/authMiddleware");
const { roleMiddleware } = require("../middlewares/role");
const uploadUser = require("../multer/uploadUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.use(authMiddleware);

router.get("/mentor", roleMiddleware(["mentor"]), mentorDashboard);
router.get("/siswa", roleMiddleware(["siswa"]), siswaDashboard);

router.patch(
  "/users/:id",
  roleMiddleware(["mentor", "siswa"]),
  uploadUser.single("profil"),
  updateUser,
);

router.delete("/users/:id", roleMiddleware(["mentor"]), deleteUser);

module.exports = router;
