const mongoose = require("mongoose");

const seedVarietySchema = new mongoose.Schema({
  name: { type: String, required: true },
  growth_days: { type: Number, required: true },
  out_1010_g: { type: Number, required: true }, // output per 1010 tray
  out_1020_g: { type: Number, required: true }, // output per 1020 tray
  seed_per_1010_g: { type: Number, required: true }, // seeds needed per 1010 tray
  seed_per_1020_g: { type: Number, required: true }, // seeds needed per 1020 tray
  selling_price: { type: Number, required: true }
});

module.exports = mongoose.model("SeedVariety", seedVarietySchema);
