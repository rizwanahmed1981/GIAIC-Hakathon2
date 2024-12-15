import React from 'react'
import brand from './companyCard'
import Image from 'next/image'

const Companies2 = () => {
  return (
    <div className=' md:w-full g-2 w-[414pc] h-[920px] bg-[#FAFAFA] md:h-[160px] md:px-32  py-6  grid grid-cols-1 md:grid-cols-6 items-center  md:justify-between justify-center'>
      {brand.map((elem, index)=>{
        return(
          <div key={index} className='ml-36'>
            <Image src={elem.image} alt='brand images' width={152} height={75}/>
          </div>
        )
      })}
    </div>
  )
 

}

export default Companies2