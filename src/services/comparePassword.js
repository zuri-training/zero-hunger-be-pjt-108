const bcrypt = require("bcrypt");

class Password {
  constructor() {}

  static comparePassword(password, comparePassword) {
    return bcrypt.compareSync(password, comparePassword);
  }
}

module.exports = { Password };
