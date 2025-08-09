import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-20 px-4 bg-gradient-to-b from-white to-gray-50'>
        <div className='max-w-6xl mx-auto'>
            {/* Section Header */}
            <div className='text-center mb-16'>
                <h2 className='text-3xl font-light text-gray-900 mb-4'>Why Choose Us</h2>
                <div className='w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto'></div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='group relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105'></div>
                    <div className='relative p-8 text-center'>
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <img src={assets.exchange_icon} className='w-8 h-8 opacity-80' alt="" />
                        </div>
                        <h3 className='font-semibold text-gray-900 mb-3 text-lg'>
                            Easy Exchange
                        </h3>
                        <p className='text-gray-600 leading-relaxed text-sm'>
                            Hassle-free exchanges within 30 days. Your satisfaction is our priority.
                        </p>
                        <div className='mt-4 w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    </div>
                </div>
                
                <div className='group relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105'></div>
                    <div className='relative p-8 text-center'>
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <img src={assets.quality_icon} className='w-8 h-8 opacity-80' alt="" />
                        </div>
                        <h3 className='font-semibold text-gray-900 mb-3 text-lg'>
                            7-Day Returns
                        </h3>
                        <p className='text-gray-600 leading-relaxed text-sm'>
                            Free returns within one week. Shop with complete confidence and peace of mind.
                        </p>
                        <div className='mt-4 w-8 h-px bg-gradient-to-r from-green-400 to-emerald-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    </div>
                </div>
                
                <div className='group relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105'></div>
                    <div className='relative p-8 text-center'>
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <img src={assets.support_img} className='w-8 h-8 opacity-80' alt="" />
                        </div>
                        <h3 className='font-semibold text-gray-900 mb-3 text-lg'>
                            24/7 Support
                        </h3>
                        <p className='text-gray-600 leading-relaxed text-sm'>
                            Round-the-clock customer service ready to assist you anytime, anywhere.
                        </p>
                        <div className='mt-4 w-8 h-px bg-gradient-to-r from-orange-400 to-red-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPolicy