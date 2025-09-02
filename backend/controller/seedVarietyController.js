const SeedVariety = require("../models/SeedVariety");

exports.createSeedVariety = async (req, res) => {
  try {
    const variety = new SeedVariety(req.body);
    await variety.save();
    res.status(201).json(variety);
  } catch (err) {
    res.status(500).json({ error: "Failed to create seed variety" });
  }
};

exports.getSeedVarieties = async (req, res) => {
  try {
    const varieties = await SeedVariety.find();
    res.json(varieties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch seed varieties" });
  }
};

exports.getSeedVarietyById = async (req, res) => {
  try {
    const variety = await SeedVariety.findById(req.params.id);
    if (!variety) return res.status(404).json({ error: "Seed variety not found" });
    res.json(variety);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch seed variety" });
  }
};

exports.updateSeedVariety = async (req, res) => {
  try {
    const updated = await SeedVariety.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update seed variety" });
  }
};

exports.deleteSeedVariety = async (req, res) => {
  try {
    await SeedVariety.findByIdAndDelete(req.params.id);
    res.json({ message: "Seed variety deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete seed variety" });
  }
};
