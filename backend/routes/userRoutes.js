const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/goalsetter/", registerUser);
router.post("/goalsetter/login", loginUser);
router.get("/goalsetter/me", protect, getMe);

module.exports = router;
