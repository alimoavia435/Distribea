import React from 'react'
import Image from 'next/image'
const United = () => {
  return (
    <div>
    <div className='py-[50px] md:py-[80px] lg:py-[100px] xl:py-[96px]  flex flex-col items-center gap-[40] lg:gap-[60] xl:gap-[80px] max-w-[820px] mx-auto'>
      <div className=' flex flex-col items-center gap-[18px] xl:gap-[24px]  px-[15px]'>
        <p
          className='text-[35px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[72px] leading-[140%] tracking-[-1.44px] text-[#ffffff] text-center'
          style={{ fontFamily: 'Space Grotesk_Medium' }}
        >
          United by Music, Connected Everywhere
        </p>
        <p
          className='text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#CECFD2] text-center'
          style={{ fontFamily: 'Space Grotesk' }}
        >
          No matter where you are, we create together to inspire and impact the world.
        </p>
      </div>

    </div>

  <section className="w-full flex justify-center px-4">
  <div className="w-full max-w-[1400px] rounded-[30px] overflow-hidden">
    <Image
      src="/Images/bluebrand/bluebrand.webp"
      alt="Blue Brand"
      width={1400}
      height={600}
      className="w-full h-auto object-cover rounded-[30px]"
    />
  </div>
</section>
{/* ... */}

<div
  className="
    flex flex-col items-center justify-center 
    max-w-[1440px] mx-auto 
    w-full
    gap-4 sm:gap-6 md:gap-8       /* smaller gap on small screens */
    px-4 sm:px-6 md:px-12 lg:px-[80px]  /* balanced padding */
    pt-8 sm:pt-10 md:pt-[48px] 
    pb-16 sm:pb-20 md:pb-[96px]
  "
>
  {/* Your content here */}
   <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px]"
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
    We’ve been mentioned in the press
  </p>


  {/* Logos container */}
  <div
    className="
      flex flex-wrap justify-center items-center 
      gap-8 mt-8 w-full max-w-[1440px]
    "
  >
    {/* Image 1 */}
    <Image
      src="/Images/bluebrand/presslogo1.webp"
      alt="Press 1"
      width={274}
      height={40}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[274px] h-auto object-contain"
    />

    {/* Image 2 */}
    <Image
      src="/Images/bluebrand/presslogo2.webp"
      alt="Press 2"
      width={238}
      height={40}
      className="w-[140px] sm:w-[180px] md:w-[210px] lg:w-[238px] h-auto object-contain"
    />

    {/* Image 3 */}
    <Image
      src="/Images/bluebrand/presslogo3.webp"
      alt="Press 3"
      width={180}
      height={33}
      className="w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain"
    />

    {/* Image 4 */}
    <Image
      src="/Images/bluebrand/presslogo4.webp"
      alt="Press 4"
      width={165}
      height={40}
      className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[165px] h-auto object-contain"
    />

    {/* Image 5 */}
    <Image
      src="/Images/bluebrand/presslogo5.webp"
      alt="Press 5"
      width={115}
      height={40}
      className="w-[80px] sm:w-[100px] md:w-[110px] lg:w-[115px] h-auto object-contain"
    />
  </div>



</div>
{/* ....... */}
       <div
          className='px-[25px] pt-[90px] sm:pt-[120px] md:pt-[160px] pb-[60px] sm:pb-[80px] md:pb-[96px]   flex flex-col items-center gap-[48px] bg-no-repeat max-[768px]:pt-[90px] max-[768px]:pb-[60px] max-[768px]:gap-[28px]'
          style={{ backgroundImage: "url('/Images/shadevery.png')",backgroundPosition:"center" }}
        >
       <Image 
  src="/Images/bluebrand/circle.webp" 
  alt="Distribea Logo" 
  width={336}
  height={340}
  className="
    w-[180px] sm:w-[240px] md:w-[300px] lg:w-[336px] 
    h-auto 
    object-contain
  "
  priority
/>

    
          <h2
            style={{
              fontFamily: 'Space Grotesk_Bold',
              textTransform: 'capitalize'
            }}
            className='font-Space Grotesk_Bold 
      font-bold 
    text-[31px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[56px] 
      leading-[110%] 
      tracking-[-1px] 
      text-center 
      text-[#F7F7F7] 
      mb-5 '
          >
            Empowering Creators, <br /> Everywhere
          </h2>
<div
  className="
    flex flex-col items-center justify-center 
    w-full max-w-[834px]
    gap-[16px] sm:gap-[24px] md:gap-[40px]
  "
>
  {/* Your content here */}
   <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px]"
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
    We are more than a music distribution company — we are a creative partner. Our mission is to provide creators with high-quality, accessible music that inspires, elevates, and connects audiences worldwide. 
  </p>
   <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px]"
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
    Whether you’re sharing on YouTube, Instagram, TikTok, or producing professional projects, our platform ensures you have the right soundtrack to amplify your vision.
  </p>
</div>





        </div>
        {/* .......... */}


           <section className='bg-no-repeat text-white px-4 sm:px-6 lg:px-[56px] pt-[90px] pb-[70px] lg:pt-[128px] lg:pb-[124px]'>
              <div className='mx-auto max-w-[1328px] flex flex-col gap-[60px] md:gap-46'>
                {/* Block 1 */}
                <div className='flex flex-col-reverse   xl:flex-row-reverse  gap-6 lg:gap-20'>
                  <div className='flex-1 w-full max-w-[576px] mx-auto'>
                    <Image
                      src='/Images/bluebrand/girl1.webp'
                      alt='Handshake'
                      width={576}
                      height={512}
                      className='rounded-[12px] object-cover w-full h-auto'
                    />
                  </div>
                  <div className='mb-[20px] md-mb-[0px] flex flex-col items-center justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[650px] mx-auto'>
               <div className="flex flex-col items-center justify-center gap-[12px]">
                     <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ]  tracking-[0.5px]"
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
    Our Mission
  </p>
                    <h2
                      style={{ fontFamily: 'Space Grotesk_Bold' }}
                      className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] '
                    >
                      Empower Creators <br/> efficiently
                    </h2>
                    </div>
                    <p
                      className='mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  md:text-left'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                    Our mission is to empower creators by giving them unlimited access to high-quality, royalty-free music that elevates their work. We believe that every idea deserves the right soundtrack, whether it’s a short social video, a professional production, or a global campaign. By simplifying access to inspiring music, we help creators save time, focus on their craft, and connect with their audiences in meaningful ways.
                    </p>
             
                  </div>
                </div>
        
                {/* Block 2 */}
                <div className='flex flex-col xl:flex-row-reverse items-center gap-6 md:gap-20'>
                    <div className='mb-[20px] md-mb-[0px] flex flex-col items-center justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[650px] mx-auto'>
               <div className="flex flex-col items-center justify-center gap-[12px]">
                     <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ]  tracking-[0.5px]"
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
    Our Vision
  </p>
                    <h2
                      style={{ fontFamily: 'Space Grotesk_Bold' }}
                      className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] '
                    >
                      Impact Through Music
                    </h2>
                    </div>
                    <p
                      className='mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  md:text-left'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                  Our vision is a world where music is not a barrier but a bridge. We aim to create a global platform where creators from every background can find the sounds they need to share their stories, inspire communities, and leave a lasting mark. By making music accessible, versatile, and tailored to modern creators, we aspire to shape a future where creativity knows no borders.</p>
             
                  </div>
                  <div className='flex-1 w-full max-w-[576px] mx-auto'>
                    <Image
                   src='/Images/bluebrand/girl2.webp'
                      alt='Handshake'
                      width={576}
                      height={512}
                      className='rounded-[12px] object-cover w-full h-auto'
                    />
                  </div>
                </div>
    
              </div>
            </section>

            {/* ........ */}
               <div
  className="
    px-[25px] 
    pt-[90px] sm:pt-[120px] md:pt-[160px] 
    pb-[60px] sm:pb-[80px] md:pb-[124px]
    flex items-center justify-center 
    bg-no-repeat bg-center bg-cover
  "
          style={{ backgroundImage: "url('/Images/bluebrand/gradient_1x.webp')",backgroundPosition:"center" }}
        >
<div
  className="
    flex flex-wrap justify-center items-center
    w-full max-w-[1280px] mx-auto
    gap-[24px] sm:gap-[32px]
  "
>
    {/* .....div 1 */}
  <div
  className="
    flex flex-col items-center justify-center 
    gap-[12px] 
    w-[240px] h-[112px] min-w-[240px]
  "
>
  {/* Your content here */}
     <h2
            style={{
              fontFamily: 'Space Grotesk_Medium',
              textTransform: 'capitalize'
            }}
            className='Space Grotesk_Medium
      font-bold 
    text-[31px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[56px] 
      leading-[110%] 
      tracking-[-1px] 
      text-center 
      text-[#F7F7F7]  '
          >
            +1M
          </h2>
           <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px] "
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
   Track Availlable
  </p>
</div>
    {/* .....div 2 */}
 <div
  className="
    flex flex-col items-center justify-center 
    gap-[12px] 
    w-[240px] h-[112px] min-w-[240px]
  "
>
  {/* Your content here */}
     <h2
            style={{
              fontFamily: 'Space Grotesk_Medium',
              textTransform: 'capitalize'
            }}
            className='Space Grotesk_Medium
      font-bold 
    text-[31px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[56px] 
      leading-[110%] 
      tracking-[-1px] 
      text-center 
      text-[#F7F7F7]  '
          >
           +217
          </h2>
           <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px] "
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
   Creators Subscribed
  </p>
</div>
  {/* .....div 3 */}
   <div
  className="
    flex flex-col items-center justify-center 
    gap-[12px] 
    w-[240px] h-[112px] min-w-[240px]
  "
>
  {/* Your content here */}
   <Image src="/Images/bluebrand/8.svg" alt='Distribea Logo' width={56} height={56} className='w-[56px] h-[56px] ' />
           <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px] "
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
   Unlimited Downloads
  </p>
</div>
 {/* .....div 4 */}
   <div
  className="
    flex flex-col items-center justify-center 
    gap-[12px] 
    w-[240px] h-[112px] min-w-[240px]
  "
>
  {/* Your content here */}
   <Image src="/Images/bluebrand/8.svg" alt='Distribea Logo' width={56} height={56} className='w-[56px] h-[56px] ' />
           <p
    className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] ] text-center tracking-[0.5px] "
    style={{ fontFamily: 'Space Grotesk_Medium' , color: 'var(--colors-text-text-tertiary-600, #94979C)' }}

  >
   Lifetime License
  </p>
</div>
</div>
        </div>
    </div>
  )
}

export default United
