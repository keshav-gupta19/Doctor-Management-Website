const Mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected ${Mongoose.connection.host}`.bgGreen.red);
  } catch (error) {
    console.log(`MongoDb server error ${error} `.bgRed.white);
  }
};

module.exports = connectDB;
