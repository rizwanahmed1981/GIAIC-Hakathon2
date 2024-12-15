import React from 'react'
import Image from 'next/image'
import mona from "@/app/images/monaLisa.png"
import { ChevronRight } from 'lucide-react'

const ProductDiscription = () => {
    return (
        <div className='w-[414px] h-[1300px] md:w-full md:h-[575px] bg-[#ffffff] flex flex-col gap-10 mt-12'>
            <div className='text-[14px] md:h-[90px] flex md:flex-row items-center justify-center md:justify-center md:gap-20 text-[#737373]'>
                <p className=''>Description</p>
                <p className='font-bold'>Additional Information</p>
                <div className='flex flex-row gap-2'>
                    <p className='font-bold'>Reviews</p>
                    <p className='text-[#23856d]'>0</p>
                </div>
            </div>
            <div className='md:w-full md:h-[510px] flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
                <Image src={mona} alt='mona lisa pic' width={330} height={500} />
                <div className='text-[14px] text-[#737373] tetx-wrap break-words md:w-[330px] md:h-[500px]  md:gap-4 gap-4 pl-6 justify-between flex flex-col  '>
                    <p className='text-[24px] text-[#252B42] font-bold'>The quick fox jumps over </p>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, maiores dignissimos ex mollitia nesciunt at nam dolorum esse magnam, consectetur nihil, culpa tempore quidem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium alias, numquam eligendi modi nesciunt quam fugiat vero necessitatibus, iste quasi, hic mollitia deserunt?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium alias, numquam eligendi modi nesciunt quam fugiat vero necessitatibus, iste quasi, hic mollitia deserunt?</p>
                </div>
                <div className='text-[14px] text-[#737373] tetx-wrap break-words md:w-[330px] md:h-[480px]  md:gap-6 gap-4 md:mb-6 justify-center flex flex-col  '>
                    <p className='text-[24px] text-[#252B42] font-bold'>The quick fox jumps over </p>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <p className='text-[24px] text-[#252B42] font-bold'>The quick fox jumps over </p>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <ChevronRight />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default ProductDiscription