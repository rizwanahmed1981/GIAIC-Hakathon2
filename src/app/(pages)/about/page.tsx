import React from 'react'
import AboutSec from '@/app/components/about'
import Customers from '@/app/components/customers'
import YouTubeVideo from '@/app/components/video'
import Team from '@/app/components/team'
import Companies from '@/app/components/companies'
import Hero4about from '@/app/components/hero4about'


const About = () => {
  return (
    <div className='flex flex-col'>
    <AboutSec/>
    <Customers/>
    <YouTubeVideo/>
    <Team/>
    <Companies/>
    <Hero4about/>
    </div>
  )
}

export default About