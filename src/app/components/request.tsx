import React from 'react'
import Image from 'next/image'
import call from "@/app/images/callIco.png"
import location from "@/app/images/locationIco.png"
import email from "@/app/images/emailIco.png"
import arrowRightD from "@/app/images/ArrowRounded.png"
import { Button } from '@/components/ui/button'

const Request = () => {
  return (
    <div className='md:w-full md:h-[1160px] h-[1970px] w-[414px] flex flex-col gap-10 '>
      <div className='text-[#252b42] text-center'>
        <p className='text-[14px] '>VISIT OUR OFFICE</p>
        <h1 className='text-[40px] font-bold break-words'>We help small businesses <br />
          with big ideas</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
        <div className='w-[330px] h-[345px] text-[#252b42] flex flex-col items-center justify-center gap-8'>
          <Image src={call} alt='call logo' width={72} height={72} />
          <p className='text[14px] '>georgia.young@example.com</p>
          <p className='text[14px] '>young@ple.com</p>
          <p className='text-[24px] font-bold'>Get Support</p>
          <Button className='w-[185px] h-[54px] rounded-3xl bg-white border-2 border-sky-700 text-[14px] text-[#23A6f0]'>Submit Request</Button>

        </div>
        <div className='w-[330px] h-[403px] bg-[#252b42] text-white flex flex-col items-center justify-center gap-8'>
          <Image src={location} alt='call logo' width={72} height={72} />
          <p className='text[14px] '>georgia.young@example.com</p>
          <p className='text[14px] '>young@ple.com</p>
          <p className='text-[24px] font-bold'>Get Support</p>
          <Button className='w-[185px] h-[54px] rounded-3xl bg-[#252b42] border-2 border-sky-700 text-[14px] text-[#23A6f0]'>Submit Request</Button>

        </div>
        <div className='w-[330px] h-[345px] text-[#252b42] flex flex-col items-center justify-center gap-8'>
          <Image src={email} alt='call logo' width={72} height={72} />
          <p className='text[14px] '>georgia.young@example.com</p>
          <p className='text[14px] '>young@ple.com</p>
          <p className='text-[24px] font-bold'>Get Support</p>
          <Button className='w-[185px] h-[54px] rounded-3xl bg-white border-2 border-sky-700 text-[14px] text-[#23A6f0]'>Submit Request</Button>
        </div>
      </div>
      <div className='text-[#252B42] font-bold flex flex-col gap-8 items-center justify-center py-10'>
        <Image src={arrowRightD} alt='arrow right rounded'/>
        <p className='text-[16px] '>WE Cant WAIT TO MEET YOU</p>
        <h1 className='text-[58px] '>Lets Talk</h1>
        <Button className='text-white bg-[#23A6f0] rounded h-[52px] w-[186px]'>Try it free now</Button>
      </div>



    </div>
  )
}

export default Request