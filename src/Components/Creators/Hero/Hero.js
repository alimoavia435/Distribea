import React from 'react'

const Hero = () => {
  return (
    <div className='py-[50px] md:py-[80px] lg:py-[100px] xl:py-[128px]  flex flex-col items-center gap-[30px] md:gap-[40] lg:gap-[60] xl:gap-[80px] max-w-[768px] mx-auto'>
      <div className=' flex flex-col items-center gap-[18px] xl:gap-[24px]'>
        <p
          className='text-[30px] sm:text-[35px] md:text-[50px] lg:text-[60px] xl:text-[72px] leading-[140%] tracking-[-1.44px] text-[#ffffff] text-center'
          style={{ fontFamily: 'Space Grotesk_Bold' }}
        >
          Royalties-free music for Creator 🎥✨
        </p>
        <p
          className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#CECFD2] text-center'
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Discover the best music, carefully crafted for creators.
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-[32px]'>
        <div className='flex items-center gap-[4px]'>
          <img
            src='/Images/pricing/tick.svg'
            alt=''
            className='h-[24px] w-[24px]'
          />
          <p
            className='text-[#ffffff] text-[14px] leading-[24px]'
            style={{
              fontFamily: 'Space Grotesk_Medium',
              textTransform: 'uppercase'
            }}
          >
            Premium Quality Tracks
          </p>
        </div>
        <div className='flex items-center gap-[4px]'>
          <img
            src='/Images/pricing/tick.svg'
            alt=''
            className='h-[24px] w-[24px]'
          />
          <p
            className='text-[#ffffff] text-[14px] leading-[24px]'
            style={{
              fontFamily: 'Space Grotesk_Medium',
              textTransform: 'uppercase'
            }}
          >
            Unlimited downloads
          </p>
        </div>
        <div className='flex items-center gap-[4px]'>
          <img
            src='/Images/pricing/tick.svg'
            alt=''
            className='h-[24px] w-[24px]'
          />
          <p
            className='text-[#ffffff] text-[14px] leading-[24px]'
            style={{
              fontFamily: 'Space Grotesk_Medium',
              textTransform: 'uppercase'
            }}
          >
            Tailored for Every Video
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
