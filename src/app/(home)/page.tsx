import React from 'react'
import Hero from '../components/hero';
import Section1 from '../components/section1';
// import ProductList from './components/productsSection';
import ProductsSection from '../components/productsSection';
import Hero2 from '../components/hero2';
import Hero3 from '../components/hero3';
import Blog from '../components/blog';

const Page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <ProductsSection />
      <Hero2 />
      <Hero3 />
      <Blog />
      {/* <ProductList/> */}
    </div>
  )
}
export default Page;
