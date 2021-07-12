const asyncHandler = require("../middlewares/asyncHandler");
const {
  orgSignup,
  orgLogin 
} = require("../services/orgsvc");


/**
 * @desc Sign up Organization
 * @route POST /api/v1/auth/signup-org
 * @access Public
 */
 exports.signUpOrg = asyncHandler(async (req, res) => {
  await orgSignup(req.body, "organization", res);
});


/**
 * @desc Login User
 * @route POST /api/v1/auth/login
 * @access Public
 */

exports.loginOrg = asyncHandler(async (req, res) => {
  await orgLogin(req.body, ("individual", "admin", "organization", "ngo"), res);
});