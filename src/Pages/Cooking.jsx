import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from '../components/Item'
import banner from '../assets/cooking-banner.jpg'

const Cooking = () => {
  const { all_product } = useContext(Shopcontext)
  const cookingProducts = all_product.filter((product) => product.category === "cooking")
  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto w-full'>
      <div className="w-full h-[600px] relative">
        <img className=" w-screen  h-full" src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpY2V8ZW58MHx8MHx8fDA%3D' alt="Banner" />
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
            cookingProducts.map((product) => {
              return <Item key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Cooking
