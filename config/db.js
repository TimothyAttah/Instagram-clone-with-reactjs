const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/instagram-clone-v1'
const keys = require('./keys');

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    })
    console.log(`MongoDB connected on: ${mongoDB.connection.host}`);
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = connectDB;
