const express = require("express");
const router = express.Router();
const ctrl = require("../controller/orderItemController");

router.get("/:id", ctrl.getOrderItem);
router.put("/:id", ctrl.updateOrderItem);
router.delete("/:id", ctrl.deleteOrderItem);

module.exports = router;
