const jwt = require("jsonwebtoken");

class Token {
  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  createAndSendToken(userId) {
    const token = this.generateToken(userId);
    const cookieOptions = {
      expires: new Date(
        Date.now() + (process.env.JWT_COOKIE_EXPIRATION || 24 * 60 * 60 * 1000)
      ),
      httpOnly: process.env.NODE_ENV === "production" ? true : false,
    };

    // use secure option in production environment
    if (process.env.NODE_ENV === "production") {
      cookieOptions.secure = true;
    }

    return {
      cookie: {
        cookieName: "token",
        cookie: token,
        cookieOptions: cookieOptions,
      },
      token: token,
    };
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }
}

module.exports = { Token };
