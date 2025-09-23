import React, { useState } from 'react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  return (
    <div className='relative overflow-x-hidden'>
      <img
        src='/Images/pricing/shadpricing.png'
        alt='pricing-bg'
        className='h-[589px] w-[663px] absolute top-[-38px] right-[-150px]'
      />
      <section className='text-white w-full px-[25px] sm:px-[32px] md:px-[40px] lg:px-[45px] xl:px-[56px] 2xl:px-[100px] py-[48px] md:py-[64px] lg:py-[80px] xl:py-[96px] bg-no-repeat relative'>
        {/* Heading */}
        <div className='flex flex-col items-center gap-[20px] text-center mb-[25px] md:mb-[40px] lg:mb-[64px]'>
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
  text-center 
  text-[#F7F7F7] m-0'
          >
            Pricing
          </h2>
          <p
            className=' mx-auto max-w-[900px]  text-[#CECFD2] text-[16px] md:text-[20px] lg:text-[18px] font-normal leading-[28px] text-center m-0 '
            style={{ fontFamily: 'Space Grotesk', textTransform: 'capitalize' }}
          >
            Whether you&apos;re just starting or scaling, we have a plan for
            you.
          </p>
        </div>
        {/* Toggle */}
        <div className='flex items-center justify-center gap-[16px] mb-[25px] md:mb-[35px] lg:mb-[60px] cursor-pointer'>
          <button
            type='button'
            onClick={() => setIsYearly(false)}
            className={`text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] cursor-pointer transition-colors ${
              !isYearly ? 'text-white' : 'text-[#9AA4B2]'
            }`}
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Monthly
          </button>
          <button
            type='button'
            aria-label='billing toggle'
            role='switch'
            aria-checked={isYearly}
            onClick={() => setIsYearly(p => !p)}
            className='relative rounded-full border transition-[background,left] duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#175CD3]/50  cursor-pointer'
            style={{
              width: '74px',
              height: '33px',
              borderColor: '#175CD3',
              background:
                'linear-gradient(101.58deg, rgba(23, 92, 211, 0.3) 11.29%, #175CD3 95.51%)'
            }}
          >
            <span
              className='absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-200'
              style={{
                width: '27px',
                height: '27px',
                left: isYearly ? '44px' : '3px',
                background: 'white'
              }}
            />
          </button>
          <button
            type='button'
            onClick={() => setIsYearly(true)}
            className={`text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] cursor-pointer transition-colors ${
              isYearly ? 'text-white' : 'text-[#9AA4B2]'
            }`}
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Annually
          </button>
        </div>
        {/* Cards */}
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center xl:grid-cols-3 gap-[18px] md:gap-[22px] lg:gap-[28px] max-w-[1200px]'>
          {/* Free */}
          <div
            className='relative rounded-[22px] px-[22px] sm:px-[26px] py-[26px] md:py-[30px] min-h-[640px] flex flex-col backdrop-blur-[36px] border-[0px] hover:border-[4px] hover:border-[#175cd3] hover:shadow-[0px_15px_25px_0px_#175CD326]'
            style={{
              background:
                'linear-gradient(195.05deg, rgba(18, 81, 179, 0.1) 0%, rgba(18, 81, 179, 0.4) 50%, rgba(18, 81, 179, 0.06) 100%)'
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <img src='/Images/pricing/free.svg' alt='' />
              <p
                className='px-[14.4px] py-[7.2px] rounded-[999px] bg-[linear-gradient(195.05deg,rgba(18,81,179,0.1)_0%,rgba(18,81,179,0.4)_50%,rgba(18,81,179,0.06)_100%)] text-[12.2px]'
                style={{
                  fontFamily: 'Space Grotesk_Bold'
                }}
              >
                ✦ Try-it
              </p>
            </div>
            <p
              className='mt-[21.6px] mb-[21.6px] text-[25.2px] text-white text-left'
              style={{
                fontFamily: 'Space Grotesk_Medium'
              }}
            >
              Free
            </p>
            <div className='mb-[40px] flex flex-col items-start gap-[7.2px]'>
              <p
                className='text-[30px] md:text-[38px] lg:text-[43.3px]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                € 0
                <span
                  className='text-[#9AA4B2] text-[14.4px] leading-[150%] ml-[8px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  /month
                </span>
              </p>

              <p
                className='text-white text-[12.6px] opacity-70'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Lifetime Free
              </p>
            </div>

            <button
              className='
            text-[16px]
   [background:linear-gradient(var(--Colors-Blue-700,#175CD3),var(--Colors-Blue-700,#175CD3))_padding-box,linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_border-box]
    border-2 border-transparent
    shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner)_inset,0px_0px_0px_1px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border)_inset]
    text-white
    px-[20px] py-[16px] rounded-[999px]
  '
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Start with Free Plan
            </button>

            <div className='mt-[40px] flex flex-col items-start gap-[26px]'>
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
                    3 downloads/month
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Unlimited streaming
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Personal use only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Creator - highlighted */}
          <div
            className='relative rounded-[22px] px-[22px] sm:px-[26px] py-[26px] md:py-[30px] min-h-[640px] flex flex-col backdrop-blur-[36px] border-[0px] hover:border-[4px] hover:border-[#175cd3] hover:shadow-[0px_15px_25px_0px_#175CD326]'
            style={{
              background:
                'linear-gradient(195.05deg, rgba(18, 81, 179, 0.1) 0%, rgba(18, 81, 179, 0.4) 50%, rgba(18, 81, 179, 0.06) 100%)'
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <img src='/Images/pricing/creator.svg' alt='' />
              <p
                className='px-[14.4px] py-[7.2px] rounded-[999px] bg-[linear-gradient(195.05deg,rgba(18,81,179,0.1)_0%,rgba(18,81,179,0.4)_50%,rgba(18,81,179,0.06)_100%)] text-[12.2px]'
                style={{
                  fontFamily: 'Space Grotesk_Bold'
                }}
              >
                ✦ Popular
              </p>
            </div>
            <p
              className='mt-[21.6px] mb-[21.6px] text-[25.2px] text-white text-left'
              style={{
                fontFamily: 'Space Grotesk_Medium'
              }}
            >
              Creator
            </p>
            <div className='mb-[40px] flex flex-col items-start gap-[7.2px]'>
              <p
                className='text-[30px] md:text-[38px] lg:text-[43.3px]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                € 5,99
                <span
                  className='text-[#9AA4B2] text-[14.4px] leading-[150%] ml-[8px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  /month
                </span>
              </p>

              <p
                className='text-white text-[12.6px] opacity-70'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Billed Yearly €24,99
              </p>
            </div>

            <button
              class='
            text-[16px]
   [background:linear-gradient(var(--Colors-Blue-700,#175CD3),var(--Colors-Blue-700,#175CD3))_padding-box,linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_border-box]
    border-2 border-transparent
    shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner)_inset,0px_0px_0px_1px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border)_inset]
    text-white
    px-[20px] py-[16px] rounded-[999px]
  '
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Start with Creator Plan
            </button>

            <div className='mt-[40px] flex flex-col items-start gap-[26px]'>
              <p
                className='text-[14.4px] leading-[21px] text-[#ffffff]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Everything included in Free, plus:
              </p>

              <div className=' flex flex-col items-start gap-[10.8px]'>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Unlimited downloads
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Commercial license{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                      (YouTube, TikTok, Twitch, podcasts)
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
                      (1 channel per platform)
                    </span>
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Lifetime usage{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                      {' '}
                      of downloaded music
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div
            className='relative rounded-[22px] px-[22px] sm:px-[26px] py-[26px] md:py-[30px] min-h-[640px] flex flex-col backdrop-blur-[36px] border-[0px] hover:border-[4px] hover:border-[#175cd3] hover:shadow-[0px_15px_25px_0px_#175CD326] md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto xl:col-span-1 xl:justify-self-auto  col-span-1 justify-self-auto'
            style={{
              background:
                'linear-gradient(195.05deg, rgba(18, 81, 179, 0.1) 0%, rgba(18, 81, 179, 0.4) 50%, rgba(18, 81, 179, 0.06) 100%)'
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <img src='/Images/pricing/enterprise.svg' alt='' />
              <p
                className='px-[14.4px] py-[7.2px] rounded-[999px] bg-[linear-gradient(195.05deg,rgba(18,81,179,0.1)_0%,rgba(18,81,179,0.4)_50%,rgba(18,81,179,0.06)_100%)] text-[12.2px]'
                style={{
                  fontFamily: 'Space Grotesk_Bold'
                }}
              >
                ✦ To Scale your Business
              </p>
            </div>
            <p
              className='mt-[21.6px] mb-[21.6px] text-[25.2px] text-white text-left'
              style={{
                fontFamily: 'Space Grotesk_Medium'
              }}
            >
              Entreprise
            </p>
            <div className='mb-[40px] flex flex-col items-start gap-[7.2px]'>
              <p
                className='text-[30px] md:text-[38px] lg:text-[43.3px]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                € 49,99
                <span
                  className='text-[#9AA4B2] text-[14.4px] leading-[150%] ml-[8px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  /month
                </span>
              </p>

              <p
                className='text-white text-[12.6px] opacity-70'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Billed Yearly €399,99
              </p>
            </div>

            <button
              class='
            text-[16px]
   [background:linear-gradient(var(--Colors-Blue-700,#175CD3),var(--Colors-Blue-700,#175CD3))_padding-box,linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_border-box]
    border-2 border-transparent
    shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner)_inset,0px_0px_0px_1px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border)_inset]
    text-white
    px-[20px] py-[16px] rounded-[999px]
  '
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Start with Entreprise Plan
            </button>

            <div className='mt-[40px] flex flex-col items-start gap-[26px]'>
              <p
                className='text-[14.4px] leading-[21px] text-[#ffffff]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Everything included in Creator, plus:
              </p>

              <div className=' flex flex-col items-start gap-[10.8px]'>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Extended license{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                      (digital advertising, TV, cinema, hotels, events, apps)
                    </span>
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Multi-client & multi-channel
                  </p>
                </div>
                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Dedicated support & priority assistance
                  </p>
                </div>

                <div className='flex items-center gap-[7.2px]'>
                  <img src='/Images/pricing/tick.svg' alt='' />
                  <p
                    className='text-[#ffffff] text-[15px] leading-[21px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Early access{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Light' }}>
                      {' '}
                      to new releases & premium features
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
