import Categories from '@/Components/Categories/Categories'
import EssentialFeatures from '@/Components/EssentialFeatures/EssentialFeatures'
import Everything from '@/Components/Everything/Everything'
import Feature2 from '@/Components/Feature2/Feature2'
import Hero from '@/Components/Hero/Hero'
import MonetizationSection from '@/Components/MonetizationSection/MonetizationSection'
import Navbar from '@/Components/Navbar/Navbar'
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
    </div>
  )
}

export default HomePage
