const OrderItem = require("../models/OrderItem");

exports.getOrderItem = async (req, res) => {
  try {
    const item = await OrderItem.findById(req.params.id).populate("seed_variety_id");
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const updated = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    await OrderItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
