import React from 'react'

const Feature2 = () => {
  return (
    <div
      className=' flex flex-col px-[86px] py-[128px] bg-no-repeat bg-[length:100%_100%] gap-[80px] max-[768px]:px-[25px] max-[768px]:py-[50px] max-[768px]:gap-[50px] max-[575px]:gap-[35px] max-[768px]:bg-cover max-[768px]:bg-center'
      style={{ backgroundImage: "url('/Images/fbg.png')" }}
    >
      <div className='flex flex-col gap-[20px] max-w-[512px]'>
        <h2
          style={{
            fontFamily: 'Space Grotesk_Bold',
            textTransform: 'capitalize'
          }}
          className='font-Space Grotesk_Bold 
  font-bold 
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-[22px] 
  leading-[110%] 
  tracking-[-1px] 
  text-left 
  text-[#F7F7F7] max-[600px]:text-center '
        >
          Royalty Free Music Designed for Content Creators
        </h2>
        <p
          className=' mx-auto max-w-[900px]  text-[#CECFD2] text-[16px] md:text-[20px] lg:text-[18px]  font-normal leading-[28px] text-left m-0 max-[600px]:text-center '
          style={{ fontFamily: 'Space Grotesk', textTransform: 'capitalize' }}
        >
          The freedom to create, the security to grow.
        </p>
      </div>
      <div className='flex flex-col gap-[48px] items-start max-w-[480px] max-[768px]:gap-[20px]'>
        <div className='flex items-start gap-[20px] max-[768px]:gap-[15px] max-[600px]:flex-col max-[600px]:items-center'>
          <img src='/Images/feature/d.svg' alt='' />
          <div className='flex flex-col gap-[20px] items-start pt-[8px] max-[768px]:gap-[15px] max-[600px]:items-center max-[600px]:pt-0'>
            <p
              className='max-[600px]:text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Download the perfect music
            </p>
            <p
              className='max-[600px]:text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
              style={{ fontFamily: 'Space Grotesk' }}
            >
              No copyright strikes. No demonetization. No takedowns. Just music
              you can trust—so your videos stay online and your revenue stays
              yours.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-[20px] max-[768px]:gap-[15px] max-[600px]:flex-col max-[600px]:items-center'>
          <img src='/Images/feature/m.svg' alt='' />
          <div className='flex flex-col gap-[20px] items-start pt-[8px] max-[768px]:gap-[15px]  max-[600px]:items-center max-[600px]:pt-0'>
            <p
              className='max-[600px]:text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Create your video without limits
            </p>
            <p
              className='max-[600px]:text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Forget endless disputes and copyright headaches. Royalty free
              tracks ready to use instantly, so you an focus on storytelling,
              not paperwork.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-[20px] max-[768px]:gap-[15px] max-[600px]:flex-col max-[600px]:items-center'>
          <img src='/Images/feature/mn.svg' alt='' />
          <div className='flex flex-col gap-[20px] items-start pt-[8px] max-[768px]:gap-[15px] max-[600px]:items-center max-[600px]:pt-0'>
            <p
              className='max-[600px]:text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Monetize it Safely
            </p>
            <p
              className='max-[600px]:text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Every track is optimized for digital platforms, helping your
              content perform better, attract more viewers, and maximize
              revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature2
