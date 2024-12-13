import React from 'react'

const Customers = () => {
  return (
    <div className='flex flex-col mt-10 md:mt-36 md:mb-2 gap-12 mb-8 md:gap-16 md:flex-row md:item-centre md:justify-evenly md:h-[264px] md:w-full'>
        <div className='flex flex-col place-items-center'>
            <p className='font-bold text-6xl text-[#252b42]'>15K</p>
            <p className='font-bold text-lg  text-[#737373]'>Happy Customers</p>
        </div>
        <div className='flex flex-col place-items-center'>
            <p className='font-bold text-6xl text-[#252b42]'>150K</p>
            <p className='font-bold text-lg  text-[#737373]'>Monthly Visitors</p>
        </div>
        <div className='flex flex-col place-items-center'>
            <p className='font-bold text-6xl text-[#252b42]'>15</p>
            <p className='font-bold text-lg  text-[#737373]'>Countries Wrolwide</p>
        </div>
        <div className='flex flex-col place-items-center'>
            <p className='font-bold text-6xl text-[#252b42]'>100+</p>
            <p className='font-bold text-lg  text-[#737373]'>Top Partners</p>
        </div>
    </div>
  )
}

export default Customers