import { ChevronRight } from 'lucide-react'
import React from 'react'
import ProductSection from '@/app/components/productSection'
import ProductDiscription from '@/app/components/productDiscription'
import BestSellProd from '@/app/components/bestSellProd'
import Companies2 from '@/app/components/companies2'

const Product = () => {
    return (
        <div>
            <div className='md:w-full md:h-24 bg-[#FAFAFA] flex flex-row items-center justify-center py-6  md:justify-start md:pl-20'>
                <p className='text-[#252b42] text-[14px] font-bold '>Home</p>
                <ChevronRight className='text-[#bdbdbd]' />
                <p className='text-[14px] text-[#bdbdbd]'>Shop</p>
            </div>
            <ProductSection/>
            <ProductDiscription/>
            <BestSellProd/>
            <Companies2/>


        </div>
    )
}

export default Product