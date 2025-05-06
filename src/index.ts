import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDB from './config/db';

import authRoutes from '~/routes/authRoutes'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

connectDB();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>{
  console.log(`Server running on ${PORT}`)
});