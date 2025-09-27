// components/Footer.tsx
import Image from 'next/image'

export default function Footer () {
  return (
    <footer
      style={{
        backgroundImage: "url('/Images/mine/FOOTERc.png')",
        backgroundSize: '100% 100%'
      }}
      className='bg-no-repeat text-white px-[18px] py-16 lg:px-[56px] lg:pt-[96px] lg:pb-[32px] flex justify-center'
    >
      <div className='mx-0 w-full '>
        {/* Top Section */}
        <div className='flex !flex-col !md:flex-row !md:items-start !md:justify-between !gap-5 !md:gap-[48px] max-w-[1328px]'>
          {/* Logo + tagline */}
          <div className='flex flex-col space-y-4 max-w-sm'>
            {/* Logo */}
            <div className='flex items-center space-x-1 lg:space-x-3'>
              <Image
                src='/Images/logomiddle.svg' // replace with your logo
                alt='Distribea Logo'
                width={79}
                height={80}
                className='max-[60px]:h-[70px]  lg:max-[79px]:h-[80px] lg:h-[79px]:w-[80px]  h-[60px] w-[70px] '
              />

              <h2
                className='
    font-bold 
    text-[#F7F7F7] 
    text-[40px] 
    md:text-[56px] 
    lg:text-[64px] 
    leading-[110%] 
    tracking-[-3px] 
    text-center
  '
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Distribea
              </h2>
            </div>
            <p
              style={{ fontFamily: 'Space Grotesk' }}
              className="font-['Space_Grotesk'] font-normal text-[18px] leading-[140%] tracking-[-0.03em] text-[#CECFD2] mb-6 md:mb-10"
            >
              Music That Moves Your Story
            </p>

            {/* Social Icons */}
            <div className='flex space-x-6 '>
              <div>
                <Image
                  src='/Images/mine/x.svg'
                  alt='X'
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <Image
                  src='/Images/mine/instagram.svg'
                  alt='Instagram'
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <Image
                  src='/Images/mine/linkedin.svg'
                  alt='LinkedIn'
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <Image
                  src='/Images/mine/youtube.svg'
                  alt='YouTube'
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className='w-full max-w-[1328px]  border-b border-[#0B1425] opacity-100 mx-auto'></div>

          {/* Links */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 lg:gap-24 text-sm'>
            {/* Pages */}
            <div>
              <h3
                className='
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  '
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Pages
              </h3>

              <ul className='space-y-[8px] sm:space-y-3'>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Get Started
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Music Platforms
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Pricing
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    About Us
                  </div>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3
                className='
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  '
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Resources
              </h3>
              <ul className='space-y-[8px] sm:space-y-3'>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Creators
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Gaming
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    In-Store
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Licences
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Ads & Branding
                  </div>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3
                className='
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  '
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Support
              </h3>
              <ul className='space-y-[8px] sm:space-y-3'>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Contact Us
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    LiveChat
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    FAQs
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Blogs
                  </div>
                </li>
              </ul>
            </div>

            {/* Legals */}
            <div>
              <h3
                className='
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  '
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Legals
              </h3>
              <ul className='space-y-[8px] sm:space-y-3'>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Terms & Conditions
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Privacy & Policy
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontFamily: 'Space Grotesk' }}
                    className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline cursor-pointer"
                  >
                    Anti-Fraud
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full max-w-[1328px]  border-b border-[#0B1425] opacity-100 mx-auto'></div>
        </div>

        {/* Bottom  */}

        <div
          className="mt-12 font-['Space_Grotesk'] font-normal text-sm leading-6 tracking-[0%] text-[#94979C]"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          © 2025{' '}
          <span
            style={{ fontFamily: 'Space Grotesk_Bold' }}
            className="font-['Space_Grotesk'] font-bold text-sm leading-6 tracking-[0%] text-[#94979C]"
          >
            Distribea
          </span>
        </div>
      </div>
    </footer>
  )
}
