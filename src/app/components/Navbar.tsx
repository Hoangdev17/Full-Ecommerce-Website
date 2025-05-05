'use client'

import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50">
            <div className="bg-black w-full px-4 sm:px-8 lg:px-16 py-2 ">
                {/* Layout Cover Middle and Right */} 
                <div className="flex items-center justify-between w-full">
                    {/* Middle Section */}
                    <div className="flex-1 flex justify-center">
                       <span className="text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</span>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <select
                            className="bg-black text-white border border-gray-500 rounded-md px-2 py-1"
                            onChange={(e) => console.log(`Language changed to: ${e.target.value}`)}
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3 md:py-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400">Exclusive</a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-lg font-medium text-black/70">
                    <Link href="/home" className="hover:text-black transition">Home</Link>
                    <Link href="/product" className="hover:text-black transition">Product</Link>
                    <Link href="/contact" className="hover:text-black transition">Contact</Link>
                    <Link href="/about" className="hover:text-black transition">About</Link>
                </div>

                {/* Actions (Search + Auth Buttons) */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Search Input */}
                    <Input
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                        className="w-48 lg:w-64 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
                    />
                    
                    {/* Login Button */}
                    <Button
                        type="primary"
                        href="/login"
                        className="rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
                    >
                        Login
                    </Button>

                    {/* Sign Up Button */}
                    <Button
                        href="/signup"
                        className="rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
                    >
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t px-4 pb-4 space-y-4">
                    <a href="/home" className="block text-base hover:text-gray-500">Home</a>
                    <a href="/product" className="block text-base hover:text-gray-500">Product</a>
                    <a href="/contact" className="block text-base hover:text-gray-500">Contact</a>
                    <a href="/about" className="block text-base hover:text-gray-500">About</a>
                    <Input
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                        className="w-full"
                    />
                    <div className="flex space-x-2">
                        <Button type="primary" href="/login" className="w-full rounded-md">
                            Login
                        </Button>
                        <Button href="/signup" className="w-full rounded-md">
                            Sign Up
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
