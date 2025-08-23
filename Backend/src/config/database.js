const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Razikkhan:razik108@cluster0.s7ecvia.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
