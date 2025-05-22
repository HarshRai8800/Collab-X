import mongoose, { Schema, Document, model, models, Types } from 'mongoose';

export interface IBrand extends Document {
  user: Types.ObjectId;
  companyName?: string;
  walletBalance: number;
  niche?: string[];
  campaigns: Types.ObjectId[];
}

const BrandSchema: Schema<IBrand> = new Schema<IBrand>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: { type: String },
  walletBalance: { type: Number, default: 0 },
  niche: [{ type: String }],
  campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }]
});

// Prevent model overwrite in dev
const Brand = models.Brand || model<IBrand>('Brand', BrandSchema);

export default Brand;
