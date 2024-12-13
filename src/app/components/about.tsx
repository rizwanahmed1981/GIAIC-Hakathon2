import React from 'react'
import Image from 'next/image'
import yellolady from "@/app/images/yellolady.png"
import { Button } from '@/components/ui/button'

const AboutSec = () => {
  return (
    <div className='w-full md:h-[545px] flex flex-col md:flex-row items-center md:justify-center md:gap-96'>
      <div className='flex flex-col place-items-center text-center gap-8 md:gap-8'>
       <p className='text-base font-bold text-[#252b42] opacity-80'> ABOUT COMPANY</p>
       <p className='font-bold text-6xl text-[#252b42]'> ABOUT US </p>
       <p className='font-normal text-[20px] text-[#737373]'>We know how large objects will act, <br/> 
       but things on a small scale</p>

        <Button className='text-white bg-[#23A6F0] rounded w-[195px] h-[52px]'>Get Quote Now</Button>
      </div>



      <div>
        <Image src={yellolady} width={632} height={612} alt='yallow lady image carrying bags' />
      </div>
      <div className='flex flex-col items-centre text-center justify-evenly pt-8 pb-12 mt-8 mb-8 md:hidden w-[414px] h-[500px] gap-12'>
        <div className='flex flex-col gap-4'>
        <p className='text-red-600 text-base'>Problem Trying</p>
        <p className='text-2xl font-bold text-[#252b42] text-wrap'>Met minim Mollie<br/> non desert Alamo<br/> est sit cliquey dolor<br/> do met sent.</p>
        </div>
      <p className='text-lg font-normal text-[#737373] h-[60px] w-[400px] text-wrap'>Problems trying to resolve the conflict between<br/> the two major realms of Classical physics:<br/> Newtonian mechanics </p>
      </div>
    </div>
  )
}

export default AboutSec