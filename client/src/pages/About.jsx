import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  const features = [
    {
      title: "Quality Assurance:",
      description: "We stand out by putting our customers first. From a user-friendly shopping experience to a wide selection of quality products, we ensure every step of your journey is smooth and satisfying.",
      icon: "🛡️",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Convenience:",
      description: "We make shopping effortless by bringing everything you need right to your fingertips. Our intuitive website, easy navigation, and smart search features help you find products quickly.",
      icon: "⚡",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Exceptional Customer Service:",
      description: "We believe that great service makes all the difference. Our dedicated support team is always here to assist you with any questions, concerns, or issues—quickly and professionally",
      icon: "💎",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="text-2xl text-center pt-12 border-t border-gray-200 relative">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mt-6 rounded-full"></div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Section */}
      <div className="my-16 flex flex-col md:flex-row gap-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-[450px] group">
          <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-white p-2">
            <img
              src={assets.about_img}
              alt="About us"
              className="w-full rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center gap-8 md:w-2/4 text-gray-600">
          <div className="space-y-6">
            <div className="group cursor-default">
              <p className="text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300 bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <span className="relative z-10">
                  Welcome to <span className="font-bold text-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Clothing Store</span>, your one-stop destination for quality,
                  convenience, and value. We are passionate about delivering an
                  exceptional online shopping experience, offering a wide range of
                  handpicked products that cater to your everyday needs and lifestyle.
                  Our mission is to make shopping simple, enjoyable, and affordable by
                  combining top-notch customer service with a secure, user-friendly
                  platform. Whether you're looking for the latest trends, daily
                  essentials, or unique finds, we've got you covered. We're not just a
                  store — we're your trusted online partner in shopping smarter.
                </span>
              </p>
            </div>
            
            <div className="group cursor-default">
              <p className="text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300 bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-teal-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <span className="relative z-10">
                  But we're more than just an e-commerce store — we're a passionate
                  team on a mission to transform the way people shop online. With
                  secure payments, lightning-fast delivery, and friendly customer
                  support that truly listens, we're committed to making your
                  experience smooth and stress-free.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-200">
                Our mission is to revolutionize the online shopping experience by
                offering a seamless, secure, and customer-centric e-commerce
                platform. We aim to connect people with high-quality products at
                competitive prices, backed by exceptional service and fast delivery.
                By leveraging technology and innovation, we strive to make shopping
                more convenient, enjoyable, and accessible for everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-2xl py-8 text-center relative">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mt-6 rounded-full"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 mx-4 sm:mx-6 lg:mx-8 overflow-hidden rounded-2xl shadow-2xl">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`group bg-white border border-gray-200 px-8 md:px-12 py-16 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden ${
              index === 1 ? 'md:border-x-0' : ''
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animation: 'fadeInUp 0.8s ease-out forwards'
            }}
          >
            {/* Animated Background Elements */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-100/50 to-gray-200/50 rounded-full transform translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-2xl filter drop-shadow-lg">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-300 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-gray-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300"></div>
          </div>
        ))}
      </div>

      <div className="transform hover:scale-[1.02] transition-transform duration-500 mx-4 sm:mx-6 lg:mx-8">
        <NewsLetterBox/>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;