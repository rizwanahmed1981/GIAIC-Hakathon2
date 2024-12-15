import React from 'react'
import Image from 'next/image'
import d1 from "@/app/images/d1.png"
import d2 from "@/app/images/d2.png"
import d3 from "@/app/images/d3.png"
import d4 from "@/app/images/d4.png"
import d5 from "@/app/images/d5.png"
import d6 from "@/app/images/d6.png"

const best = [
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d1,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d2,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d3,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d4,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d5,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d6,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d1,
    },
    {
        name: "Graphic Design",
        details: "English Department",
        orignalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: d2,
    },
]

const BestSellProd = () => {
    return (
        <div className='md:h-[1080px] md:w-full items-center justify-center flex flex-col gap-6'>
            <div>
                <h1 className='text-[24px] font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h1>
            </div>
            <div className="w-[80%] ml-10 md:ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 items-center justify-center">
                {best.map((product, index) => {
                    return (
                        <div key={index} className='bg-white flex flex-col items-center px-2 gap-4 '>
                            <Image src={product.image} alt={product.name} width={239} height={427} />
                            <div className='text-center flex flex-col justify-start items-center gap-4 mt-4'>
                                <p className='font-bold text-xl'>{product.name}</p>
                                <p className='font-normal text-sm opacity-100'>{product.details}</p>
                                <div className='flex md:flex-row flex-row items-center gap-2'>
                                    <p className='font-normal text-sm opacity-100'>{product.orignalPrice}</p>
                                    <p className='font-bold text-lg text-[#23856d] opacity-100'>{product.discountedPrice}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BestSellProd