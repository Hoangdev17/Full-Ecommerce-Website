import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () =>{
  console.log(`Server running on ${PORT}`)
})