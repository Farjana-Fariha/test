import React from 'react'

const MultiBanner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto'>
                {/* first banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Fresh Fruits</h2>
                    </div>
                </div>
                {/* second banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://plus.unsplash.com/premium_photo-1666739387925-5841368970a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Season Sale</h2>
                    </div>
                </div>
                {/* third banner */}
                <div className='relative h-[250px] col-span-1 sm:col-span-2'>
                    <img 
                    src="https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Discounts</h2>
                        <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                        <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fourth banner */}
                <div className='relative h-[250px] col-span-1 sm:col-span-2'>
                    <img 
                    src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D" alt="season sale" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Organic, Sustainable</h2>
                        <p className='text-white my-2 text-lg'>100% Fresh & Organic</p>
                        <button className='text-white bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fifth banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3BwaW5nfGVufDB8fDB8fHww" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                    </div>
                </div>
                {/* sixth banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://images.unsplash.com/photo-1543168256-418811576931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Great Deals</h2>
                        <p className='text-white my-2 text-lg'>Up to 30% Off</p>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiBanner
