import React from 'react'
import AboutSec from '@/app/components/about'
import Customers from '@/app/components/customers'
import YouTubeVideo from '@/app/components/video'
import Team from '@/app/components/team'
import Companies from '@/app/components/companies'


const About = () => {
  return (
    <div className='flex flex-col'>
    <AboutSec/>
    <Customers/>
    <YouTubeVideo/>
    <Team/>
    <Companies/>
    </div>
  )
}

export default About