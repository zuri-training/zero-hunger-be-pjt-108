const express = require('express');
const connectDB = require('./db/setup');
require('dotenv').config(); //allows us to use the environmental variables in the .env
const { PORT } = process.env  //create your own .env file outside the src directory
const app = express();

const authRoute = require('./routes/auth')

// Initialize Express middleware
app.use(express.json({ extended: false }));

// Setup db || Connect to db
connectDB();

// Create a basic express route
app.get('/', (req, res) => res.json({ message: 'Welcome onboard people...' }));

// PORT
const port = process.env.PORT || PORT;


// Routes Declartion 
app.use('/api/v1/auth', authRoute)

// Listen to connection
app.listen(port, () => console.log(`server running on port ${port}`));


// Handling unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close server and exit
  server.close(() => process.exit(1));
});


