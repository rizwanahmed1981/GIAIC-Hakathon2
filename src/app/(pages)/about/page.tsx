import React from 'react'
import AboutSec from '@/app/components/about'
import Customers from '@/app/components/customers'


const About = () => {
  return (
    <div className='flex flex-col'>
    <AboutSec/>
    <Customers/>
    </div>
  )
}

export default About