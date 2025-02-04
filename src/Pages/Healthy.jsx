import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from '../components/Item'

const Healthy = () => {
  const {all_product} = useContext(Shopcontext)
  const kidProducts = all_product.filter((product) => product.category === "healthy")
  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
     <div className="w-full h-[600px] relative">
        <img className=" w-screen  h-full" src='https://plus.unsplash.com/premium_photo-1663852706020-42dcb66d29f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww' alt="Banner" />
        <span className="absolute bg-black opacity-40 inset-0 ">
        </span>
        <div className="absolute  inset-0 flex flex-col items-center justify-center text-white text-center md:px-5">
          <h1 className="lg:text-7xl md:text-5xl text-5xl font-bold drop-shadow-lg ">Welcome to Our Store</h1>
          <p className=" lg:text-2xl md:text-lg text-lg px-10 mt-6 drop-shadow-md ">Fresh and Organic Groceries Delivered to Your Doorstep</p>
        </div>
      </div>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {
          kidProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Healthy
