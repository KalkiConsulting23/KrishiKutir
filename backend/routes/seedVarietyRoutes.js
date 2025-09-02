const express = require("express");
const router = express.Router();
const ctrl = require("../controller/seedVarietyController");

router.post("/", ctrl.createSeedVariety);
router.get("/", ctrl.getSeedVarieties);
router.get("/:id", ctrl.getSeedVarietyById);
router.put("/:id", ctrl.updateSeedVariety);
router.delete("/:id", ctrl.deleteSeedVariety);

module.exports = router;
