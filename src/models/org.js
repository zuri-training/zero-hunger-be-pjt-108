const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    // Define user properties
    organization: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    // role: {
    //   type: String,
    //   enum: ["individual", "admin", "organization", "ngo"],
    //   default: "individual"
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: 0
    // },
  },
  { timestamps: true }
);

// Hash password using bcrypt js
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("org", userSchema);
