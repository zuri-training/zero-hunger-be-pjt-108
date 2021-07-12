const asyncHandler = require("../middlewares/asyncHandler");
const { 
  adminSignup,
  adminLogin 
} = require("../services/adminsvc");


/**
 * @desc Sign up Admin
 * @route POST /api/v1/auth/signup-admin
 * @access Public
 */
 exports.signUpAdmin = asyncHandler(async (req, res) => {
  await adminSignup(req.body, "admin", res);
});


/**
 * @desc Login User
 * @route POST /api/v1/auth/login
 * @access Public
 */
exports.loginAdmin = asyncHandler(async (req, res) => {
  await adminLogin(req.body, ("individual", "admin", "organization", "ngo"), res);

});
