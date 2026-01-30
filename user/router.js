const express = require("express");
const { registerUser, loginUser } = require("./controller.js");
const { authMiddleware } = require("./authMiddleware.js");
const { roleMiddleware } = require("./role.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get(
  "/mentor-dashboard",
  authMiddleware,
  roleMiddleware(["mentor"]),
  (req, res) => {
    res.json({ message: "Welcome Mentor!", user: req.user });
  },
);

router.get(
  "/siswa-dashboard",
  authMiddleware,
  roleMiddleware(["siswa"]),
  (req, res) => {
    res.json({ message: "Welcome Siswa!", user: req.user });
  },
);

module.exports = router;
