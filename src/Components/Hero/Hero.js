import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen bg-transparent pt-[77px] pl-[56px] text-white flex justify-between'>
      {/* Left Section */}
      <div className='flex flex-col justify-center px-8 lg:px-16'>
        {/* Free Trial Banner */}
        <div className='mb-[24px]'>
          <div className='flex space-x-[12px] items-center bg-[rgba(12,14,18,0.4)] border border-[rgba(55,58,65,0.3)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-[10px] py-[4px] pl-[4px] pr-[10px]'>
            <div className='flex space-x-[6px] items-center bg-[rgba(12,14,18,0.4)] border border-[rgba(55,58,65,0.3)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-[10px] py-[2px] px-[8px]'>
              <img src='/Images/bluebutton.svg' alt='free trial' />
              <p
                className='max-[1000px]:text-[13px] text-[14px] font-[500] '
                style={{
                  fontFamily: 'Space Grotesk_Medium',
                  textTransform: 'uppercase'
                }}
              >
                FREE TRIAL
              </p>
            </div>
            <div
              className='flex space-x-[8px] items-center max-[1000px]:text-[13px] text-[14px] font-[500] '
              style={{
                fontFamily: 'Space Grotesk_Medium',
                textTransform: 'uppercase'
              }}
            >
              <p>Unlock Premium for 7 days for Free!</p>
              <img src='/Images/arrow.svg' alt='arrow' />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className='mb-[48px]'>
          <h1
            className='text-[64px] font-[700] text-[rgba(247, 247, 247, 1)] tracking-[-0.64px] leading-[110%]'
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
        <div className='flex items-center mb-[64px] space-x-[24px] flex-wrap'>
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
        <div className='flex space-x-4'>
          <button className='bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-colors'>
            Know More
          </button>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors'>
            Get Started Now
          </button>
        </div>
      </div>

      {/* Right Section - Music Player */}
      <img src='/Images/hero_img.png' className='max-w-[512px]' alt='hero' />
    </div>
  )
}

export default Hero
