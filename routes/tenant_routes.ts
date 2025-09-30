import express from "express";
import { createTenant } from "../controllers/tenant_controller";

const router = express.Router();

router.post("/tenants", createTenant);

export default router;
