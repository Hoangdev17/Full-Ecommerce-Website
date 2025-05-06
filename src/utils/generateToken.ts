import jwt from 'jsonwebtoken';

const generateAccessToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '1d', // Access token expires in 15 minutes
  });
};

const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: '7d', // Refresh token expires in 7 days
  });
};

export { generateAccessToken, generateRefreshToken };