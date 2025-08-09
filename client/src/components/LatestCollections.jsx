import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[])

  return (
    <div className='relative py-24 px-4 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden'>
        {/* Background Decorations */}
        <div className='absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-violet-200/20 to-pink-200/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl'></div>
        
        <div className='relative max-w-7xl mx-auto'>
            <div className='text-center mb-16'> 
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 mb-6'>
                    <div className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse'></div>
                    <span className='text-xs font-semibold text-gray-700 tracking-wide'>NEW ARRIVALS</span>
                </div>
                
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='max-w-2xl mx-auto text-gray-600 mt-6 leading-relaxed'>
                    Discover our newest curated pieces, handpicked from global designers and crafted for the modern lifestyle. Each piece tells a story of contemporary elegance.
                </p>
            </div>
            
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {
                    latestProducts.map((item,index)=>(
                        <div 
                            key={index} 
                            className='group relative transform hover:scale-105 transition-all duration-500 hover:z-10'
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                opacity: 0
                            }}
                        >
                            {/* Card Background with Glow Effect */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl'></div>
                            <div className='absolute inset-0 bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl shadow-2xl'></div>
                            
                            {/* Floating Elements */}
                            <div className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500'></div>
                            <div className='absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                            
                            <div className='relative z-10'>
                                <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            {/* View All Button */}
            <div className='text-center mt-12'>
                <button className='group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                    <span className='font-medium'>View All Collections</span>
                    <div className='w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-colors'></div>
                </button>
            </div>
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
  )
}

export default LatestCollections