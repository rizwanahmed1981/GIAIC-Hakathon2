import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import p1 from "@/app/images/p1.png"
import p2 from "@/app/images/p2.png"
import p3 from "@/app/images/p3.png"
import p4 from "@/app/images/p4.png"
import p5 from "@/app/images/p5.png"
import squire from "@/app/images/squire.png"
import sheet from "@/app/images/sheet.png"
import { Button } from '@/components/ui/button'




const pPics = [
    {
        "image": p1
    },
    {
        "image": p2
    },
    {
        "image": p3
    },
    {
        "image": p4
    },
    {
        "image": p5
    },
]

const P1 = () => {
    return (
        <div>
            <div className='md:w-full  md:h-[92px] md:px-20 p-10 gap-4 w-[414px] h-[210px] flex flex-col md:flex-row item-center justify-between text-center'>
                <div>
                    <p className='text-[24px] font-bold text-[#252b42]'>Shop</p>
                </div>
                <div className='flex flex-row items-center  justify-center'>
                    <p className='text-[#252b42] text-[14px] font-bold '>Home</p>
                    <ChevronRight className='text-[#bdbdbd]' />
                    <p className='text-[14px] text-[#bdbdbd]'>Shop</p>
                </div>
            </div>

            <div className='md:max-w-full md:mx-32 md:gap-6 gap-4 ml-20 p-6 grid grid-cols-1 md:grid-cols-5 items-center justify-center'>
                {pPics.map((elem, index) => {
                    return (
                        <div key={index} className='md:mx-4 items-center'>
                            <Image src={elem.image} alt='product images' width={250} height={278} />
                        </div>
                    )
                })}
            </div>

            <div className=' md:w-full  md:h-[92px] md:px-20 flex flex-col gap-6 ml-6 my-10 md:flex-row items-center md:justify-between justify-center'>
                <div>
                    <p className='text-[17px] text-[#737373]'>Showing all 12 results</p>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <p className='text-[14px] text-[#737373]'>Views:</p>
                    <Image src={squire} alt='squire button' width={46} height={46} />
                    <Image src={sheet} alt='squire button' width={46} height={46} />
                </div>
                <div className='flex flex-row items-center justify-between gap-2'>
                    <Button className='w-[140px] h-[50px] bg-[#f9f9f9] rounded flex flex-row items-center text-[#737373] border-2'>
                    Popularity
                    <ChevronRight className=''/>
                    </Button>
                    <Button className='w-[90px] h-[50px] text-[14px] text-[#FFFFFF] bg-[#23A6F0] rounded'>
                        filter
                        </Button>
                </div>

            </div>
        </div>
    )
}

export default P1