import Categories from '@/Components/Categories/Categories'
import EssentialFeatures from '@/Components/EssentialFeatures/EssentialFeatures'
import Everything from '@/Components/Everything/Everything'
import Feature2 from '@/Components/Feature2/Feature2'
import Footer from '@/Components/Footer/Footer'
import Hero from '@/Components/Hero/Hero'
import MonetizationSection from '@/Components/MonetizationSection/MonetizationSection'
import Money from '@/Components/Money/Money'
import Navbar from '@/Components/Navbar/Navbar'
import Pricing from '@/Components/Pricing/Pricing'
import React from 'react'

const HomePage = () => {
  return (
    <div style={{ backgroundImage: "url('/Images/hero.png')" }} className='bg-[0_0] bg-no-repeat'>
      <Navbar />
      <Hero />
      <EssentialFeatures/>
      <Categories/>
      <Feature2/>
      <Everything/>
      {/* <Money/> */}
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default HomePage
