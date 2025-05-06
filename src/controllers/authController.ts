import { Request, Response } from "express";
import User from "~/models/User";
import bcrypt from 'bcrypt'

//register controller
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const UserExist = await User.findOne({ email });

    if(UserExist){
      res.status(400).json({message: "email is already exist"});
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashPassword
    });
    
    const newUser = await User.findOne({ email }).select('-password');

    res.status(200).json({
      message: "Register is successful",
      success: true,
      User: newUser
    });

  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
}

//login controller
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    
  } catch (error) {
    
  }
}