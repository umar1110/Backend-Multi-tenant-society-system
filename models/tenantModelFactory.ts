import mongoose from "mongoose";
import { schemaMap } from "../constants/schemaConstants";

export const getTenantModel = (
  tenantId: string,
  baseName: keyof typeof schemaMap
) => {
  const modelName = `${tenantId}_${baseName}`;

  if (mongoose.models[modelName]) {
    return mongoose.models[modelName];
  }
  const schema = schemaMap[baseName];
  if (!schema) {
    throw new Error(`Schema ${baseName} not found`);
  }

  const model = mongoose.model(modelName, schema);
  return model;
};
