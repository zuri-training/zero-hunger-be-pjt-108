const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/user");
const { 
  userSignup,
  adminSignup,
  orgSignup,
  ngoSignup,
  userLogin 
} = require("../services/auth");

/**
 * @desc Sign up Individual
 * @route POST /api/v1/auth/signup
 * @access Public
 */
exports.signUp = asyncHandler(async (req, res) => {
  await userSignup(req.body, "individual", res);
});

/**
 * @desc Sign up Admin
 * @route POST /api/v1/auth/signup-admin
 * @access Public
 */
 exports.signUpAdmin = asyncHandler(async (req, res) => {
  await adminSignup(req.body, "admin", res);
});

/**
 * @desc Sign up Organization
 * @route POST /api/v1/auth/signup-org
 * @access Public
 */
 exports.signUpOrg = asyncHandler(async (req, res) => {
  await orgSignup(req.body, "organization", res);
});

/**
 * @desc Sign up Ngo
 * @route POST /api/v1/auth/signup-ngo
 * @access Public
 */
 exports.signUpNgo = asyncHandler(async (req, res) => {
  await ngoSignup(req.body, "ngo", res);
});



/**
 * @desc Login User
 * @route POST /api/v1/auth/login
 * @access Public
 */

exports.login = asyncHandler(async (req, res) => {
  await userLogin(req.body, ("individual", "admin", "organization", "ngo"), res);

});


