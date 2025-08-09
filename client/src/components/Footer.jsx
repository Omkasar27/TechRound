import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={assets.logo} className="h-8 mb-6" alt="UrbanLoom" />
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Your One-Stop Shop for Quality & Style. At UrbanLoom, we bring you the best in lifestyle, 
              curated with care and delivered with love. Our mission is to offer exceptional products, 
              unbeatable deals, and a shopping experience you'll always enjoy.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-4 h-4 bg-gray-400 group-hover:bg-blue-500 transition-colors rounded-sm"></div>
              </div>
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-4 h-4 bg-gray-400 group-hover:bg-pink-500 transition-colors rounded-sm"></div>
              </div>
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-4 h-4 bg-gray-400 group-hover:bg-blue-400 transition-colors rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 relative">
              COMPANY
              <div className="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About us', 'Delivery', 'Privacy Policy'].map((item, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 relative">
              CONTACT US
              <div className="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-green-500 to-emerald-500"></div>
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-green-500 transition-colors">
                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-green-500 rounded-full transition-colors"></div>
                  </div>
                  <span>+91 9325651234</span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full transition-colors"></div>
                  </div>
                  <span>emailId@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <p className="text-gray-600 text-sm">
                © 2024 UrbanLoom.com - All Rights Reserved
              </p>
              <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
                <span>Terms of Service</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Privacy Policy</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Cookies</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <div className="w-3 h-3 bg-red-400 rounded-sm animate-pulse"></div>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;  