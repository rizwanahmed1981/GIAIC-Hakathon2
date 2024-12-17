import React from 'react'
import Image from 'next/image'
import BlogCard from './blogcard'

const Blog = () => {
  return (

    <div className='flex flex-col w-[630px] h-[2302px] gap-10 my-10 sm:mt-20 sm:h-[1044px] sm:w-full'>
      <div className='flex flex-col text-center items-center  gap-4'>
        <p className='text-[#23a6f0] text-[14px] font-bold'>Practice Advice</p>
        <h1 className='font-bold text-[40px] text-[#252b42]'>Featured Posts</h1>
        <p className='text-[14px] font-normal text-[#737373] break-words'>Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics</p>
      </div>


      <div className="w-full pl-36 sm:ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 sm:gap2 items-center justify-center">
        {BlogCard.map((item, index) => {
          return (
            <div key={index} className='flex flex-col gap-2'>
              <Image src={item.image[0]} alt='city clock image' width={348} height={300} />
              <div className='flex flex-row items-start gap-4'>
                <p className='font-normal text-[12px] text-[#8EC2F2] opacity-100'>{item.top[0]}</p>
                <p className='font-normal text-[14px] text-[#737373] opacity-100'>{item.top[1]}</p>
                <p className='font-normal text-[12px] text-[#737373] opacity-100'>{item.top[2]}</p>
              </div>
              <div className='flex flex-col items-start justify-evenly gap-4'>
                <p className='font-normal text-[20px] text-[#252b42] opacity-100 text-wrap w-[247px] h-[60px]'>{item.title}</p>
                <p className='w-[280px] h-[60px] text-[14px] font-normal text-wrap text-[#737373] opacity-100'>{item.discription}</p>
              </div>
              <div className='w-[298px] h-[46px] text-[12px] font-normal opacity-100 flex flex-row justify-between gap-6 sm:ml-6 sm:mr-'>
                <div className='flex flex-row gap-2 items-center'>
                  <Image src={item.image[1]} alt='clock pic'/>
                  <p className='text-[#737373]'>{item.date}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                  <Image src={item.image[2]} alt='graph pic'/>
                  <p className='text-[#737373]'>{item.comments}</p>
                </div>
              </div>
              <div className='flex flex-row gap-4 items-center' >
                <p className='font-bold text-[14px] text-[#737373] opacity-100'>{item.learn}</p>
                <Image src={item.image[3]} alt='arrow right facing' className='text-[#23A6F0]'/>
              </div>

            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Blog