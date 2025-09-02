const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  delivery_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Draft", "Planned", "Completed", "Cancelled"],
    default: "Draft",
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }],
});

module.exports = mongoose.model("Order", orderSchema);
