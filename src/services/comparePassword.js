const bcrypt = require("bcrypt");

class Password {
  static comparePassword(password, comparePassword) {
    return bcrypt.compareSync(password, comparePassword);
  }
}

module.exports = { Password };
