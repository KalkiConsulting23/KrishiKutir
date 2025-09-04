const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/seed-varieties", require("./routes/seedVarietyRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/order-items", require("./routes/orderItemRoutes"));
app.use("/api/sowing-plans", require("./routes/sowingPlanRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/customers", require("./routes/customerRoutes"));

module.exports = app;

