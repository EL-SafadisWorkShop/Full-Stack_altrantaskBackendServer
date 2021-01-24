//Creating the Database connection
require("dotenv").config();
const mongoose = require("mongoose");

const User = require("./user");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

exports.User = User;
exports.connectDb = connectDb;
