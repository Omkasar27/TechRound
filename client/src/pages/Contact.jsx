import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-12 border-t border-gray-200'>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className='my-16 flex flex-col justify-center md:flex-row gap-12 mb-28 px-4'>
        <div className="w-full md:max-w-[480px] group">
          <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
            <img 
              src={assets.contact_img} 
              alt="Contact us" 
              className='w-full transform group-hover:scale-110 transition-transform duration-700'
            />
          </div>
        </div>
        
        <div className='flex flex-col justify-center items-start gap-8 max-w-md'>
          <div className="space-y-6 w-full">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
              <p className='font-semibold text-xl text-gray-800 mb-3 flex items-center gap-3'>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏪</span>
                Our Store
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Hyderabad, Telangana <br />India
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
              <p className='font-semibold text-lg text-gray-800 mb-3 flex items-center gap-3'>
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">📞</span>
                Contact Details
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Phone: (+91) 9887777322 <br />
                Email: Email@gmail.com
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group">
              <p className='text-gray-800 font-bold text-2xl mb-2 flex items-center gap-3'>
                <span className="w-3 h-3 bg-black rounded-full group-hover:animate-pulse"></span>
                UrbanLoom
              </p>
              <p className='text-gray-600 mb-6'>Learn more about our journey and values</p>
              
              <button className='group/btn border-2 border-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded-lg hover:shadow-lg transform hover:scale-105 active:scale-95 relative overflow-hidden'>
                <span className="relative z-10">Explore More About Us</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="transform hover:scale-[1.02] transition-transform duration-500">
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default Contact