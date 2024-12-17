import React from 'react'
import Image from 'next/image'
import hero2 from "@/app/images/hero2.png"
import { Button } from '@/components/ui/button'

const Hero2 = () => {
    return (
        <div className='w-[630px] h-[1300px] sm:w-full sm:h-[800px] bg-[#23856D] flex flex-col sm:flex-row items-center justify-between sm:justify-evenly sm:mt-20 mt-96 sm:gap-10'>
            <div className='text-white sm:ml-56 mt-20 sm:mt-40 flex flex-col items-center gap-6 w-[509px] h-[432px] '>
                <div className='flex flex-col text-center sm:text-left gap-4'>
                    <p className='font-normal text-[20px] opacity-100'>SUMMER 2020</p>
                    <h1 className='font-bold text-[58px] leading-tight'>Vita Classic <br /> Product</h1>
                    <p className='font-normal text-[14px] opacity-100'>We know how large objects will act, We know <br /> how are objects will act, We know</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:justify-evenly gap-4'>
                    <p >$16.48</p>
                    <Button className='bg-[#2DC071] rounded'>
                        ADD TO CART
                    </Button>
                </div>
            </div>
            <div className='sm:mt-20  items-end'>
                <Image src={hero2} alt='Hero 2 imamge here' width={600} height={685} />
            </div>
        </div>
    )
}

export default Hero2