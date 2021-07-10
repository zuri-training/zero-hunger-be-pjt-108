const express = require("express");
const { 
  signUp, 
  signUpAdmin,
  signUpOrg,
  signUpNgo, 
  login 
} = require("../../controllers/authController");

// setUp Router
const router = express.Router();

router.post("/signup", signUp);
router.post("/signup-admin", signUpAdmin);
router.post("/signup-org", signUpOrg);
router.post("/signup-ngo", signUpNgo);
router.post("/login", login);

module.exports = router;
