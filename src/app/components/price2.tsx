import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button'
import { Check, DollarSign } from 'lucide-react'


const Price2 = () => {
    return (
        <div className='bg-[#FFFFFF] md:w-full md:h-screen md:mb-10'>
            <div className=' flex flex-col items-center my-10 gap-10 md:h-[220px] md:ml-24 text-center md:mb-20 md:w-full'>
                <p className='font-bold text-[40px] text-[#252b42]'>Pricing</p>
                <p className='text-[14px] font-normal text-[#737373]'>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div className='flex flex-row gap-6 items-center font-bold text-[16px] text-[#252B42]'>
                    <p>Monthly</p>
                    <Switch className='w-[45px] h-[25px]' />
                    <p>Yearly</p>
                    <Button className='text-[#23a6F0] bg-[#b2e3ff] rounded-2xl text-'>Save 25%</Button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3  place-content-center gap-2 ml-36 md:mx-96'>
                <div className='font-bold border-solid border-2  py-8 bg-white  border-[#23A6F0] flex flex-col items-center justify-between w-[320px] h-[704px] gap-6 text-center my-10'>
                    <p className='text-[24px]  text-[#252b42]'>FREE</p>
                    <p className='text-[16px]  text-[#737373]'>Organize across all <br />
                        apps by hand</p>
                    <div className='text-[#23A6F0] flex flex-row items-center gap-4 '>
                        <p className='text-[40px] '>0</p>
                        <div className='flex flex-col gap-1' >
                            <DollarSign />
                            <p className='text-[14px]'>Per Month</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>1GB Cloud Storage </p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Email and Community Support</p>
                        </div>
                    </div>
                    <Button className='rounded w-[246px] h-[52px] bg-[#23a6f0] text-white '>Try For Free</Button>

                </div>
                <div className='font-bold border-solid border-2 py-8 bg-[#252b42] border-[#23A6F0] flex flex-col items-center justify-between w-[320px] h-[704px] gap-6 text-center md:mt-2 my-10'>
                
                   <p className='text-[24px]  text-white'>FREE</p>
                    <p className='text-[16px]  text-white'>Organize across all <br />apps by hand</p>
                   
                    <div className='text-[#23A6F0] flex flex-row items-center gap-4 '>
                        <p className='text-[40px] '>0</p>
                        <div className='flex flex-col gap-1' >
                            <DollarSign />
                            <p className='text-[14px]'>Per Month</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] '>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] '>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] '>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] '>1GB Cloud Storage </p>
                        </div>
                        <div className='flex flex-row gap-2 '>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] '>Email and Community Support</p>
                        </div>
                    </div>
                    <Button className='rounded w-[246px] h-[52px] bg-[#23a6f0] text-white '>Try For Free</Button>

                </div>
                <div className='font-bold border-solid border-2 py-8 bg-white  border-[#23A6F0] flex flex-col items-center justify-between w-[320px] h-[704px] gap-6 text-center my-10'>
                    <p className='text-[24px]  text-[#252b42]'>FREE</p>
                    <p className='text-[16px]  text-[#737373]'>Organize across all <br />
                        apps by hand</p>
                    <div className='text-[#23A6F0] flex flex-row items-center gap-4 '>
                        <p className='text-[40px] '>0</p>
                        <div className='flex flex-col gap-1' >
                            <DollarSign />
                            <p className='text-[14px]'>Per Month</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#2Dc071] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Unlimited product updates</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>1GB Cloud Storage </p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Check className='bg-[#bdbdbd] text-white rounded-full w-[32px] h-[32px] ' />
                            <p className='text-[14px] text-[#252b42]'>Email and Community Support</p>
                        </div>
                    </div>
                    <Button className='rounded w-[246px] h-[52px] bg-[#23a6f0] text-white '>Try For Free</Button>

                </div>


            </div>
            <div>

            </div>





        </div>
    )
}

export default Price2