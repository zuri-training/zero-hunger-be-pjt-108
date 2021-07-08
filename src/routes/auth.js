const express = require("express");
const { check, body, validationResult } = require("express-validator");
const { signUp, login } = require("../controllers/authController");

// setUp Router
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
