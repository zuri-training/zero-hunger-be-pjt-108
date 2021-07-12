const express = require("express");
const { 
  signUp, 
  login 
} = require("../../controllers/authController");
const {
  signUpAdmin, 
  loginAdmin 
} = require("../../controllers/adminController");
const {
  signUpNgo, 
  loginNgo 
} = require("../../controllers/ngoController");
const {
  signUpOrg, 
  loginOrg
} = require("../../controllers/orgController");


// setUp Router
const router = express.Router();

router.post("/signup", signUp);
router.post("/signup-admin", signUpAdmin);
router.post("/signup-org", signUpOrg);
router.post("/signup-ngo", signUpNgo);
router.post("/login", login);
router.post("/login-admin", loginAdmin);
router.post("/login-ngo", loginNgo);
router.post("/login-org", loginOrg);

module.exports = router;
