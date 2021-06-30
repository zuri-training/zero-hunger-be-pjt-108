const { Password } = require("./comparePassword");
const { Token } = require("./token");
const { UserModel } = require("./db");
const UserToken = new Token();
const User = new UserModel();

class UserAuth {
  async signUp(firstName, lastName, email, password, cPassword) {
    if (!firstName || !lastName || !email || !password) {
      return {
        status: 400,
        data: {
          message: "One or more details are required!",
        },
      };
    }

    if (password.length < 6) {
      return {
        status: 400,
        data: {
          message: "Password must be 6 or more characters long",
        },
      };
    }

    if (cPassword !== password) {
      return {
        status: 400,
        data: {
          message: "Password does not match",
        },
      };
    }

    const existingUser = await User.findUser(email);

    if (existingUser.data !== null) {
      return {
        status: 400,
        data: {
          message: "User already exists!",
        },
      };
    }
    const newUser = await User.createUser(firstName, lastName, email, password);

    const newUserToken = UserToken.createAndSendToken(newUser._id);

    return {
      status: 201,
      message: "Account created successfully!",
      data: {
        user: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
          id: newUser._id,
          userRole: newUser.userRole,
          token: newUserToken,
        },
      },
    };
  }

  async login(email, password) {
    if (!email || !password) {
      return {
        status: 400,
        data: {
          message: "One or more details are required!",
        },
      };
    }

    const user = await User.findUser(email);
    if (user.data === null) {
      return {
        status: 400,
        data: {
          message: "Invalid email or login",
        },
      };
    }
    const hashUserPassword = Password.comparePassword(
      password,
      user.data.password
    );

    if (!hashUserPassword) {
      return {
        status: 400,
        data: {
          message: `Invalid email or password`,
        },
      };
    }

    const userToken = UserToken.createAndSendToken(user.data._id);

    return user !== null
      ? {
          status: 200,
          data: {
            message: `Welcome back, ${user.data.firstName}`,
            user: {
              firstName: user.data.firstName,
              lastName: user.data.lastName,
              email: user.data.email,
              isAdmin: user.data.isAdmin,
              id: user.data._id,
              userRole: user.data.userRole,
              token: userToken,
            },
          },
        }
      : user;
  }
}

module.exports = { UserAuth };
