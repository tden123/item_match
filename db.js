const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connected to db...');
  } catch (error) {
    console.error(`Can't connect to database: ${error.message}`);
  }
};

module.exports = connectDB;
