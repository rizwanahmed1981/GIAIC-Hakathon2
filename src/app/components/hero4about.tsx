import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Pinkgirl from "@/app/images/pinkgirlpic.png"

const Hero4about = () => {
  return (
    <div>
    <div className='w-full md:w-full md:mb-8 md:h-[636px] bg-[#2a7cc7] mx-24  md:px-10 hidden text-white md:flex md: flex-row md:justify-around md:items-center md:gap-10'>
        <div className='flex flex-col gap-6 ml-40'>
            <p className='font-bold text-[16px] '>WORK WITH US</p>
            <p className=' text-[40px] font-bold '>Now Let’s grow Your</p>
            <p className='text-[14px]'>The gradual accumulation of information about atomic and<br/> small-scale behavior during the first quarter of the 20th </p>
            <Button className='rounded bg-inherit border-2 w-[132px] h-[52px] ' >Button</Button>
        </div>
        
          <Image src={Pinkgirl} alt='girld pic ' className=' md:h-[640] '/>
    </div>
    <div className='flex flex-col  ml-40 md:hidden w-[414px] h-[520px] place-items-center justify-center gap-8 bg-[#2a7cc7] text-wrap'>
            <p className='font-bold text-[16px] break-words '>WORK WITH US</p>
            <p className=' text-[40px] font-bold break-words'>Now Let’s grow Your</p>
            <p className='text-[14px] break-words'>The gradual accumulation of information about atomic and<br/> small-scale behavior during the first quarter of the 20th </p>
            <Button className='rounded bg-inherit border-2 w-[132px] h-[52px] ' >Button</Button>
        </div>

    </div>
  )
}

export default Hero4about