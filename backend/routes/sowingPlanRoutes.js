const express = require("express");
const router = express.Router();
const ctrl = require("../controller/sowingPlanController");

router.get("/", ctrl.getSowingPlans);
router.get("/:id", ctrl.getSowingPlanById);
router.put("/:id", ctrl.updateSowingPlan);
router.delete("/:id", ctrl.deleteSowingPlan);

module.exports = router;