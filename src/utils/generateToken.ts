import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const generateAccessToken = (userId: mongoose.Types.ObjectId): string => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '1d', // Access token expires in 15 minutes
  });
};

const generateRefreshToken = (userId: mongoose.Types.ObjectId): string => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: '7d', // Refresh token expires in 7 days
  });
};

export { generateAccessToken, generateRefreshToken };