import React from 'react'
import brand from './companyCard'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className='md:h-[479px] md:w-full flex items-center justify-evenly gap-8 flex-col'>
        <div className='flex flex-col gap-6 text-centre item-centre'>
            <p className='text-[40px] font-bold text-[#252b42] break-words'>Big Companies Are Here</p>
            <p className='font-normal text-[14px] text-[#737373] break-words text-center'>Problems trying to resolve the conflict between<br/>
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 items-center gap-10 my-16 md:gap-6 md:justify-between'>
            {brand.map((item, index)=>{
                return(
                    <div>
                        <Image src={item.image} alt='brand image ' width={152} height={75}/>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default Companies