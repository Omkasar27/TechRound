import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filterPrducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [isLoading, setIsLoading] = useState(false);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    setIsLoading(true);
    setTimeout(() => {
      let productsCopy = products.slice();

      if (showSearch && search) {
        productsCopy = productsCopy.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (category.length > 0) {
        productsCopy = productsCopy.filter((item) =>
          category.includes(item.category)
        );
      }
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter((item) =>
          subCategory.includes(item.subCategory)
        );
      }
      setFilterProducts(productsCopy);
      setIsLoading(false);
    }, 300);
  };

  const sortProducts = (e) => {
    let fp = filterPrducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fp.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fp.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  const CustomCheckbox = ({ value, onChange, children, checked }) => (
    <label className="group flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50">
      <div className="relative">
        <input
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
          className="sr-only"
        />
        <div className={`w-4 h-4 rounded border-2 transition-all duration-200 ${
          checked 
            ? 'bg-black border-black shadow-md' 
            : 'border-gray-300 group-hover:border-gray-400'
        }`}>
          {checked && (
            <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <span className="select-none">{children}</span>
    </label>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-8 min-h-screen">
      {/* Filter Options */}
      <div className="w-full sm:w-64 transition-all duration-300">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-3 text-sm font-semibold mb-6 sm:hidden bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-sm hover:shadow-md w-full justify-center"
        >
          FILTERS
          <img
            className={`h-3 transition-all duration-300 ${showFilters ? "rotate-180" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </button>

        <div className={`transition-all duration-500 ${showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"} overflow-hidden sm:overflow-visible`}>
          {/* Category Filter */}
          <div className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              Categories
            </h3>
            <div className="space-y-1">
              {["Men", "Women", "Kids"].map((cat) => (
                <CustomCheckbox
                  key={cat}
                  value={cat}
                  onChange={toggleCategory}
                  checked={category.includes(cat)}
                >
                  {cat}
                </CustomCheckbox>
              ))}
            </div>
          </div>

          {/* SubCategory */}
          <div className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              Type
            </h3>
            <div className="space-y-1">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <CustomCheckbox
                  key={subCat}
                  value={subCat}
                  onChange={toggleSubCategory}
                  checked={subCategory.includes(subCat)}
                >
                  {subCat}
                </CustomCheckbox>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="transform hover:scale-105 transition-transform duration-200">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>
          <div className="relative group">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="text-sm px-6 py-3 border border-gray-200 bg-white rounded-xl appearance-none cursor-pointer hover:border-gray-300 focus:border-black focus:ring-4 focus:ring-black/5 transition-all duration-200 shadow-sm hover:shadow-md min-w-44 font-medium"
            >
              <option value="relavent">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low-High</option>
              <option value="high-low">Sort By: High-Low</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`transition-all duration-500 ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterPrducts.map((item, index) => (
              <div 
                key={index}
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isLoading ? 'none' : 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* No Results State */}
        {!isLoading && filterPrducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-20">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Collection;