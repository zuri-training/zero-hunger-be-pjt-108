const asyncHandler = require("../middlewares/asyncHandler");
const {
  ngoSignup,
  ngoLogin 
} = require("../services/ngosvc");


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
exports.loginNgo = asyncHandler(async (req, res) => {
  await ngoLogin(req.body, ("individual", "admin", "organization", "ngo"), res);
});


