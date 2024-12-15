import { ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Price1 from '@/app/components/price1'
import Price2 from '@/app/components/price2'
import Companies from '@/app/components/companies'
import Pricingfaq from '@/app/components/pricingfaq'

const Pricing
 = () => {
  return (
    <div>
      <Price1/>
      <Price2/>
      <Companies/>
      <Pricingfaq/>
        
    </div>
  )
}

export default Pricing
