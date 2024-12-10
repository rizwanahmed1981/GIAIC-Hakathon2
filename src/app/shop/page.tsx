import { ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Products
 = () => {
  return (
    <div>
      <div className='md:w-full md:h-[92px] flex md:flex-row justify-between md:px-20 items-center bg-[#BDBDBD] opacity-100'>
        <h1 className='font-bold text-2xl text-[#252B42] opacity-100'>Shop</h1>
        <div className='flex flex-row gap-2'>
          <Link href='/' className='font-bold text-[14px] text-[#252B42]'>Home</Link>
          <ChevronRight className='text-[#252B42] opacity-100'/>
          <p className='font-bold text-[14px] text-[#252B42] opacity-80 '>Shop</p>
        </div>


      </div>
        
    </div>
  )
}

export default Products
