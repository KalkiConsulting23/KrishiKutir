const express = require("express");
const router = express.Router();
const ctrl = require("../controller/reportController");

router.get("/orders-summary", ctrl.ordersSummary);
router.get("/sowing-summary", ctrl.sowingSummary);
router.get("/sales", ctrl.salesReport);

module.exports = router;
