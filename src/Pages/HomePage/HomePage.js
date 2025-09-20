import EssentialFeatures from '@/Components/EssentialFeatures/EssentialFeatures'
import Hero from '@/Components/Hero/Hero'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <div style={{ backgroundImage: "url('/Images/hero.png')" }} className='bg-[0_0] bg-no-repeat'>
      <Navbar />
      {/* <Hero /> */}
      <EssentialFeatures/>
    </div>
  )
}

export default HomePage
