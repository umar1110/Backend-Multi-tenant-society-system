import mongoose, { Model, Schema, Document } from "mongoose";

export interface ITenant extends Document {
  name: string;
  email: string;
  subDomain: string;
  createdAt: Date;
  isOnboarded: boolean;
  adminId: string;
}

const tenantSchema = new Schema<ITenant>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    subDomain: { type: String, required: true, unique: true },
    isOnboarded: { type: Boolean, default: false },
    adminId: { type: String, required: true },
  },
  { timestamps: true }
);

const TenantModel: Model<ITenant> = mongoose.model("Tenant", tenantSchema);
export default TenantModel;
