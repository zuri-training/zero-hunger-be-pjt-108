/**----------------------- 
 * 1. Create a connection function for mongodb
 * 2. Start a local mongo server connection
-------------------------**/
// Setup Mongoose
const mongoose = require('mongoose');
require('dotenv').config();
const {  MONGO_URI, connectionString } = process.env;

// Async/Await mongoose connection
const connectDB = async () => {
  try {
    await mongoose.connect(  MONGO_URI || connectionString, {
      // This property will stop unwanted warning in the console or client side
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Database connection successful...');
  } catch (err) {
    console.log(err.message);
    
    // Exit with failure
    process.exit(1);
  }
}

module.exports = connectDB;