const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = "mongodb+srv://1608naman:naman2002@cluster0.vtbrqag.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongoDB;
