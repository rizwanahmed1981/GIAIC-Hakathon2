import React from 'react'
import Image from 'next/image'
import hero2 from "@/app/images/hero2.png"
import { Button } from '@/components/ui/button'

const Hero2 = () => {
    return (
        <div className='w-[415px] h-[1280px] md:w-full  md:h-[711px] bg-[#23856D] m-10 flex flex-col md:flex md:flex-row items-center md:justify-evenly md:px-40 md:gap-10'>
            <div className='text-white md:ml-56 mt-20 md:mt-40 flex flex-col items-center gap-6 w-[509px] h-[432px] '>
                <div className='flex flex-col text-center gap-4'>
                    <p className='font-normal text-[20px] opacity-100'>SUMMER 2020</p>
                    <h1 className='font-bold text-[58px] leading-tight'>Vita Classic <br /> Product</h1>
                    <p className='font-normal text-[14px] opacity-100'>We know how large objects will act, We know <br /> how are objects will act, We know</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <p >$16.48</p>
                    <Button className='bg-[#2DC071] rounded'>
                        ADD TO CART
                    </Button>
                </div>
            </div>
            <div className='md:mt-32  items-end'>
                <Image src={hero2} alt='Hero 2 imamge here' width={510} height={685} />
            </div>
        </div>
    )
}

export default Hero2