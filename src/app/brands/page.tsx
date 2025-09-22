import React from 'react'
import { getAllBrands } from '../_services/getAllBrands';
import BrandCart from '../_Components/BrandCard/BrandCart';

export default async function Brands() {
   const allBrands = await getAllBrands();
  return (
    <>
     <h1 className='text-4xl text-green-600 text-center mt-20 mb-10'>All Brands</h1>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-5 sm:m-10 lg:m-20">
        {allBrands?.map((brand) => (
          <BrandCart key={brand._id} brand={brand}></BrandCart>
        ))}
     </div>
    </>
  )
}
