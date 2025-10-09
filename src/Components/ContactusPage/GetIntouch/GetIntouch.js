import React from 'react'
import Image from 'next/image'

const GetIntouch = () => {
  return (
    <section className=' px-5 sm:px-6 lg:px-0 text-white'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:pr-[50px] xl:pr-[120px] gap-[70px] lg:gap-12'>
        {/* Left: Hero Image */}
        <div className='w-full flex justify-center lg:justify-start'>
          <Image
            src='/Images/contactus/getleft.webp'
            alt='Person on a phone, contact us'
            width={720}
            height={1065}
            className='w-full object-cover max-w-[720px] lg:min-w-[480px] max-h-[1065px]'
            priority
          />
        </div>

        {/* Right: Form */}
        <div className='w-full lg:max-w-[480px]'>
          <h2
            className='text-[#F7F7F7] text-[32px] md:text-[50px] lg:text-[64px] tracking-[-2px]'
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            Get In Touch
          </h2>
          <p
            className='mt-[5px] text-[15px] md:text-[18px] leading-[170%] text-[#94979C]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Our friendly team would love to hear from you.
          </p>

          <form className='mt-[32px] md:mt-[48px] space-y-5'>
            {/* Name */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Name <span className='text-[#7F56D9]'>*</span>
              </label>
              <input
                type='text'
                placeholder='your name'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Email <span className='text-[#7F56D9]'>*</span>
              </label>
              <input
                type='email'
                placeholder='you@company.com'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Project Type <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <select
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light' }}
                  defaultValue=''
                >
                  <option value="" disabled className='bg-[#FAFAFA14] text-[#717680]'>
                    Select a type..
                  </option>
                  <option className='bg-[#FAFAFA14] text-white'>Commercial</option>
                  <option className='bg-[#FAFAFA14] text-white'>Film/TV</option>
                  <option className='bg-[#FAFAFA14] text-white'>Game</option>
                  <option className='bg-[#FAFAFA14] text-white'>Other</option>
                </select>
                <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Desired number of tracks */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Desired number of tracks <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <select
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light' }}
                  defaultValue=''
                >
                  <option value="" disabled className='bg-[#FAFAFA14] text-[#717680]'>
                    1 - 10,000
                  </option>
                  <option className='bg-[#FAFAFA14] text-white'>1 - 100</option>
                  <option className='bg-[#FAFAFA14] text-white'>100 - 1,000</option>
                  <option className='bg-[#FAFAFA14] text-white'>1,000 - 10,000</option>
                  <option className='bg-[#FAFAFA14] text-white'>10,000+</option>
                </select>
                <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Deadline */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Deadline <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <select
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light' }}
                  defaultValue=''
                >
                  <option value="" disabled className='bg-[#FAFAFA14] text-[#717680]'>
                    Before 30 days
                  </option>
                  <option className='bg-[#FAFAFA14] text-white'>ASAP</option>
                  <option className='bg-[#FAFAFA14] text-white'>Within 2 weeks</option>
                  <option className='bg-[#FAFAFA14] text-white'>Within 30 days</option>
                  <option className='bg-[#FAFAFA14] text-white'>Flexible</option>
                </select>
                <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
               className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
               style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Message <span className='text-[#7F56D9]'>*</span>
              </label>
              <textarea
                rows={5}
                placeholder='Leave us a message...'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Terms */}
            <label className='flex items-start gap-3 text-[12px] md:text-[14px] text-[#9CA3AF]'>
              <input
                type='checkbox'
                className='mt-[3px] h-4 w-4 rounded border-[#374151] bg-[#121316] text-[#2563EB] focus:ring-0'
              />
              <span style={{ fontFamily: 'Space Grotesk' }}>
                You agree to our friendly{' '}
                <a href='/privacy' className='underline hover:text-white'>
                  privacy policy
                </a>
                .
              </span>
            </label>

            <button
              type='submit'
              className='w-full rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors text-white py-3 text-[16px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetIntouch
