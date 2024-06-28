const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Check the connection status
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(
      "mongodb+srv://preetamchinde:preetam123@zataksedb.oyymfte.mongodb.net/ZatakseDB?retryWrites=true&w=majority&appName=ZatakseDB"
    );
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
