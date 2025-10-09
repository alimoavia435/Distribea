import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import CustomEnterPrise from '@/Components/PricingPage/CustomEnterprise/CustomEnterPrise'
import Faqs from '@/Components/PricingPage/Faqs/Faqs'
import Pricing from '@/Components/PricingPage/Pricing/Pricing'
import TotalFreedom from '@/Components/PricingPage/TotalFreedom/TotalFreedom'
import Image from 'next/image'
import React from 'react'

const PricingPage = () => {
  
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero11.webp')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/Images/pricing/sh.png')",
        backgroundPosition:"700px 60%",
        }}
        className='bg-no-repeat'
      >
        <Pricing />
        <TotalFreedom />
      </div>

      <div
        style={{
          backgroundImage: "url('/Images/pricing/sh.png')",
          backgroundPosition:"-700px 10%",
        }}
        className='bg-no-repeat'
      >
        <div
          style={{
            backgroundImage: "url('/Images/pricing/sh.png')",
            backgroundPosition:"700px 100%",
          }}
          className='bg-no-repeat'
        >
          <CustomEnterPrise />
          <Faqs />
        </div>
      </div>
      <div className='pt-[50px] mx-auto max-w-[1364px] flex flex-wrap justify-center items-center gap-3  md:gap-8 mb-[30px] px-4'>
        {[1, 2, 3, 4, 5, 6, 7].map(num => (
          <div
            key={num}
            className='flex-shrink-0 w-[calc(33.33%-32px)] sm:w-[calc(25%-32px)] md:w-[calc(20%-32px)] lg:w-auto max-w-[180px] min-w-[60px]'
          >
            <Image
              src={`/Images/${num}.svg`}
              alt={`Logo ${num}`}
              width={180}
              height={68}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default PricingPage
