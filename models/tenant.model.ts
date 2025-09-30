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
    phone: { type: String, required: true },
    address: { type: String, required: true },
    subDomain: { type: String, required: true, unique: true },
    isOnboarded: { type: Boolean, default: false },
    adminId: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);


tenantSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 10,  // 10 seconds for demo purposes
    partialFilterExpression: { isEmailVerified: false } // only unverified docs
  }
);

const TenantModel: Model<ITenant> = mongoose.model("Tenant", tenantSchema);
export default TenantModel;
