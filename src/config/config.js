require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 3000,
};