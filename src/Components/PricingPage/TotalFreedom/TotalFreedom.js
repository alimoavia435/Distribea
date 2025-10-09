import React from 'react'

const TotalFreedom = () => {
  return (
    <div className=' py-[40px] px-[25px] sm:px-[50px] md:py-[45px] md:px-[70px]  lg:py-[55px] lg:px-[90px]  xl:py-[64px] xl:px-[118px]'>
      <div
        className='
        max-w-[1204px]
        mx-auto
        rounded-[30px]
        max-[768px]:flex-col max-[768px]:bg-cover max-[768px]:min-w-[100%] max-[768px]:gap-[40px]
        bg-[length:100%_100%] bg-center bg-no-repeat py-[35px] px-[15px] md:py-[35px] md:px-[30px]  lg:py-[50px] lg:px-[50px]  xl:py-[60px] xl:px-[56px] flex items-center justify-between gap-[30px]'
        style={{ backgroundImage: 'url("/Images/pricing/payasbg.webp")' }}

      >
        {/* left */}
        <div className='flex flex-col items-start gap-[20px]'>
          <p
            className='text-[#F9F9F9] text-[30px] md:text-[40px] xl:text-[48px] tracking-[-2px]'
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            Pay as you Go
          </p>
          <p
            className='text-[#f7f7f7] text-[14px] md:text-[16px] lg:text-[18px] max-w-[489px]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            No subscription, No commitment. — Just the essentials: pay per
            track, nothing more.
          </p>
        </div>
        {/* right */}
        <div
          className='
          min-w-full
          relative flex flex-col  border-[0px]   md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto xl:col-span-1 xl:justify-self-auto  col-span-1 justify-self-auto sm:min-w-[279px]'
        >
          <div className='mb-[20px]  flex items-center justify-between w-full'>
            <p
              className='text-[16px] sm:text-[18px]  lg:text-[22px] text-white text-left'
              style={{
                fontFamily: 'Space Grotesk_Medium'
              }}
            >
              Pay as you Go
            </p>
            <p
              className=' text-white px-[10.4px] py-[7.2px] rounded-[999px] bg-[linear-gradient(195.05deg,rgba(18,81,179,0.1)_0%,rgba(18,81,179,0.4)_50%,rgba(18,81,179,0.06)_100%)] text-[12.2px]'
              style={{
                fontFamily: 'Space Grotesk_Bold'
              }}
            >
              ✦ Total Freedom
            </p>
          </div>

          <div className='mb-[25px] md:mb-[40px] flex flex-col items-start gap-[7.2px]'>
            <p
              className='text-[30px] md:text-[38px] lg:text-[43.3px] text-[#FFFFFF]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              € 1,99
              <span
                className='text-[#9AA4B2] text-[14.4px] leading-[150%] ml-[8px]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                /track
              </span>
            </p>
          </div>

          <button
            className='
            text-[14px] md:text-[16px]
   [background:linear-gradient(var(--Colors-Blue-700,#175CD3),var(--Colors-Blue-700,#175CD3))_padding-box,linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_border-box]
    border-2 border-transparent
    shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner)_inset,0px_0px_0px_1px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border)_inset]
    text-white
    px-[5px] py-[12px]
    md:px-[20px] md:py-[16px] rounded-[999px]
    w-full
  '
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            Start with Pay-as-you-go
          </button>

          <div className='mt-[25px] md:mt-[40px] flex flex-col items-start gap-[26px]'>
            <p
              className='text-[14.4px] leading-[21px] text-[#ffffff]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              What you will get
            </p>

            <div className=' flex flex-col items-start gap-[10.8px]'>
              <div className='flex items-center gap-[7.2px]'>
                <img src='/Images/pricing/tick.svg' alt='' />
                <p
                  className='text-[#ffffff] text-[15px] leading-[21px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Lifetime license
                </p>
              </div>
              <div className='flex items-center gap-[7.2px]'>
                <img src='/Images/pricing/tick.svg' alt='' />
                <p
                  className='text-[#ffffff] text-[15px] leading-[21px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Comercial license
                  <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                    (Youtube, Tiktok, Twitch and more)
                  </span>
                </p>
              </div>
              <div className='flex items-center gap-[7.2px]'>
                <img src='/Images/pricing/tick.svg' alt='' />
                <p
                  className='text-[#ffffff] text-[15px] leading-[21px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Monetization{' '}
                  <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                    {' '}
                    (1 channel per platform){' '}
                  </span>
                </p>
              </div>

              <div className='flex items-center gap-[7.2px]'>
                <img src='/Images/pricing/tick.svg' alt='' />
                <p
                  className='text-[#ffffff] text-[15px] leading-[21px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Lifetime usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalFreedom
