const Order = require("../models/Order");
const SowingPlan = require("../models/SowingPlan");
const OrderItem = require("../models/OrderItem");

// Orders by status
exports.ordersSummary = async (req, res) => {
  try {
    const summary = await Order.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sowing by stage
exports.sowingSummary = async (req, res) => {
  try {
    const summary = await SowingPlan.aggregate([{ $group: { _id: "$stage", count: { $sum: 1 } } }]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sales report
exports.salesReport = async (req, res) => {
  try {
    const sales = await OrderItem.aggregate([
      {
        $lookup: {
          from: "seedvarieties",
          localField: "seed_variety_id",
          foreignField: "_id",
          as: "seed"
        }
      },
      { $unwind: "$seed" },
      {
        $group: {
          _id: null,
          totalSales: { $sum: { $multiply: ["$quantity_g", "$seed.selling_price"] } }
        }
      }
    ]);
    res.json(sales[0] || { totalSales: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
