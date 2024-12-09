import React from 'react'
import Image from 'next/image'
import couple from "@/app/images/couple.png"
import { Button } from '@/components/ui/button'

const Hero3 = () => {
    return (
        <div className='w-[415px] h-[911px] pl-36 md:w-full  md:h-[711px] bg-white m-10 flex flex-col-reverse md:flex md:flex-row items-center md:justify-evenly md:px-40 md:gap-8'>
            <div className='md:mt-32  items-end'>
                <Image src={couple} alt='Hero 3 imamge here' width={510} height={685} className='md:w-[704px] md:h[682px]' />
            </div>
            <div className=' md:mr-40  md:mt-56 flex flex-col items-center md:items-start text-wrap gap-6 w-[509px] h-[432px] '>
                <div className='flex flex-col text-center md:text-left gap-4 text-black'>
                    <p className='font-normal text-[20px] text-[#bdbdbd] opacity-100'>SUMMER 2020</p>
                    <h1 className='font-bold text-[40px] leading-tight'>Part of the Neural <br /> Universe</h1>
                    <p className='font-normal text-[14px] text-[#737373] opacity-100'>We know how large objects will act,
                        <br /> but things on a small scale.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Button className='bg-[#2DC071] rounded'>
                       BUY NOW
                    </Button>
                    <Button className='bg-white text-[#2dc071] rounded'>
                        READ MORE
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Hero3