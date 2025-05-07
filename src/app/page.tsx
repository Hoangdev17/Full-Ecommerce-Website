'use client'

import { Image } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Home() {
  return (
    <div className="px-4 py-6 pt-[130px]">

      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Categories */}
          <aside className="basis-[30%] bg-white shadow rounded-lg p-6 min-h-[250px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Woman's Fashion",
                "Men's Fashion",
                "Electronics",
                "Home & Lifestyle",
                "Sports & Toys",
                "Baby's & Toys",
                "Groceries & Pets",
                "Health & Beauty",
              ].map((category, idx) => (
                <li
                  key={idx}
                  className="hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content - Slide */}
          <div className="basis-[70%] bg-white shadow rounded-lg p-6 flex items-center justify-center">
          <Image
            src="/assets/Slide1.png"
            alt="Banner"
            width={800}
            height={300}
            className="rounded-lg"
          />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Flash Sales</h2>

      {/* Slider Container with horizontal scrolling */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 pb-4">
          {[
            { id: 1, name: "Product 1", price: "$20", image: "/assets/product1.png", rating: 4 },
            { id: 2, name: "Product 2", price: "$30", image: "/assets/product1.png", rating: 5 },
            { id: 3, name: "Product 3", price: "$40", image: "/assets/product1.png", rating: 3 },
            { id: 4, name: "Product 4", price: "$50", image: "/assets/product1.png", rating: 4 },
            { id: 5, name: "Product 5", price: "$60", image: "/assets/product1.png", rating: 5 },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[250px] h-[320px] snap-start transition-all hover:shadow-xl hover:scale-105 duration-300 relative"
            >
              {/* Product Image */}
              <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  max-width={180}
                  max-height={150}
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {/* "Add to Cart" text */}
                <a
                  href="/cart"
                  className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white text-sm px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  Add to Cart
                </a>
              </div>

              {/* Product Name and Price */}
              <div className="flex flex-col items-center justify-between w-full mt-2">
                <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-6">
        <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-gray-700 transition duration-300">
          View All Products
        </button>
      </div>
    </section>
      
    </div>
  );
}
