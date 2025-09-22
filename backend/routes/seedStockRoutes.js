const express = require("express");
const {
  createSeedStock,
  getAllSeedStock,
  getSeedStockById,
  updateSeedStock,
  deleteSeedStock
} = require("../controller/seedStockController");

const router = express.Router();

router.post("/", createSeedStock);        // Create
router.get("/", getAllSeedStock);         // Get all
router.get("/:id", getSeedStockById);     // Get by ID
router.put("/:id", updateSeedStock);      // Update
router.delete("/:id", deleteSeedStock);   // Delete

module.exports = router;
