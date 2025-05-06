import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
     res.status(401).json({ message: 'Access denied. No token provided.' });
     return;
  }

  try {
    const secretKey = process.env.ACCESS_TOKEN_SECRET || 'yourSecretKey';
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware;