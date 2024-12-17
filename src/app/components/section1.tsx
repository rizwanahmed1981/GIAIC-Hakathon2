import React from 'react'
import Image from 'next/image'
import men from "@/app/images/men.svg"
import women from "@/app/images/women.svg"
import kids from "@/app/images/kids.svg"

const Section1 = () => {
  return (
    <div className='h-[1850px] sm:w-full w-[630px] sm:h-[770px] justify-between items-center mb-8 sm:px-10 flex flex-col text-center sm:mt-20 sm:pt-20 sm:pb-6  gap-8 bg-[#fafafa]'>
        <div className='flex flex-col text-center text-wrap gap-4'>
            <p className='font-bold text-2xl'>EDITORs PICK</p>
            <p className='font-normal text-[14px] text-[#737373] opacity-100'>Problems trying to resolve the conflict between</p>
        </div>

        <div className='sm:max-w-7xl flex flex-col sm:flex-row sm:gap-6 sm:ml-12 sm:px-10 gap-4'>
            <Image src={men} alt='men pic' width={414} height={500} className='sm:col-span-6 sm:h-[500px] sm:w-[500px]'/>
            <Image src={women} alt='women pic' width={414} height={500} className='sm:col-span-3 sm:h-[500px] sm:w-[240px]'/>
            <Image src={kids} alt='kids pic' width={414} height={500} className='sm:col-span-3 sm:h-[500px] sm:w-[240px]'/>
        </div>


    </div>
  )
}

export default Section1