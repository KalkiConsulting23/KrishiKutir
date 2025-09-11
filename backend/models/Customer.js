const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String },
  address: { type: String },
  customer_type: { 
    type: String, 
    enum: ["One-Time", "Recurring"], 
    default: "One-Time" 
  }
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
