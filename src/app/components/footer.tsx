import React from 'react';
import Image from 'next/image';
import fb from "@/app/images/fb.png"
import insta from "@/app/images/insta.png"
import twitter from "@/app/images/twitter.png"
import btn from "@/app/images/btn.png"
import uEmail from "@/app/images/uEmail.png"

const Footer = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='h-[100px] w-[630px] sm:w-full bg-[#fafafa] sm:bg-white sm:px-20 flex flex-col sm:flex-row sm:justify-between pl-32 items-start gap-4 sm:items-center'>
            <h1 className='text-[24px] font-bold text-[#252B42]'>Bendage</h1>
            <div className='flex flex-row h-[24px] gap-4'>
                
                <Image src={fb} alt='facebook logo' width={24} height={24}/>
                <Image src={insta} alt='facebook logo' width={24} height={24}/>
                <Image src={twitter} alt='facebook logo' width={24} height={24}/>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-evenly sm:h-[272px] sm:w-full gap-6 sm:items-center  mt-10 pl-32' >
            <div className='flex flex-col gap-2 text-start sm:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Company Info</p>
                <p className='font-bold text-[14px] text-[#737373] '>About Us</p>
                <p className='font-bold text-[14px] text-[#737373] '>Carrier</p>
                <p className='font-bold text-[14px] text-[#737373] '>We are hiring</p>
                <p className='font-bold text-[14px] text-[#737373] '>Blog</p>
            </div>
            <div className='flex flex-col gap-2 text-start sm:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Legal</p>
                <p className='font-bold text-[14px] text-[#737373] '>About Us</p>
                <p className='font-bold text-[14px] text-[#737373] '>Carrier</p>
                <p className='font-bold text-[14px] text-[#737373] '>We are hiring</p>
                <p className='font-bold text-[14px] text-[#737373] '>Blog</p>
            </div>
            <div className='flex flex-col gap-2 text-start sm:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>features</p>
                <p className='font-bold text-[14px] text-[#737373] '>Business Marketing</p>
                <p className='font-bold text-[14px] text-[#737373] '>User Analytics</p>
                <p className='font-bold text-[14px] text-[#737373] '>Live Chat</p>
                <p className='font-bold text-[14px] text-[#737373] '>Unlimited Support</p>
            </div>
            <div className='flex flex-col gap-2 text-start sm:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Resources</p>
                <p className='font-bold text-[14px] text-[#737373] '>IOS & Android</p>
                <p className='font-bold text-[14px] text-[#737373] '>Watch a Demo</p>
                <p className='font-bold text-[14px] text-[#737373] '>Customer</p>
                <p className='font-bold text-[14px] text-[#737373] '>API</p>
            </div>
            <div className='flex flex-col gap-4 text-start items-start sm:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Get in Touch</p>
                <div className='flex flex-row-reverse '>
                    <Image src={uEmail} alt='' width={321} height={58} className='relative' />
                    <Image src={btn} alt='' height={58} width={117} className='absolute'/>
                </div>
                <p className='font-bold text-[14px] text-[#737373] '>Thanks for your Interest</p>
            </div>
        </div>

        <div className='sm:h-[150px] bg-gray-300  flex flex-col sm:flex-row justify-between text-center gap-4 sm:items-center sm:justify-around'>
            <p className='text-wrap font-semibold text-[#252b42] -70'>Special Thanks To My Teachers and Repect For<br/>Sir. Zia khan <br/>and<br/>Gov.Sindh Kamran Khan Tessori..<br/>Made With Love By Rizwan Ahmed Student of GIAIC.</p>
        </div>
    </div>
  )
}

export default Footer