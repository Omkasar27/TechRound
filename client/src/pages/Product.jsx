import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const fetchProductData = async () => {
    setIsLoading(true);
    setTimeout(() => {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
      setIsLoading(false);
    }, 300);
  };

  const handleAddToCart = () => {
    if (!size) {
      // Add shake animation for size selection
      const sizeContainer = document.querySelector('.size-container');
      sizeContainer.classList.add('shake');
      setTimeout(() => sizeContainer.classList.remove('shake'), 500);
      return;
    }
    
    addToCart(productData._id, size);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const StarRating = ({ rating = 4 }) => (
    <div className="flex items-center gap-1 mt-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 transition-colors duration-200 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-600 text-sm ml-2">(122 reviews)</span>
    </div>
  );

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (isLoading) {
    return (
      <div className="border-t-2 pt-10">
        <div className="animate-pulse">
          <div className="flex gap-12 flex-col sm:flex-row">
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="flex flex-col gap-3 sm:w-[18.7%] w-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-[24%] sm:w-full h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="w-full sm:w-[80%] h-96 bg-gray-200 rounded"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return productData ? (
    <div className="border-t-2 pt-10 transition-all duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-3">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt="Product thumbnail"
                className={`w-[24%] sm:w-full flex-shrink-0 cursor-pointer rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  image === item 
                    ? 'border-black shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] group">
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <img 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                src={image} 
                alt="Main product" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="font-bold text-3xl mt-2 text-gray-900 leading-tight">
              {productData.name}
            </h1>
            <StarRating />
          </div>

          <div className="flex items-center gap-4">
            <p className="text-4xl font-bold text-gray-900">
              {currency}{productData.price}
            </p>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              In Stock
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              {productData.description}
            </p>
          </div>

          <div className="size-container space-y-4">
            <p className="font-semibold text-lg">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border-2 py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                    item === size 
                      ? "border-black bg-black text-white shadow-lg scale-105" 
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:shadow-md"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            {!size && (
              <p className="text-red-500 text-sm opacity-0 animate-pulse">
                Please select a size
              </p>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-gradient-to-r from-black to-gray-800 text-white px-12 py-4 text-sm font-semibold rounded-xl hover:from-gray-800 hover:to-black transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              ADD TO CART
            </button>
            
            {showAddedMessage && (
              <div className="absolute top-full mt-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium animate-bounce">
                ✓ Added to cart!
              </div>
            )}
          </div>

          <hr className="border-gray-200" />
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Product Features
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>100% Original Product</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Cash On Delivery Available</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Easy Return & Exchange within 7 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Description/Reviews Section */}
      <div className="mt-16">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-8 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === "description"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Description
            {activeTab === "description" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-gray-600"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-8 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === "reviews"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Reviews (121)
            {activeTab === "reviews" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-gray-600"></div>
            )}
          </button>
        </div>

        <div className="border border-gray-200 rounded-b-xl bg-white">
          {activeTab === "description" ? (
            <div className="p-8 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Elevate your wardrobe with our timeless Classic Denim Jacket,
                designed for everyday style and comfort. Crafted from 100% premium
                cotton denim, this unisex jacket features a modern fit with a
                vintage wash that adds character to any outfit. With its sturdy
                stitching, button-front closure, and versatile design, it's perfect
                for layering through every season.
              </p>
              <p>
                Pair it with a white tee and sneakers for a casual day out, or throw
                it over a dress for a cool contrast.
              </p>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">4.2</div>
                <div>
                  <StarRating rating={4} />
                  <p className="text-sm text-gray-600 mt-1">Based on 121 reviews</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 text-center">
                  Reviews section coming soon! We're working on bringing you detailed customer feedback.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts 
          category={productData.category} 
          subCategory={productData.subCategory} 
        />
      </div>

      <style jsx>{`
        .shake {
          animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;