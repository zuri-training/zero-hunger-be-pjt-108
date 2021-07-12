const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

/* 
** @Desc Validate the "Individual" to be Registered
*/
const userSignup = async (userData, role, res) => {
  try {
    // Validate the username
    let userNameNotTaken = await validateUsername(userData.userName);
    if (!userNameNotTaken) {
      return res.status(400).json({
        message: "Username is already taken.",
        success: false
      });
    }
    // Validate the email
    let emailNotRegistered = await validateEmail(userData.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: "Email is already registered.",
        success: false
      });
    }

    // Get the hashed password
    const password = await bcrypt.hash(userData.password, 10);
    // create a new user
    const newUser  = new User({
      ...userData,
      password,
      role,
      isAdmin: 0
    });
    await newUser.save();
    return res.status(201).json({
      message: "Hurray! now you are successfully registered. Please now login.",
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false
    });
  }
};



/**
  * Handle login credentials 
 */

 const userLogin = asyncHandler(async (req, role, res) => {
  let { email, password } = req;
  if(!email || !password) {
    return res.status(400).json({
      message: "One more details required.",
      success: false
    });
  }
  // Check if the email is in the database
  const user = await User.findOne({ email });
  if(!user) {
    return res.status(404).json({
      message: "Invalid email or login credentials.",
      success: false
    });
  }
  // Check the role
  if(user.role !== role) {
    return res.status(403).json({
      message: "Please make sure you are logging in from the right portal.",
      success: false
    });
  }
  // That means user is existing and trying to signin from the right portal
  // Now check for the password
  let isMatch = bcrypt.compare(password, user.password);
  if (isMatch) {
    // Sign in the token and issue it to the user
    let token = jwt.sign({ 
        user_id: user._id,
        role: user.role,
        userName: user.userName,
        email: user.email 
      }, 
      secret,
      { expiresIn: "7 days" }
      );

      let result = {
        userName: user.userName,
        role: user.role,
        email: user.email,
        token,
        expiresIn: 168
      };

      return res.status(200).json({
        ...result,
        message: "Hurray! You are now logged in.",
        success: true
      });
    } else {
      return res.status(403).json({
        message: "Incorrect password.",
        success: false
      });
    }
});

const validateUsername = async userName => {
  let user = await User.findOne({ userName });
  return user ? false : true;
}

const validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
}


module.exports = { 
  userSignup,
  userLogin 
};