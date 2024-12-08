import React from 'react'
import Image from 'next/image'
import call from "@/public/call.svg"
import email from "@/public/email.svg"
import insta from "@/public/insta.svg"
import youtube from "@/public/youtube.svg"
import fb from "@/public/fb.svg"
import twitter from "@/public/twitter.svg"


const Topbar = () => {
    return (
        <div className='max-w-full mx-auto p-6 hidden md:flex flex-row item-center justify-between bg-[#252b42] text-white font-bold text-[14px]'>
            <div className='max-w-7xl  flex flex-row gap-6'>
                <div className='flex flex-row gap-2'>
                    <Image src={call} alt="call icon" width={16} height={16} />
                    <p>+92(312) 03-06090</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Image src={email} alt="email icon" width={16} height={16} />
                    <p>razykan.ra@gmail.com</p>
                </div>
            </div>


            <div className='max-w-7xl '>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>

            <div className='max-w-7xl  flex flex-row gap-6'>
                <p>Follow US :</p>
                <div className='flex flex-row gap-2'>
                <Image src={insta} alt="instagram icon" width={26} height={26} />
                <Image src={youtube} alt="youtube icon" width={26} height={26} />
                <Image src={fb} alt="facebook icon" width={26} height={26} />
                <Image src={twitter} alt="twitter icon" width={26} height={26} />
                </div>
            </div>

        </div>
    )
}

export default Topbar