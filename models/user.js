// models/user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Define the User schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true // ensures no duplicate emails
  }
});

// Add Passport-Local Mongoose plugin
// This adds username, hash, salt fields, and authentication methods
userSchema.plugin(passportLocalMongoose, {
  usernameField: "username" // default is "username"; you can customize if needed
});

// Export the model
module.exports = mongoose.model("User", userSchema);

