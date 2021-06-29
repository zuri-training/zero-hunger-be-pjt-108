const asyncHandler = require("../middlewares/asyncHandler");
const createSendToken = require("../utils/createSendToken");
const ErrorHandler = require("../utils/errorHandler");
const { UserAuth } = require("../services/auth");
const Auth = new UserAuth();

/**
 * @desc Register User
 * @route POST /api/v1/auth/register
 * @access Public
 */

exports.signUp = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, cpassword } = req.body;

  try {
    const newUser = await Auth.signUp(
      firstName,
      lastName,
      email,
      password,
      cpassword
    );

    return res.status(newUser.status).json({
      data: newUser.data,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
});

/**
 * @desc Login User
 * @route POST /api/auth/login
 * @access Public
 */

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.login(email, password);
    return res.status(user.status).json({
      data: user.data,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
});
