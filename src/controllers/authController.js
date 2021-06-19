const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../model/user");
const createSendToken = require("../utils/createSendToken");
const ErrorHandler = require("../utils/errorHandler");


/**
 * @desc Register User
 * @route POST /api/v1/auth/register
 * @access Public
 */

exports.signUp = asyncHandler(async(req, res, next) => {
  const {firstName, lastName, email, password, passwordConfirm} = req.body 
  

  const existingUser = await User.findOne({email})

  if (existingUser) {
    return next(
      new ErrorHandler('User already exists, please create a new account', 404)
    );
  }

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    role,
    ...req.body
  });

  createSendToken(newUser, 201, res);

})