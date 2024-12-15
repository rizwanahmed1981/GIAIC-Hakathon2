import React from 'react'
import priceFaq from './pricingFaqCard'
import { ChevronRight } from 'lucide-react'

const Pricingfaq = () => {
  return (
    <div className='flex flex-col items-center  h-[1850px] w-[414px] break-words  md:h-[1040px] md:w-full gap-20 md:px-20'>
        <div className='flex flex-col items-center ml-16 gap-4 text-center'>
            <p className='text-[40px] font-bold text-[#252b42]'>Pricing FAQs</p>
        <p className='text-[20px] text-[#737373]'>Problems trying to resolve the conflict between <br/> 
        the two major realms of Classical physics</p>
        </div>
        <div className="md:w-full md:max-w-7xl ml-10 md:ml-20 grid grid-cols-1 sm:grid-cols-2 md:gap-6  gap-2 items-center justify-between ">
            {priceFaq.map((elem, index)=>{
                return(
                    <div key={index} className='w-[500px] h-[160px] text-wrap'>
                       <div className='flex flex-row text-left'>
                       <ChevronRight className='text-[#23A6F0]'/>
                       <p className='text-[16px] font-bold text-[#252b42]'>{elem.q}</p>
                       </div>
                        <p className='text-[14px] font-normal text-[#737373] text-left md:ml-6'>{elem.ans}</p>

                    </div>
                )
            })}
            
        </div>
        <p className='text-[32px] font-normal text-[#737373] ml-16 text-center max-w-7xl'>Haven’t got your answer? Contact our support</p>
    </div>
  )
}

export default Pricingfaq
