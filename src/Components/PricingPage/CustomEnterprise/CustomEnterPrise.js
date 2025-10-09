import Image from 'next/image'
import React from 'react'

const CustomEnterPrise = () => {
  return (
    <div className='mx-auto my-[40px] md:my-[70px] lg:my-[128px] max-w-[1260px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-[30px]'>
        {/* Left: Image */}
        <div className='w-full flex justify-center lg:justify-start'>
          <Image
            src='/Images/pricing/customleft.webp'
            alt='Professional talking on phone at desk'
            className='w-full h-auto rounded-[24px] max-w-[540px] max-h-[565px]'
            height={565}
            width={540}
          />
        </div>

        {/* Right: Content */}
        <div className='text-white'>
          <h2
            className='text-[23px] md:text-[26px] lg:text-[32px]  tracking-[-2px]'
            style={{ fontFamily: 'Space Grotesk_Semibold' }}
          >
            Custom & Enterprise – On request
          </h2>

          <p
            className='mt-5 text-[14px] md:text-[16px] text-[#FAFAFACC] leading-[140%]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            For clients who need an exclusive catalog, available in large
            volumes and accessible only to their brand or organization. <br/>This
            offer is ideal for:
          </p>

          <ul
            className='mt-[25px] md:mt-[48px] ml-[20px] space-y-4 text-[14px] md:text-[16px]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            <li className='flex items-start gap-3'>
              <Image
                src='/Images/pricing/ti.svg'
                alt='dfghgj'
                width={24}
                height={24}
              />
              <span className='text-[#E5E7EB]'>
                Companies seeking a dedicated private library.
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <Image
                src='/Images/pricing/ti.svg'
                alt='dfghgj'
                width={24}
                height={24}
              />

              <span className='text-[#E5E7EB]'>
                Projects requiring thousands of specific tracks.
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <Image
                src='/Images/pricing/ti.svg'
                alt='dfghgj'
                width={24}
                height={24}
              />

              <span className='text-[#E5E7EB]'>
                Use cases where access must remain restricted and controlled.
              </span>
            </li>
          </ul>

          <p
           className='mt-5 text-[14px] md:text-[16px] text-[#FAFAFACC] leading-[140%]'
           style={{ fontFamily: 'Space Grotesk' }}
          >
            🧾 Contact our Sales team to define your requirements and receive a
            tailored proposal.
          </p>

          <div className='mt-8'>
            <a
              href='#contact-sales'
              className='inline-flex items-center justify-center rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors text-white px-6 sm:px-7 py-3 sm:py-3.5 text-[16px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomEnterPrise
