import { Response, Request } from "express";
import TenantModel from "./models/tenant.model";

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


// async function createTenant() {
//   const tenant = await TenantModel.create({
//     name: 'Acme Inc.',
//     email: 'admin@acme.com',
//     subDomain: 'acme',
//     isOnboarded: false,
//     adminId: '64f1bca2d7c3e02d6f9a1234',
//     isEmailVerified: false,
//     password: 'hashedPasswordHere',   // hash in real use
//     phone: '+1-555-123-4567',
//     address: '123 Market Street, San Francisco, CA'
//     // createdAt will default to now
//   });

//   console.log('Inserted Tenant:', tenant);
// }

// createTenant().catch(console.error);
export default app;
