import React from 'react'
import Image from 'next/image'
import men from "@/app/images/men.svg"
import women from "@/app/images/women.svg"
import kids from "@/app/images/kids.svg"

const Section1 = () => {
  return (
    <div className='h-[770px] w-full flex flex-col items-center p-10 gap-8 bg-[#fafafa]'>
        <div className='flex flex-col text-center gap-4'>
            <p className='font-bold text-2xl'>EDITOR'S PICK</p>
            <p className='font-normal text-[14px] text-[#737373] opacity-100'>Problems trying to resolve the conflict between</p>
        </div>

        <div className='grid grid-cols-12 gap-4'>
            <Image src={men} alt='men pic' className='grid col-span-6'/>
            <Image src={women} alt='men pic' className='grid col-span-3'/>
            <Image src={kids} alt='men pic' className='grid col-span-3'/>
        </div>


    </div>
  )
}

export default Section1