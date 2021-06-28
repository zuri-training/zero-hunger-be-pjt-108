const generateToken = require("./generateToken");

const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + (process.env.JWT_COOKIE_EXPIRATION || 24 * 60 * 60 * 1000)
    ),
    httpOnly: true,
  };

  // use secure option in production environment
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, cookieOptions)
    .json({ success: true, token });
};

module.exports = createSendToken;
