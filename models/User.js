const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var UserSchema = new Schema({
    userId: {
        type: String,
        trim: true,
        validate:[validator.isEmail, "invalid email"],
        required: "Please type your user ID(email address)."
    },
    password: {
        type: String,
        trim: true,
        required: "Please type your password."
    },
    phone: {
        type: String,
        trim: true,
        required: "Please enter your phone number."
    },
    street: {
        type: String,
        trim: true,
        required: "Please enter street address."
    },
    city: {
        type: String,
        trim: true,
        required: "Please enter city."
    },
    state: {
        type: String,
        trim: true,
        required: "Please enter state."
    },
    country: {
        type: String,
        trim: true,
        required: "Please enter country."
    },
    profile_picture: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        enum: ['client', 'provider'],
        required: "Please choose category"
      }
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;