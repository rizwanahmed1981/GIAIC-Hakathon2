import React from 'react'
import productCard from "@/app/components/productcard"
import Image from 'next/image'
import colour from "F:\governerProgram\quarter2\projects\hakathon2\hakathon2\public\colour.svg"


const ProductsSection = () => {
  return (
    <div className='flex flex-col gap-10 my-10'>
        <div className='flex flex-col gap-3 items-center'>
            <p className='font-normal text-lg text-[#737373] opacity-100'>Featured Products</p>
            <p className='text-2xl font-bold '>BEST SELLER PRODUCT</p>
            <p className='text-[14px] font-normal text-[#737373] opacity-100'>Problems trying to resolve the conflict between </p>
        </div>
        <div className="w-[80%] ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 items-center justify-center">
            {productCard.map((product)=>{
                return (
                    <div className='bg-white flex flex-col items-center px-2 '>
                        <Image src={product.image} alt={product.name} width={239} height={427} />
                        <div className='text-center flex flex-col justify-start gap-2 mt-4'>
                            <p className='font-bold text-xl'>{product.name}</p>
                            <p className='font-normal text-sm opacity-100'>{product.details}</p>
                            <p className='font-normal text-sm opacity-100'>{product.orignalPrice}{product.discountedPrice}</p>
                            {/* <p className='font-normal text-sm opacity-100'>{product.image2}</p> */}
                            
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default ProductsSection