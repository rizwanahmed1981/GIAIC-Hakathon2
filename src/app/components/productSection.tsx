import React from 'react'
import Image from 'next/image'
import sofa from "@/app/images/yellowsoffa.png"
import star from "@/app/images/stars.png"
import colour from "@/app/images/colour.svg"
import { Button } from '@/components/ui/button'
import { Eye, Heart, ShoppingCart } from 'lucide-react'


const ProductSection = () => {
    return (
        <div className='sm:h-[600px] sm:w-full bg-[#FAFAFA] flex flex-col mb-6 sm:flex-row sm:gap-10 sm:pl-24'>
            <div>
                <Image src={sofa} alt='yellow sofa image' width={510} height={550} />

            </div>
            <div className='sm:w-[510px] sm:h-[471px] pl-6 flex flex-col justify-start gap-6'>
                <p className='text-[20px] font-bold text-[#252b42]'>Floating Phone</p>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <Image src={star} alt='yellow stars' width={130} height={22} />
                    <p className='text-[14px] text-[#737373]'>10 Reviews</p>
                </div>
                <p className='text-[24px] font-bold text-[#252b42]'>$1,139.33</p>
                <div className='flex flex-row items-center justify-start gap-4'>
                    <p className='text-[14px] text-[#737373] '>Availability &nbsp; :</p>
                    <p className='text-[14px] text-[#23A6F0] '>In Stock</p>
                </div>
                <p className='text[14px] text-[#858585] break-words'>Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                    do met sent. RELIT official consequent door ENIM RELIT Mollie.<br />
                    Excitation venial consequent sent nostrum met.</p>
                <Image src={colour} alt='colours ' width={150} height={30}/>
                <div className='flex sm:flex-row items-center justify-start gap-4'>
                    <Button className='w-[148px] h-[44px] bg-[#23A6F0] text-white text-[14px] rounded'>Select Options</Button>
                    <Heart/>
                    <ShoppingCart/>
                    <Eye/>
                </div>
            </div>

        </div>
    )
}

export default ProductSection