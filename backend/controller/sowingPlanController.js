const SowingPlan = require("../models/SowingPlan");

exports.getSowingPlans = async (req, res) => {
  try {
    const plans = await SowingPlan.find().populate({
      path: "order_item_id",
      populate: { path: "seed_variety_id" }
    });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSowingPlanById = async (req, res) => {
  try {
    const plan = await SowingPlan.findById(req.params.id).populate("order_item_id");
    if (!plan) return res.status(404).json({ error: "Not found" });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSowingPlan = async (req, res) => {
  try {
    const updated = await SowingPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSowingPlan = async (req, res) => {
  try {
    await SowingPlan.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
