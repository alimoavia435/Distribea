import CardCategories from '@/Components/CardCategories/CardCategories'
import Carousel from '@/Components/Carousel/Carousel'
import Categories from '@/Components/Categories/Categories'
import EssentialFeatures from '@/Components/EssentialFeatures/EssentialFeatures'
import Everything from '@/Components/Everything/Everything'
import Feature2 from '@/Components/Feature2/Feature2'
import Footer from '@/Components/Footer/Footer'
import Hero from '@/Components/Hero/Hero'
import Money from '@/Components/Money/Money'
import Navbar from '@/Components/Navbar/Navbar'
import Pricing from '@/Components/Pricing/Pricing'
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero11.webp')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="essential-features">
        <EssentialFeatures />
      </div>
      <Categories />
      <Feature2 />
      <Everything />
      <Money />
      <div id="pricing">
        <Pricing />
      </div>
      <div className='relative'>
        <Image
          src='/Images/pricing/shadpricing.png'
          alt='pricing-bg'
          width={700}
          height={700}
          className='h-[700px] w-[700px] absolute bottom-[500px] left-[-250px] 2xl:left-[-250px] max-[768px]:bottom-[200px]'
          priority
        />
        <div id="card-categories">
          <CardCategories />
        </div>
        <Carousel />
      </div>
      <Footer />
    </div>
  )
}

export default Home
