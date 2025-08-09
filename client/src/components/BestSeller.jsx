import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0, 5));
    },[])

  return (
    <div className='relative py-24 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/10 to-yellow-200/10 rounded-full blur-2xl'></div>
            <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-orange-200/10 to-red-200/10 rounded-full blur-xl'></div>
        </div>
        
        <div className='relative max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <div className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 mb-8'>
                    <div className='flex gap-1'>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className='w-1 h-1 bg-yellow-500 rounded-full animate-pulse' style={{animationDelay: `${i * 200}ms`}}></div>
                        ))}
                    </div>
                    <span className='text-sm font-bold text-gray-700 tracking-widest'>BESTSELLERS</span>
                </div>
                
                <div className='mb-6'>
                    <Title text1={'BEST'} text2={'SELLERS'}/>
                </div>
                <p className='max-w-2xl mx-auto text-gray-600 leading-relaxed'>
                    Our most loved pieces, chosen by customers worldwide. These exceptional items represent the perfect blend of style, quality, and value.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                {
                    bestSeller.map((item,index)=>(
                        <div key={index} className='group relative'>
                            {/* Bestseller Badge */}
                            <div className='absolute -top-2 -right-2 z-20'>
                                <div className='w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                                    <span className='text-xs font-bold text-white'>★</span>
                                </div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className='absolute inset-0 bg-gradient-to-t from-yellow-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl'></div>
                            
                            <div className='relative transform group-hover:scale-105 transition-transform duration-300'>
                                <ProductItem id={item._id} name={item.name} image={item.image} price={item.price}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            {/* CTA Section */}
            <div className='text-center mt-16'>
                <div className='inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-lg'>
                    <div className='text-gray-900'>
                        <p className='font-semibold mb-1'>Love what you see?</p>
                        <p className='text-gray-600 text-sm'>Join thousands of happy customers</p>
                    </div>
                    <button className='px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium text-sm transform hover:scale-105'>
                        Shop All Bestsellers
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSeller