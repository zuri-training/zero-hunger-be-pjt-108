const User = require("../model/user");

class UserModel {
  async findUser(email) {
    const user = await User.findOne({ email });
    return user !== null
      ? {
          status: 200,
          data: user,
        }
      : {
          status: 404,
          data: user,
        };
  }

  async createUser(firstName, lastName, email, password) {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    return newUser;
  }
}

module.exports = { UserModel };
