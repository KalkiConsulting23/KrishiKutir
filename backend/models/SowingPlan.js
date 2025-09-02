const mongoose = require("mongoose");

const sowingPlanSchema = new mongoose.Schema({
  order_item_id: { type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" },
  sowing_date: Date,
  tray_1010_count: Number,
  tray_1020_count: Number,
  planned_output_g: Number,
  seed_required_g: Number,
  stage: {
    type: String,
    enum: ["Pending", "Seeded", "Growing", "Ready", "Harvested"],
    default: "Pending",
  },
});

module.exports = mongoose.model("SowingPlan", sowingPlanSchema);
