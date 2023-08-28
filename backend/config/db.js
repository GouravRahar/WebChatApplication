const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://GouravRahar:GouravRahar@cluster0.adjar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(`Error is: ${error.message}`);
      process.exit();
    }
  };

  module.exports = connectDB;