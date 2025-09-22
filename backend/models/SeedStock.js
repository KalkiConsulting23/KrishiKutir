const mongoose = require("mongoose");

const seedStockSchema = new mongoose.Schema({
  seed_variety_id: { type: mongoose.Schema.Types.ObjectId, ref: "SeedVariety", required: true },
  total_quantity_g: { type: Number, required: true, default: 0 }, // total in grams
  last_updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SeedStock", seedStockSchema);
