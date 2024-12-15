import React from 'react'

import Image from 'next/image'
import teamCard from './teamcard2'
const Team2 = () => {
  return (
    <div className='md:h-[1760px] w-[414px] h-[4000px] md:w-full flex flex-col md:flex-col md:my-8 ml-20 gap-6 md:gap-8 md:items-center md:justify-center mt-10'>
        <div className=' flex flex-col place-items-center text-center w-[361px] h-[220px] '>
            <p className='text-[40px] font-bold text-[#252b42]'>Meet Our Team</p>
            <p className='text-base font-normal text-[#737373]'>Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className="w-[80%] ml-10 md:ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 md:gap-6 place-items-center justify-between md:justify-center">
            {teamCard.map((item, index)=>{
                return(
                    <div key={index} className='flex flex-col place-items-center gap-4 '>
                        <Image src={item.image[0]} alt='team1 image'/>
                        <p className='text-wrap'>{item.title}</p>
                        <p className='text-wrap'>{item.discription}</p>
                        <Image src={item.image[1]} alt='social media icons'/>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Team2