import mongoose, { Model, Schema, Document } from "mongoose";

export interface ITenant extends Document {
  name: string;
  email: string;
  subDomain: string;
  createdAt: Date;
  isOnboarded: boolean;
  adminId: string;
  isEmailVerified: boolean;
  password: string;
  phone: string;
  address: string;
}

const tenantSchema = new Schema<ITenant>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    subDomain: { type: String, required: true, unique: true },
    isOnboarded: { type: Boolean, default: false },
    adminId: { type: String, required: true }, // TODO: Reference to User model
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);


tenantSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 3600*24*7, // Delete after a week 
    partialFilterExpression: { isEmailVerified: false } // only unverified docs
  }
);

const TenantModel: Model<ITenant> = mongoose.model("Tenant", tenantSchema);
export default TenantModel;
