import React from 'react'
import productCard from "@/app/components/productcard"
import Image from 'next/image'
// import colour from "F:\governerProgram\quarter2\projects\hakathon2\hakathon2\public\colour.svg"


const ProductsSection = () => {
  return (
    <div className='sm:w-full sm:h-[1800px] w-[630px] h-[6400px] items-center justify-center gap-10 flex flex-col sm:flex-col sm:gap-14 sm:mt-20 sm:px-10 sm:mb-10 '>
        <div className='flex flex-col gap-3 items-center'>
            <p className='font-normal text-lg text-[#737373] opacity-100'>Featured Products</p>
            <p className='text-2xl font-bold '>BEST SELLER PRODUCT</p>
            <p className='text-[14px] font-normal text-[#737373] opacity-100'>Problems trying to resolve the conflict between </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 items-center justify-center">
            {productCard.map((product ,index)=>{
                return (
                    <div key={index} className='bg-white flex flex-col items-center  '>
                        <Image src={product.image[0]} alt={product.name} width={414} height={450} />
                        <div className='text-center flex flex-col justify-start items-center gap-2 mt-4'>
                            <p className='font-bold text-xl'>{product.name}</p>
                            <p className='font-normal text-sm opacity-100'>{product.details}</p>
                            <p className='font-normal text-sm opacity-100'>{product.orignalPrice}{product.discountedPrice}</p>
                            <Image src={product.image[1]} alt={product.name} width={82} height={16} />
                            
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
  )
}








export default ProductsSection