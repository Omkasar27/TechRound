import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = ()=>{
        event.preventDefault();
    }

  return (
    <div className='relative py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden'>
        {/* Background Decorations */}
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-200/15 to-orange-200/15 rounded-full blur-2xl'></div>
        
        <div className='relative max-w-xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50 mb-6'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-xs text-gray-700 font-medium'>EXCLUSIVE OFFER</span>
            </div>
            
            <h2 className='text-4xl font-light text-gray-900 mb-4 leading-tight'>
                Subscribe & Save <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold'>20%</span>
            </h2>
            <p className='text-gray-600 mb-10 leading-relaxed max-w-md mx-auto'>
                Join over 50K+ fashion enthusiasts and get exclusive access to new drops, sales, and style guides.
            </p>
            
            <form onSubmit={onSubmitHandler} className='group relative'>
                <div className='flex rounded-2xl bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl'>
                    <input 
                        className='flex-1 px-6 py-4 text-gray-900 placeholder-gray-400 outline-none bg-transparent text-sm' 
                        type="email" 
                        placeholder='Enter your email address' 
                        required
                    />
                    <button 
                        type='submit' 
                        className='bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold text-sm tracking-wide'
                    > 
                        SUBSCRIBE
                    </button>
                </div>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl'></div>
            </form>
            
            <p className='text-gray-500 text-xs mt-6'>No spam, unsubscribe anytime.</p>
        </div>
    </div>
  )
}

export default NewsletterBox