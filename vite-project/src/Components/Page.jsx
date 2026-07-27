import React from 'react'
import products from "../Data/Data";
import ProductGrid from './ProductGrid'
import Sidebar from './Sidebar';

const Page = () => {
  return (
    <div className='flex'>
        <Sidebar/>
            <ProductGrid products={products} />
    </div>
  )
}

export default Page