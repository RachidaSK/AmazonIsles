const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var ProviderSchema = new Schema({
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
    budget: {
        type: Number,
        trim: true,
        required: "Please enter your budget."
    },
    availability: {
        type: Boolean,
        trim: true,
        required: "Please enter your availability."
    },
    demo: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your demo URL."
    },
    picture: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your picture URL."
    },
    category: {
        type: String,
        trim: true,
        required: "Please choose category"
    },
    clothes: [{
        type: Schema.Types.ObjectId,
        ref: "Clothes",
    }]
  });
  
  const Provider = mongoose.model("Provider", ProviderSchema);
  
  module.exports = Provider;