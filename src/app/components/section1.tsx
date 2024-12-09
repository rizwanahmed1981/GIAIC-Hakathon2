import React from 'react'
import Image from 'next/image'
import men from "@/app/images/men.svg"
import women from "@/app/images/women.svg"
import kids from "@/app/images/kids.svg"

const Section1 = () => {
  return (
    <div className='h-[1850px] md:w-[1440px] w-[420px] justify-center md:h-[770px]  flex flex-col text-center md:mt-20 md:pt-20 m-6 gap-8 bg-[#fafafa]'>
        <div className='flex flex-col text-center text-wrap gap-4'>
            <p className='font-bold text-2xl'>EDITOR'S PICK</p>
            <p className='font-normal text-[14px] text-[#737373] opacity-100'>Problems trying to resolve the conflict between</p>
        </div>

        <div className='grid grid-cols-1 md:justify-evenly md:grid-cols-12 md:gap-2 md:mx-24 gap-4'>
            <Image src={men} alt='men pic' width={324} height={500} className='grid md:col-span-6 md:h-[500px] md:w-[500px]'/>
            <Image src={women} alt='women pic' width={324} height={500} className='grid md:col-span-3 md:h-[500px] md:w-[240px]'/>
            <Image src={kids} alt='kids pic' width={324} height={500} className='grid md:col-span-3 md:h-[500px] md:w-[240px]'/>
        </div>


    </div>
  )
}

export default Section1