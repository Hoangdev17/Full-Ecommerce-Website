import mongoose, { Schema, Document } from 'mongoose';

// Interface for User
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema for User
const UserSchema: Schema = new Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    refreshToken: { type: String, select: false },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true, 
  }
);

// Model for User
const User = mongoose.model<IUser>('User', UserSchema);

export default User;