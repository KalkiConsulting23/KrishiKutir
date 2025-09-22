const RawMaterialStock = require("../models/RawMaterialStock");

// ➕ Create raw material
exports.createRawMaterialStock = async (req, res) => {
  try {
    const { name, unit, total_quantity } = req.body;
    const stock = new RawMaterialStock({ name, unit, total_quantity });
    await stock.save();
    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to create raw material stock" });
  }
};

// 📥 Get all
exports.getAllRawMaterialStock = async (req, res) => {
  try {
    const stocks = await RawMaterialStock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch raw material stock" });
  }
};

// 📥 Get by ID
exports.getRawMaterialStockById = async (req, res) => {
  try {
    const stock = await RawMaterialStock.findById(req.params.id);
    if (!stock) return res.status(404).json({ error: "Raw material not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch raw material stock" });
  }
};

// ✏️ Update
exports.updateRawMaterialStock = async (req, res) => {
  try {
    const stock = await RawMaterialStock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!stock) return res.status(404).json({ error: "Raw material not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to update raw material stock" });
  }
};

// ❌ Delete
exports.deleteRawMaterialStock = async (req, res) => {
  try {
    const stock = await RawMaterialStock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ error: "Raw material not found" });
    res.json({ message: "Raw material stock deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete raw material stock" });
  }
};
