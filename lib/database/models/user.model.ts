import mongoose, { Document, Schema, models, model } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name?: string;
  email: string;
  role: 'admin' | 'creator' | 'brand';
  profileImage?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  loginMethod: 'google' | 'instagram' | 'email';
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'creator', 'brand'], required: true },
  profileImage: { type: String },
  socialLinks: {
    instagram: { type: String },
    youtube: { type: String },
    twitter: { type: String }
  },
  loginMethod: {
    type: String,
    enum: ['google', 'instagram', 'email'],
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

// Avoid model overwrite issue in Next.js dev environment
const User = models.User || model<IUser>('User', UserSchema);

export default User;
