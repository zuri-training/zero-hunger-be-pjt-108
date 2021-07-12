const asyncHandler = require("../middlewares/asyncHandler");
const { 
  userSignup,
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
 * @desc Login User
 * @route POST /api/v1/auth/login
 * @access Public
 */
exports.login = asyncHandler(async (req, res) => {
  await userLogin(req.body, ("individual", "admin", "organization", "ngo"), res);
});


