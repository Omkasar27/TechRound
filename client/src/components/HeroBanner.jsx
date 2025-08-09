import React from 'react'
import { assets } from '../assets/assets'

function HeroBanner() {
  return (
   <div className='relative flex flex-col sm:flex-row overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100'>
      {/* Decorative Elements */}
      <div className='absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-2xl'></div>
      
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-24 px-8 relative z-10'>
        <div className='max-w-md'>
          <div className='flex items-center gap-4 mb-8 group'>
            <div className='w-12 h-px bg-gradient-to-r from-black to-gray-400 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500'></div>
            <p className='text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase'>Our Bestsellers</p>
          </div>

          <h1 className='prata-regular text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 mb-10 animate-pulse'>
            Latest<br/>Arrivals
          </h1>
          
          <div className='group cursor-pointer inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all duration-300 backdrop-blur-sm border border-black/10'>
            <p className='text-sm font-medium tracking-wide'>Shop Now</p>
            <div className='w-8 h-px bg-current group-hover:w-12 transition-all duration-300'></div>
            <div className='w-2 h-2 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity'></div>
          </div>
        </div>
      </div>
      
      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2 relative'>
        <div className='absolute inset-0 bg-gradient-to-l from-transparent to-white/20 z-10'></div>
        <img src={assets.hero_img} className='w-full h-full object-cover filter brightness-105 contrast-110' alt="" />
        <div className='absolute bottom-8 right-8 backdrop-blur-md bg-white/20 rounded-2xl p-4 border border-white/30 z-20'>
          <p className='text-white text-sm font-medium'>New Collection</p>
          <p className='text-white/80 text-xs'>2024 Spring</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;