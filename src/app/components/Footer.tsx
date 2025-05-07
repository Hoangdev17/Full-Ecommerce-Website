import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Để thêm biểu tượng mạng xã hội

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
                {/* Column 1 */}
                <div>
                    <h4 className="font-bold mb-4 text-lg">About Us</h4>
                    <p className="text-sm text-gray-300">
                        Learn more about our mission, vision, and values.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="font-bold mb-4 text-lg">Customer Service</h4>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
                        <li className="hover:text-blue-400 cursor-pointer">Shipping & Returns</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="font-bold mb-4 text-lg">Information</h4>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-blue-400 cursor-pointer">Accessibility</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
                    <ul className="flex justify-center md:justify-start space-x-6 text-gray-300">
                        <li className="hover:text-blue-500 cursor-pointer">
                            <FaFacebook size={24} />
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <FaTwitter size={24} />
                        </li>
                        <li className="hover:text-pink-400 cursor-pointer">
                            <FaInstagram size={24} />
                        </li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <h4 className="font-bold mb-4 text-lg">Subscribe</h4>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mb-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="w-full bg-blue-500 text-white py-3 rounded-md transition-transform transform hover:scale-105">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-500">
                <p>&copy; 2025 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
