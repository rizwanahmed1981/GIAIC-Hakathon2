import React from 'react';
import Image from 'next/image';
import fb from "@/app/images/fb.png"
import insta from "@/app/images/insta.png"
import twitter from "@/app/images/twitter.png"
import btn from "@/app/images/btn.png"
import uEmail from "@/app/images/uEmail.png"

const Footer = () => {
  return (
    <div>
        <div className='md:h-[142px] bg-white flex flex-col md:flex-row justify-between pl-20 md:px-10 md:mx-32  items-start gap-4 md:items-center'>
            <h1 className='text-[24px] font-bold text-[#252B42]'>Bendage</h1>
            <div className='flex flex-row h-[24px] gap-4'>
                
                <Image src={fb} alt='facebook logo' width={24} height={24}/>
                <Image src={insta} alt='facebook logo' width={24} height={24}/>
                <Image src={twitter} alt='facebook logo' width={24} height={24}/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-evenly w-full gap-6 md:items-center md:px-10 mt-10 mx-20' >
            <div className='flex flex-col gap-4 text-start md:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Company Info</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>About Us</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Carrier</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>We are hiring</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Blog</p>
            </div>
            <div className='flex flex-col gap-4 text-start md:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Legal</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>About Us</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Carrier</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>We are hiring</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Blog</p>
            </div>
            <div className='flex flex-col gap-4 text-start md:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>features</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Business Marketing</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>User Analytics</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Live Chat</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Unlimited Support</p>
            </div>
            <div className='flex flex-col gap-4 text-start md:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Resources</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>IOS & Android</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Watch a Demo</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Customer</p>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>API</p>
            </div>
            <div className='flex flex-col gap-4 text-start items-start md:h-[272px] '>
                <p className='font-bold text-[16px] text-[#252b42]'>Get in Touch</p>
                <div className='flex flex-row-reverse '>
                    <Image src={uEmail} alt='' width={321} height={58} className='relative' />
                    <Image src={btn} alt='' height={58} width={117} className='absolute'/>
                </div>
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>Thanks for your Interest</p>
            </div>
        </div>

        <div className=' md:pl-10 bg-gray-300 opacity-100 flex flex-col md:flex-row justify-between md:px-20 text-center gap-4 md:items-center md:justify-around'>
            <p className='text-wrap font-semibold text-[#252b42] opacity-70'>Special Thanks To My Teachers and Repect For<br/>Sir. Zia khan <br/>and<br/>Gov.Sindh Kamran Khan Tessori..<br/>Made With Love By Rizwan Ahmed Student of GIAIC.</p>
        </div>
    </div>
  )
}

export default Footer