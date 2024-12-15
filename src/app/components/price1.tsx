import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
const Price1 = () => {
  return (
    <div className='flex flex-col items-center w-[414px] h-[150px] md:h-[280px] md:w-full mx-24 mb-12 gap-10'>
        <p className='text-base font-bold text-[#737373]'>PRICING</p>
        <h1 className='text-6xl font-bold text-[#252b4d]'>Simple Pricing</h1>
        <div className='flex flex-row gap-4'>
            <Link href={'/'} className='text-[14px] font-bold text-[#252b4d]'>Home</Link>
            <ChevronRight/>
            <p className='text-[14px] font-bold text-[#737373]'>Pricing</p>
        </div>
    </div>
  )
}

export default Price1