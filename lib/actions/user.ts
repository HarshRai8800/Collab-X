"use server"
import User, { IUser } from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';


export interface ICreateUser {
clerkId: string;
  name?: string;
  email: string;
  role: 'admin' | 'creator' | 'brand';
  profileImage?: string;
  loginMethod: 'google' | 'instagram' | 'email';

}


export async function createUser(data:ICreateUser): Promise<IUser> {
  await connectToDatabase();

  const existingUser = await User.findOne({ clerkId: data.clerkId });
  if (existingUser) return existingUser;

  const newUser = await User.create({
    clerkId: data.clerkId,
    name: data.name,
    email: data.email,
    role: data.role,
    profileImage: data.profileImage,
    loginMethod: data.loginMethod
  });

  return newUser;
}

/**
 * Retrieves a user by their Clerk ID.
 */
export async function getUserByClerkId(clerkId: string): Promise<IUser | null> {
  
    await connectToDatabase();
  return User.findOne({ clerkId });
}

export async function updateUser(clerkId: string, updates: Partial<ICreateUser>): Promise<IUser | null> {
  await connectToDatabase();
  const updatedUser = await User.findOneAndUpdate({ clerkId }, updates, { new: true });
  return updatedUser;
}

export async function deleteUser(clerkId: string): Promise<{ success: boolean }> {
  await connectToDatabase();
  const res = await User.deleteOne({ clerkId });
  return { success: res.deletedCount === 1 };
}
