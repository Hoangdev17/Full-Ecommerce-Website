'use client'

import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { login } from '../service/authService';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login(formData);
      console.log("Login data", res.data);
      toast.success("Login successfully");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Login failed");
    }
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-blue-500 to-purple-600 p-4 mt-[30px]">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Section: Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/assets/ImageLogin.png"
            alt="Login"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <Typography
              variant="h4"
              className="text-center font-bold text-gray-800"
              style={{marginBottom: "20px"}}
            >
              Login in to Exclusive
            </Typography>

            <form onSubmit={handleLogin}>
              {/* Username Field */}
              <div className="mb-5">
                <TextField
                  id="email"
                  label="email"
                  variant="outlined"
                  fullWidth
                  type='email'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#3b82f6',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '16px',
                      color: '#6b7280',
                    },
                    '& .MuiInputBase-root': {
                      fontSize: '16px',
                      color: '#111827',
                    },
                  }}
                  value={formData.email}
                  onChange={(e)=> setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Password Field */}
              <div className="mb-8">
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={(e)=> setFormData({...formData, password: e.target.value})}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#3b82f6',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '16px',
                      color: '#6b7280',
                    },
                    '& .MuiInputBase-root': {
                      fontSize: '16px',
                      color: '#111827',
                    },
                  }}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{marginBottom: "15px"}}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"  // Tạo khoảng cách dưới nút Login
              >
                Login
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outlined"
                fullWidth
                onClick={handleGoogleLogin}
                className="border-gray-300 text-gray-700 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center mt-[10px]"
              >
                <FaGoogle className="mr-2 text-red-500" />
                Login with Google
              </Button>

              {/* Links */}
              <div className="text-center mt-6">
                <Typography variant="body2" className="text-gray-600">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-2">
                  Don't have an account?{' '}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </Typography>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
