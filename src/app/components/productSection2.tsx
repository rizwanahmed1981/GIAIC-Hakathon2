import React from 'react'
import productCard2 from './productcard2'
import Image from 'next/image'
import ui from "@/app/images/ul.png"

const ProductSection2 = () => {
    return (
        <div className='flex md:flex-col flex-col items-center justify-center md:gap-10 gap-6 my-6'>
            <div className="w-[80%] ml-10 md:ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 items-center justify-center">
                {productCard2.map((product, index) => {
                    return (
                        <div key={index} className='bg-white flex flex-col items-center px-2 '>
                            <Image src={product.image[0]} alt={product.name} width={239} height={427} />
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
            <div>
                <Image src={ui} alt='buttons'  width={313} height={74} />
            </div>

        </div>
    )
}

export default ProductSection2