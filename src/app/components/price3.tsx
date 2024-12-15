import { Button } from '@/components/ui/button'
import React from 'react'
import fb from '@/app/images/fb.png'
import twitter from '@/app/images/twitter.png'
import insta from '@/app/images/insta.png'
import linkdin from '@/app/images/linkdin.png'
import Image from 'next/image'

const Price3 = () => {
  return (
    <div className='md:w-full w-[414px] h-[586px] ml-8 md:h-[852px] text-center flex flex-col items-center justify-center md:gap-8 gap-6 break-words mb-10'>
        <p className='text-[40px] font-bold text-[#252b42]'>Start your 14 days free trial</p>
        <p className='text-[14px] font-normal text-[#737373]'>Met minim Mollie non desert Alamo est sit cliquey dolor<br/> 
        do met sent. RELIT official consequent.</p>
        <Button className='w-[185px] h-[52px] bg-[#23A6f0] text-white rounded'>Try it free now</Button>
        <div className='flex flex-row gap-4'>
            <Image src={twitter} alt='twitter logo' height={30} width={30}/>
            <Image src={fb} alt='facebook logo' height={30} width={30}/>
            <Image src={insta} alt='instagram logo' height={30} width={30}/>
            <Image src={linkdin} alt='linkdin logo' height={30} width={30}/>

        </div>
    </div>
  )
}

export default Price3
