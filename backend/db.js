const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/inotebook";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongo;