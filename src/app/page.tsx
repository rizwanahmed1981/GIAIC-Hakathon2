import React from 'react'
import Hero from './components/hero';
import Section1 from './components/section1';
// import ProductList from './components/productsSection';
import ProductsSection from './components/productsSection';

const Page = () => {
  return (
    <div>
      <Hero/>
      <Section1/>
      <ProductsSection/>
      {/* <ProductList/> */}
    </div>
  )
}
export default Page;
