const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  seed_variety_id: { type: mongoose.Schema.Types.ObjectId, ref: "SeedVariety" },
  quantity_g: { type: Number, required: true }
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
