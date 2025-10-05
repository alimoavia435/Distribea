import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-transparent pt-[77px] gap-[30px] max-[900px]:gap-[64px] pl-[56px] text-white flex justify-between max-[900px]:flex-col max-[900px]:justify-normal max-[600px]:pl-[25px] max-[600px]:pr-[0px] max-[400px]:pl-[16px] max-[600px]:pt-[35px]'>
      {/* Left Section */}
      <div className='flex flex-col justify-center  max-[600px]:pr-[25px]  max-[400px]:pr-[16px]'>
        {/* Free Trial Banner */}
        <div className='mb-[16px] lg:mb-[20px] xl:mb-[24px] flex max-[600px]:justify-center'>
          <div className='flex space-x-[4px] items-center bg-[rgba(12,14,18,0.4)] border border-[rgba(55,58,65,0.3)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-[10px] py-[4px] pl-[4px] pr-[10px] max-w-fit'>
            <div className='flex space-x-[6px] items-center bg-[rgba(12,14,18,0.4)] border border-[rgba(55,58,65,0.3)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-[6px] py-[2px] px-[4px]'>
              <Image src='/Images/bluebutton.svg' alt='free trial' width={20} height={20} />
              <p
                className='text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] font-[500] '
                style={{
                  fontFamily: 'Space Grotesk_Medium',
                  textTransform: 'uppercase'
                }}
              >
                FREE TRIAL
              </p>
            </div>
            <div
              className='flex items-center max-[400px]:text-[10px] max-[1000px]:text-[12px] text-[14px] font-[500] '
              style={{
                fontFamily: 'Space Grotesk_Medium',
                textTransform: 'uppercase'
              }}
            >
              <p>Unlock Premium for 7 days for Free!</p>
              <Image src='/Images/arrow.svg' alt='arrow' width={16} height={16} />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className='mb-[30px] lg:mb-[40px] xl:mb-[48px]'>
          <h1
            className='max-[600px]:text-center text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-[700] text-[rgba(247, 247, 247, 1)] tracking-[-0.64px] leading-[110%]'
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            The First Royalty-Free
            <br />
            <span className='bg-gradient-to-b from-[#317CF2] to-[#296EDB] bg-clip-text text-transparent'>
              Music Platform
            </span>
            <br />
            for Content Creators
          </h1>
        </div>

        {/* Bullet Points */}
        <div className='flex items-center mb-[35px] lg:mb-[50px] xl:mb-[64px] space-x-[12px] lg:space-x-[20px] space-y-[8px] xl:space-x-[24px] flex-wrap max-[600px]:justify-center'>
          <div
            className='max-[1000px]:text-[15px] text-[17px] font-[500]'
            style={{
              fontFamily: 'Space Grotesk_Medium'
            }}
          >
            Unlimited downloads
          </div>
          <div
            className='max-[1000px]:text-[15px] text-[17px] font-[500] '
            style={{
              fontFamily: 'Space Grotesk_Medium'
            }}
          >
            .
          </div>
          <div
            className='max-[1000px]:text-[15px] text-[17px] font-[500] '
            style={{
              fontFamily: 'Space Grotesk_Medium'
            }}
          >
            Highest-quality sound
          </div>
          <div
            className='max-[1000px]:text-[15px] text-[17px] font-[500] '
            style={{
              fontFamily: 'Space Grotesk_Medium'
            }}
          >
            .
          </div>
          <div
            className='max-[1000px]:text-[15px] text-[17px] font-[500] '
            style={{
              fontFamily: 'Space Grotesk_Medium'
            }}
          >
            Unlimited growth
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-[12px] max-[600px]:flex-col-reverse'>
          <button className='bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-colors max-[600px]:mr-0'>
            Know More
          </button>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors'>
            Get Started Now
          </button>
        </div>
      </div>

      {/* Right Section - Music Player */}
      {}
      <Image
        src='/Images/hero_img.webp'
        alt='hero'
        width={512}
        height={684}
        className='w-full max-h-[684px] xl:max-w-[512px]  lg:max-w-[450px] max-w-[400px]  max-[900px]:max-w-[550px] self-end'
        priority
      />
    </div>
  )
}

export default Hero
