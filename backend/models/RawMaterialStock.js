const mongoose = require("mongoose");

const rawMaterialStockSchema = new mongoose.Schema({
  name: { type: String, required: true },  // e.g. Tray 1010, Tray 1020, Fertilizer
  unit: { type: String, required: true },  // e.g. pcs, kg, g, liters
  total_quantity: { type: Number, required: true, default: 0 },
  last_updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RawMaterialStock", rawMaterialStockSchema);
