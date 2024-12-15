import React from 'react'
import Image from 'next/image'
import family from "@/app/images/herofamilly.png"
import fb from "@/app/images/fbB.png"
import twitter from "@/app/images/twitterB.png"
import insta from "@/app/images/instaB.png"
import linkdin from "@/app/images/linkdinB.png"




const ContactUs = () => {
  return (
    <div className='md:w-full md:h-[742px] flex md:flex-row flex-col md:items-center md:justify-center md:gap-24'>
        <div className='text-[#252b42] flex md:flex-col gap-6 flex-col items-center text-center mb-10'>
            <p className='text-[16px] font-bold'>CONTACT US</p>
            <p className='text-[58px] font-bold'>Get in touch <br/> 
            today!</p>
            <p className='text-[20px] tetx-[#737373]'>We know how large objects will act, <br/> 
            but things on a small scale</p>
            <p className='text-[24px] font-bold'>Phone ; +451 215 215 </p>
            <p className='text-[24px] font-bold'>Phone ; +451 215 215 </p>
            <div className='flex flex-row gap-4'>
                <Image src={twitter} alt='twitter logo' className='w-[30px] h-[30px]'/>
                <Image src={fb} alt='facebook logo' className='w-[30px] h-[30px]'/>
                <Image src={insta} alt='instagram logo' className='w-[30px] h-[30px]'/>
                <Image src={linkdin} alt='linkdin logo' className='w-[30px] h-[30px]'/>
            </div>
        </div>
        <div>
            <Image src={family} alt='famiy image' width={632} height={612}/>
        </div>
    </div>
  )
}

export default ContactUs