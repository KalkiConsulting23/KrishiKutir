const SeedStock = require("../models/SeedStock");

// ➕ Create stock entry
exports.createSeedStock = async (req, res) => {
  try {
    const { seed_variety_id, total_quantity_g } = req.body;
    const stock = new SeedStock({ seed_variety_id, total_quantity_g });
    await stock.save();
    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to create seed stock" });
  }
};

// 📥 Get all seed stock
exports.getAllSeedStock = async (req, res) => {
  try {
    const stocks = await SeedStock.find().populate("seed_variety_id");
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch seed stock" });
  }
};

// 📥 Get seed stock by ID
exports.getSeedStockById = async (req, res) => {
  try {
    const stock = await SeedStock.findById(req.params.id).populate("seed_variety_id");
    if (!stock) return res.status(404).json({ error: "Seed stock not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch seed stock" });
  }
};

// ✏️ Update seed stock
exports.updateSeedStock = async (req, res) => {
  try {
    const stock = await SeedStock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!stock) return res.status(404).json({ error: "Seed stock not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: "Failed to update seed stock" });
  }
};

// ❌ Delete seed stock
exports.deleteSeedStock = async (req, res) => {
  try {
    const stock = await SeedStock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ error: "Seed stock not found" });
    res.json({ message: "Seed stock deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete seed stock" });
  }
};
