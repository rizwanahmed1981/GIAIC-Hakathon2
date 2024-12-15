import Price3 from '@/app/components/price3'
import Team2 from '@/app/components/team2'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import it1 from "@/app/images/it1.png"
import it2 from "@/app/images/it2.png"
import it3 from "@/app/images/it3.png"
import it4 from "@/app/images/it4.png"
import it5 from "@/app/images/it5.png"
import { ChevronRight } from 'lucide-react'

const CompanyTeam = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-between gap-6 py-6 md:my-8 text-center'>
      <p className='text-[16px] text-[#737373]'>WHAT WE DO</p>
      <h1 className='text-[58px] font-bold text-[#252B42] break-words text-wrap'>Innovation tailored for you</h1>
      <div className='flex flex-row gap-4'>
            <Link href={'/'} className='text-[14px] font-bold text-[#252b4d]'>Home</Link>
            <ChevronRight/>
            <p className='text-[14px] font-bold text-[#737373]'>Team</p>
        </div>

      </div>

      <div className='md:h-[530px] md:w-full md:px-72 grid grid-cols-2 gap-2  md:grid-cols-12 grid-rows-12 md:grid-rows-2'>
        <Image src={it1} alt='girl image' width={700} height={530} className=' md:col-span-6 col-span-2 row-span-6 md:row-span-2'/>
        <Image src={it2} alt='girl image' width={360} height={260} className='md:col-span-3 col-span-1 row-span-3 md:row-span-1'/>
        <Image src={it3} alt='girl image' width={360} height={260} className='md:col-span-3 col-span-1 row-span-3 md:row-span-1'/>
        <Image src={it4} alt='girl image' width={360} height={260} className='md:col-span-3 col-span-1 row-span-3 md:row-span-1'/>
        <Image src={it5} alt='girl image' width={360} height={260} className='md:col-span-3 col-span-1 row-span-3 md:row-span-1'/>

      </div>
      <Team2/>
      <Price3/>
    </div>
  )
}

export default CompanyTeam 