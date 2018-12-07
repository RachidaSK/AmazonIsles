const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    budget: {
        type: Number,
        trim: true,
        required: "Please enter your budget."
    },
    garment: {
        type: Schema.Types.ObjectId,
        ref: "Garment"
    },
    fabric: {
        type: Schema.Types.ObjectId,
        ref: "Fabric"
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: "Provider"
    }
  });
  
  const Order = mongoose.model("Clothes", OrderSchema);
  
  module.exports = Order;