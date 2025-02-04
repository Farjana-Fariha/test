import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from './Item'

const SpacialOffers = () => {
    const {spacial_offers} = useContext(Shopcontext)
  return (
    <div>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-5xl font-bold tracking-tight text-gray-900 text-center font-serif'>Spacial Offers</h2>
            <div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {spacial_offers.map((product) => {
                    return <Item key={product.id} product={product}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default SpacialOffers
