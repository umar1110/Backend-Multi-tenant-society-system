
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Build in Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

import { ErrorMiddleware } from "./middlewares/Error";
// Routes 
import tenantRoutes from "./routes/tenant_routes";
app.use("/api/v1", tenantRoutes);


app.use(ErrorMiddleware);
export default app;
