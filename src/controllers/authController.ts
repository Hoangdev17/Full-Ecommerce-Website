import { Request, Response } from "express";
import User from "~/models/User";
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from "~/utils/generateToken";

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
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
}

//login controller
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});

  try {
    if (!user) {
       res.status(400).json({ message: "Invalid credentials" });
       return;
    }

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id)

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false, // In development, set to false
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(200).json({
      message: "Login successfully",
      success: true,
      user,
      accessToken
    });

  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
      success: false
    })
  }
}