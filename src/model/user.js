const mongoose = require('mongodb');

const userSchema = mongoose.ScEMA(
  {
    // Define user properties
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
    userRole: {
      type: String,
      enum: ['admin', 'organization', 'individual', 'ngo'],
      default: 'individual',
    },
    isAdmin: {
      type: Boolean,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
