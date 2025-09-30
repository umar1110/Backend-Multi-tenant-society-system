import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/CatchAsyncError";
import { tenantSchema } from "../types/tenant_types";
import ErrorHandler from "../utils/ErrorHandler";
import { runTransaction } from "../utils/db_helpers";
import TenantModel from "../models/tenant_model";

export const createTenant = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = tenantSchema.safeParse(req.body);
    if (!result.success) {
      throw new ErrorHandler(result.error, 400);
    }

    const transactionResult = runTransaction(async (session) => {
      const tenant = await TenantModel.create([result.data], { session });
    //   WIP
      return tenant;
    });

    res
      .status(201)
      .json({ message: "Tenant created successfully", data: result.data });
  }
);
