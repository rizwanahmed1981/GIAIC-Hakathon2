import React from 'react'
import Image from 'next/image'
import hero1 from "@/app/images/hero1.svg"
import heroVer from "@/app/images/hero-vertical.svg"
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className=''>
            <div className='hidden sm:w-full sm:h-[780px] sm:flex sm:flex-row sm:items-center sm:justify-center ' >
                <div className=' text-white sm:w-[1044px] sm:h-[651px] flex flex-col justify-center absolute z-10 gap-6'>

                    <p className='sm:font-bold sm:text-lg'>SUMMER 2020</p>
                    <h1 className='sm:font-bold sm:text-6xl'>NEW COLLECTION</h1>
                    <p className='sm:font-normal sm:text-[20px]'>We know how large objects will act, <br /> but thins on a small scale</p>
                    <Button className='bg-[#2dc071] rounded w-[228px] h-[62px] text-[24px] font-bold'>SHOP NOW</Button>

                </div>
                <div>
                    <Image src={hero1} alt='Hero Image' height={840} width={1540} className='relative' />
                </div>

            </div>





            <div className='sm:hidden w-[630px] h-[1285px]  flex  items-center justify-between' >
                <div className=' text-white w-[414px] h-[784px] flex flex-col justify-center items-center text-center absolute z-10 gap-10'>

                    <p className='font-bold text-lg'>SUMMER 2020</p>
                    <h1 className='font-bold text-4xl text-wrap'>NEW <br /> COLLECTION</h1>
                    <p className='font-normal text-[16px]'>We know how large objects<br /> will act,  but thins on<br/> a small scale</p>
                    <Button className='bg-[#2dc071] rounded w-[150px] h-[50px] text-[18px] font-bold'>SHOP NOW</Button>

                </div>
                <Image src={heroVer} alt='Hero Image' width={630} height={753} className='relative' />

            </div>
        </div>


    )
}

export default Hero