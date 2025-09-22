const express = require("express");
const {
  createRawMaterialStock,
  getAllRawMaterialStock,
  getRawMaterialStockById,
  updateRawMaterialStock,
  deleteRawMaterialStock
} = require("../controller/rawMaterialStockController");

const router = express.Router();

router.post("/", createRawMaterialStock);        // Create
router.get("/", getAllRawMaterialStock);         // Get all
router.get("/:id", getRawMaterialStockById);     // Get by ID
router.put("/:id", updateRawMaterialStock);      // Update
router.delete("/:id", deleteRawMaterialStock);   // Delete

module.exports = router;
