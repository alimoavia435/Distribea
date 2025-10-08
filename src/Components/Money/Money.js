// app/components/Features.tsx
import Image from 'next/image'

export default function Money () {
  return (
    <section className='bg-no-repeat text-white px-4 sm:px-6 lg:px-[56px] pt-[90px] pb-[70px] lg:pt-[128px] lg:pb-[96px]'>
      <div className='mx-auto max-w-[1328px] flex flex-col gap-[60px] md:gap-20'>
        {/* Block 1 */}
        <div className='flex flex-col-reverse   xl:flex-row-reverse items-center gap-6 lg:gap-20'>
          <div className='flex-1 w-full max-w-[576px] mx-auto'>
            <Image
              src='/Images/mine/i1.webp'
              alt='Handshake'
              width={576}
              height={512}
              className='rounded-[12px] object-cover w-full h-auto'
            />
          </div>
          <div className='mb-[20px] md-mb-[0px] flex flex-col items-center justify-center space-y-[0px] md:space-y-[40px] text-center w-full max-w-[650px] mx-auto'>
            <h2
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center'
            >
              Unlimited Music You Can Trust
            </h2>
            <p
              className='mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left'
              style={{ fontFamily: 'Space Grotesk', textAlign: 'center' }}
            >
              No copyright strikes, no takedowns, no stress. Every track is 100%
              cleared for commercial use, so your videos stay online and your
              revenue stays safe. Whether you’re a creator, brand, or studio,
              you can publish with confidence.
            </p>
            <button
              className='mt-6 w-full md:w-[290px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Explore the music library
            </button>
          </div>
        </div>

        {/* Block 2 */}
        <div className='flex flex-col xl:flex-row-reverse items-center gap-6 md:gap-20'>
          <div className='mb-[20px] md-mb-[0px] flex flex-col items-center justify-center space-y-[0px] md:space-y-[40px] text-center w-full max-w-[650px] mx-auto'>
            <h2
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center'
            >
              Sound That Elevates Your Story
            </h2>
            <p
              className='mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left'
              style={{ fontFamily: 'Space Grotesk', textAlign: 'center' }}
            >
              The right soundtrack makes your content unforgettable. Our royalty
              free music is crafted to grab attention, keep audiences watching,
              and spark stronger emotions. More retention means more views,
              shares, and long-term growth for your channel.
            </p>
            <button
              className='mt-6 w-full md:w-[290px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Make your story unforgettable
            </button>
          </div>
          <div className='flex-1 w-full max-w-[576px] mx-auto'>
            <Image
              src='/Images/mine/i2.webp'
              alt='Handshake'
              width={576}
              height={512}
              className='rounded-[12px] object-cover w-full h-auto'
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className='flex flex-col   xl:flex-row items-center gap-6 lg:gap-20'>
          <div className='mb-[20px] md-mb-[0px] flex flex-col items-center justify-center space-y-[0px] md:space-y-[40px] text-center w-full max-w-[650px] mx-auto'>
            <h2
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center'
            >
              Revenue That Stays Yours
            </h2>
            <p
              className='mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left'
              style={{ fontFamily: 'Space Grotesk', textAlign: 'center' }}
            >
              Why share your earnings when you don’t have to? With a one-time
              license, you can use tracks forever without paying extra
              royalties. Your profit stays yours, so you can reinvest in your
              creativity and scale your projects faster.
            </p>
            <button
              className='mt-6 w-full md:w-[245px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Grow your projects faster
            </button>
          </div>
          <div className='flex-1 w-full max-w-[576px] mx-auto'>
            <Image
              src='/Images/mine/i3.webp'
              alt='Handshake'
              width={576}
              height={512}
              className='rounded-[12px] object-cover w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
