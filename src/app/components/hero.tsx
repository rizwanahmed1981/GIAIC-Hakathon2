import React from 'react'
import Image from 'next/image'
import hero1 from "@/app/images/hero1.svg"
import heroVer from "@/app/images/hero-vertical.svg"
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='mb-8'>
            <div className=' md:w-full md:h-[716px]  hidden md:flex  items-center justify-start  ' >
                <div className='px-[140px] text-white w-[1044px] h-[651px] flex flex-col justify-center absolute z-10 gap-6'>

                    <p className='md:font-bold md:text-lg'>SUMMER 2020</p>
                    <h1 className='md:font-bold md:text-6xl text-wrap'>NEW COLLECTION</h1>
                    <p className='md:font-normal md:text-[20px]'>We know how large objects will act, <br /> but thins on a small scale</p>
                    <Button className='bg-[#2dc071] rounded w-[228px] h-[62px] text-[24px] font-bold'>SHOP NOW</Button>

                </div>
                <Image src={hero1} alt='Hero Image' height={716} width={1540} className='relative' />

            </div>
            <div className='w-[453px] h-[753px] ml-28 md:hidden flex  items-center justify-between mt-40' >
                <div className=' text-white w-[450px] pr-12 h-[651px] flex flex-col justify-center items-center text-center absolute z-10 gap-4'>

                    <p className='font-bold text-lg'>SUMMER 2020</p>
                    <h1 className='font-bold text-4xl text-wrap'>NEW <br/> COLLECTION</h1>
                    <p className='font-normal text-[16px]'>We know how large objects will act, <br /> but thins on a small scale</p>
                    <Button className='bg-[#2dc071] rounded w-[150px] h-[50px] text-[18px] font-bold'>SHOP NOW</Button>

                </div>
                <Image src={heroVer} alt='Hero Image' height={753}  className='relative' />

            </div>
        </div>
        

    )
}

export default Hero