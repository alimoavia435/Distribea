import React from 'react'

const Pricing = () => {
  return (
    <section className='text-white w-full px-[24px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[120px] py-[48px] md:py-[64px] lg:py-[80px] xl:py-[96px]'>
      {/* Heading */}
      <div className='flex flex-col items-center text-center mb-[28px] md:mb-[36px] lg:mb-[48px]'>
        <h2
          className='text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]'
          style={{ fontFamily: 'Space Grotesk_Bold' }}
        >
          Pricing
        </h2>
        <p
          className='mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9AA4B2] max-w-[680px]'
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Whether you&apos;re just starting or scaling, we have a plan for you.
        </p>
        {/* Toggle */}
        <div className='mt-[18px] flex items-center gap-[10px]'>
          <span
            className='text-[13px] md:text-[14px] text-[#9AA4B2]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            Monthly
          </span>
          {/* decorative switch only */}
          <div className='relative w-[56px] h-[28px] rounded-full bg-[#0E1220] border border-[rgba(55,58,65,0.4)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]'>
            <div className='absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-gradient-to-b from-[#317CF2] to-[#296EDB]' />
          </div>
          <span
            className='text-[13px] md:text-[14px]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            Annually
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-[18px] md:gap-[22px] lg:gap-[28px] max-w-[1200px]'>
        {/* Free */}
        <div className='relative rounded-[22px] bg-[linear-gradient(180deg,#0B0F1A_0%,#0B0F1A_100%)]/cover border border-[rgba(55,58,65,0.35)] px-[22px] sm:px-[26px] py-[26px] md:py-[30px] min-h-[520px] flex flex-col'>
          <div className='absolute right-[16px] top-[16px]'>
            <div className='flex items-center gap-[6px] rounded-full bg-[rgba(12,14,18,0.6)] border border-[rgba(55,58,65,0.35)] px-[10px] py-[6px]'>
              <img
                src='/Images/bluebutton.svg'
                alt=''
                className='w-[14px] h-[14px]'
              />
              <span
                className='text-[11px]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Try-it
              </span>
            </div>
          </div>
          <div className='flex items-center gap-[10px] mb-[18px]'>
            <div className='w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#3E93FF] to-[#2257C5]' />
            <h3
              className='text-[20px]'
              style={{ fontFamily: 'Space Grotesk_Semibold' }}
            >
              Free
            </h3>
          </div>
          <div className='mb-[8px] flex items-end gap-[6px]'>
            <span
              className='text-[34px] md:text-[38px] lg:text-[42px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              € 0
            </span>
            <span
              className='text-[#9AA4B2] mb-[6px] text-[13px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              /month
            </span>
          </div>
          <p
            className='text-[#9AA4B2] text-[12px] mb-[18px]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Lifetime Free
          </p>
          <button
            className='rounded-full bg-[#2B5BD7] hover:bg-[#2b5bd7]/90 transition-colors text-white w-full py-[14px] text-[14px] mb-[22px]'
            style={{ fontFamily: 'Space Grotesk_Semibold' }}
          >
            Start with Free Plan
          </button>
          <div className='mt-auto'>
            <p
              className='text-[12px] text-[#9AA4B2] mb-[10px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              What you will get
            </p>
            <ul className='space-y-[10px]'>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  3 downloads/month
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Unlimited streaming
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Personal use only
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Creator - highlighted */}
        <div className='relative rounded-[26px] bg-[linear-gradient(180deg,rgba(14,17,29,0.9)_0%,rgba(10,14,26,0.9)_100%)] border border-[#1C3A7A] shadow-[0_0_0_1px_rgba(41,110,219,0.25),0_30px_60px_-15px_rgba(41,110,219,0.45)] px-[22px] sm:px-[28px] py-[30px] md:py-[36px] min-h-[560px] flex flex-col'>
          <div className='absolute right-[16px] top-[16px]'>
            <div className='flex items-center gap-[6px] rounded-full bg-[rgba(12,14,18,0.6)] border border-[rgba(55,58,65,0.35)] px-[10px] py-[6px]'>
              <img
                src='/Images/bluebutton.svg'
                alt=''
                className='w-[14px] h-[14px]'
              />
              <span
                className='text-[11px]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Popular
              </span>
            </div>
          </div>
          <div className='flex items-center gap-[10px] mb-[18px]'>
            <div className='w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#3E93FF] to-[#2257C5]' />
            <h3
              className='text-[20px]'
              style={{ fontFamily: 'Space Grotesk_Semibold' }}
            >
              Creator
            </h3>
          </div>
          <div className='mb-[8px] flex items-end gap-[6px]'>
            <span
              className='text-[34px] md:text-[38px] lg:text-[42px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              € 5,99
            </span>
            <span
              className='text-[#9AA4B2] mb-[6px] text-[13px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              /month
            </span>
          </div>
          <p
            className='text-[#9AA4B2] text-[12px] mb-[18px]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Billed Yearly €24,99
          </p>
          <button
            className='rounded-full bg-[#2B5BD7] hover:bg-[#2b5bd7]/90 transition-colors text-white w-full py-[14px] text-[14px] mb-[22px]'
            style={{ fontFamily: 'Space Grotesk_Semibold' }}
          >
            Start with Creator Plan
          </button>
          <div className='mt-auto'>
            <p
              className='text-[12px] text-[#9AA4B2] mb-[10px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Everything included in Free, plus:
            </p>
            <ul className='space-y-[10px]'>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Unlimited downloads
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Commercial license (YouTube, TikTok, Twitch, podcasts)
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Monetization (1 channel per platform)
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Lifetime usage of downloaded music
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise */}
        <div className='relative rounded-[22px] bg-[linear-gradient(180deg,#0B0F1A_0%,#0B0F1A_100%)]/cover border border-[rgba(55,58,65,0.35)] px-[22px] sm:px-[26px] py-[26px] md:py-[30px] min-h-[520px] flex flex-col'>
          <div className='absolute right-[16px] top-[16px]'>
            <div className='flex items-center gap-[6px] rounded-full bg-[rgba(12,14,18,0.6)] border border-[rgba(55,58,65,0.35)] px-[10px] py-[6px]'>
              <img
                src='/Images/bluebutton.svg'
                alt=''
                className='w-[14px] h-[14px]'
              />
              <span
                className='text-[11px]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                To Scale your Business
              </span>
            </div>
          </div>
          <div className='flex items-center gap-[10px] mb-[18px]'>
            <div className='w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#3E93FF] to-[#2257C5]' />
            <h3
              className='text-[20px]'
              style={{ fontFamily: 'Space Grotesk_Semibold' }}
            >
              Entreprise
            </h3>
          </div>
          <div className='mb-[8px] flex items-end gap-[6px]'>
            <span
              className='text-[34px] md:text-[38px] lg:text-[42px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              € 49,99
            </span>
            <span
              className='text-[#9AA4B2] mb-[6px] text-[13px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              /month
            </span>
          </div>
          <p
            className='text-[#9AA4B2] text-[12px] mb-[18px]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Billed Yearly €399,99
          </p>
          <button
            className='rounded-full bg-[#2B5BD7] hover:bg-[#2b5bd7]/90 transition-colors text-white w-full py-[14px] text-[14px] mb-[22px]'
            style={{ fontFamily: 'Space Grotesk_Semibold' }}
          >
            Start with Entreprise Plan
          </button>
          <div className='mt-auto'>
            <p
              className='text-[12px] text-[#9AA4B2] mb-[10px]'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Everything included in Creator, plus:
            </p>
            <ul className='space-y-[10px]'>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Extended license (digital advertising, TV, cinema, hotels,
                  events, apps)
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Multi-client & multi-channel
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Dedicated support & priority assistance
                </span>
              </li>
              <li className='flex items-start gap-[10px] text-[14px]'>
                <span className='text-[#4AA8FF] mt-[1px]'>✓</span>
                <span style={{ fontFamily: 'Space Grotesk' }}>
                  Early access to new releases & premium features
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
