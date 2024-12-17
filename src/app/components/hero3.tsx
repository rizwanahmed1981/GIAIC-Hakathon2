import React from 'react'
import Image from 'next/image'
import couple from "@/app/images/couple.png"
import { Button } from '@/components/ui/button'

const Hero3 = () => {
    return (
        <div className='w-[630px] h-[999px] sm:w-full sm:h-[711px] bg-white flex flex-col-reverse sm:flex sm:flex-row items-center sm:justify-center mt-10 sm:gap-10'>
            <div className='sm:mt-32 items-center ml-20 sm:items-end'>
                <Image src={couple} alt='Hero 3 imamge here' width={610} height={685} className='sm:w-[704px] sm:h-[682px]' />
            </div>
            <div className=' sm:mr-40  sm:mt-56 flex flex-col items-center sm:items-start text-wrap gap-6 w-[509px] h-[432px] '>
                <div className='flex flex-col text-center sm:text-left gap-4 text-black'>
                    <p className='font-normal text-[20px] text-[#bdbdbd]'>SUMMER 2020</p>
                    <h1 className='font-bold text-[40px] leading-tight'>Part of the Neural <br /> Universe</h1>
                    <p className='font-normal text-[14px] text-[#737373]'>We know how large objects will act,
                        <br /> but things on a small scale.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
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