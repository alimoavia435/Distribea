import React from 'react'
import Image from 'next/image'
const United = () => {
      const categories = [
    { title: 'Marc Lefevre', name: 'CEO & Founder', img: '/Images/bluebrand/person1.webp' },
    { title: 'Alice Tremblay', name: 'CTO & Co-Founder', img: '/Images/bluebrand/person2.webp' },
    { title: 'Lucas Bernard', name: 'Marketing Director', img: '/Images/bluebrand/person3.webp' },
    { title: 'Sophie Martin', name: 'Lead Designer',img: '/Images/bluebrand/person4.webp' },
    { title: 'Julien Dubois', name: 'Product Manager', img: '/Images/bluebrand/person5.webp' },
  ]
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


           <section className='relative bg-no-repeat text-white px-4 sm:px-6 lg:px-[56px] pt-[90px]  lg:pt-[128px]  '   style={{
         
          }}
       >
   {/* Background image (absolute for precision) */}
  <img
    src="/Images/Creators/createleft.png"
    alt="bg"
    className="absolute -left-[4%] -top-[17%] w-auto max-w-none pointer-events-none select-none"
  />
              <div className='relative z-0 mx-auto max-w-[1328px] flex flex-col gap-[60px] md:gap-46'>
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
                  <div className='mb-[20px] md-mb-[0px] flex flex-col items-start justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[650px] mx-auto'>
               <div className="flex flex-col !items-start justify-center gap-[12px]">
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
                    <div className='mb-[20px] md-mb-[0px] flex flex-col !items-start justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[650px] mx-auto'>
               <div className="flex flex-col !items-start justify-center gap-[12px]">
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
    pt-[90px] sm:pt-[120px] md:pt-[284px] 
    pb-[60px] sm:pb-[120px] md:pb-[252px]
    flex items-center justify-center 
   bg-no-repeat bg-center bg-cover
    [@media(min-width:1440px)]:bg-contain
  "
          style={{ backgroundImage: "url('/Images/bluebrand/gradient.png')",backgroundPosition:"center" }}
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


        {/* ....... */}
           <section className='bg-no-repeat text-white px-4 sm:px-6 lg:px-[56px]  pb-[70px]  lg:pb-[200px]'>
  <div className='mx-auto max-w-[1328px] flex flex-col gap-[30px] md:gap-16'>
     <h2
            style={{
              fontFamily: 'Space Grotesk_Bold',
              textTransform: 'capitalize'
            }}
            className='font-Space Grotesk_Bold 
  font-bold 
text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[56px]  
  leading-[110%] 
  tracking-[-1px] 
  text-center 
  text-[#F7F7F7] m-0'
          >
            Our Teams
          </h2>
{/* .... */}

     {/* Grid */}
            <div
              className='
  !grid 
  grid-cols-1              /* default => <360px */
  min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
  md:!grid-cols-3
  lg:!grid-cols-4
  xl:!grid-cols-5
  !gap-2 lg:!gap-5 
  max-w-[1328px] mx-auto w-full
'
            >
              {categories?.map((cat, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '24px',
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#0C0E12'
                  }}
                  className='flex !flex-col !w-auto !h-[280.58px] 
                 sm:!h-[350.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden px-4 pt-4  '
                >
               <div className='!w-full !h-[240px] sm:!h-[240px] overflow-hidden rounded-[12px] mb-2 sm:mb-6 '>
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      width={216}
                      height={240}
                      className='w-full h-full object-cover rounded-[12px]'
                    />
                  </div>
         

                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='!flex-1 !flex !items-center   !font-medium !text-[18px] lg:!text-[20px] !pb-[2px] sm:pb-6  '
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='text-[#F9F9F9] opacity-70 flex-1 flex items-center   font-medium text-[11px] lg:text-[12px] mb-[8px] sm:mb-6  '
                  >
                    {cat.name}
                  </div>

        
                </div>
              ))}
            </div>

{/* .... */}
  </div>

           </section>

{/* ..... */}
   <section
        className='
    relative w-full flex justify-center 
    pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[64px]
    px-[25] md:px-[40px]
  '
      >
        {/* Background Image */}
        <div
          className='relative w-full max-w-[1328px] bg-cover bg-center rounded-[32px] overflow-hidden'
          style={{
            backgroundImage: "url('/Images/mine/comp.png')" // replace with your image
          }}
        >
          {/* Overlay for readability */}
          <div className='w-full h-full bg-black/40 flex items-center justify-center'>
            <div
              className='
    flex flex-col items-center text-center
    px-4 py-12       /* mobile */
    sm:px-8 sm:py-16 /* small devices */
    md:px-16 md:py-20 /* tablets */
    lg:px-24 lg:py-28 /* laptops */
    xl:px-[178.5px] xl:py-[178.5px] /* desktops, your exact spec */
  '
            >
              {/* Text */}

              <p
                className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[700] text-[#F7F7F7] tracking-0 leading-[110%] w-full max-w-[800.45px] '
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Ready to explore the ultimate royalty-free music library, crafted for creators.
              </p>
              {/* Gap */}
              <div className='h-[48px]' />

              {/* Buttons */}
        <div className='flex gap-3  max-[400px]:flex-col'>
                <button
                  style={{
                    fontFamily: 'Space Grotesk_Bold',
                    textTransform: 'capitalize'
                  }}
                  className='
    w-[138px] h-[52px] 
    rounded-full 
    border-2 border-transparent 
    bg-[#F7F7F7] 
    shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
    text-[#414651] font-bold text-md leading-md
    flex items-center justify-center
    transition-all hover:bg-[#e5e7eb]
  '
                >
                  Our Pricing
                </button>

                <button
                  style={{
                    fontFamily: 'Space Grotesk_Bold',
                    textTransform: 'capitalize'
                  }}
                  className='
    w-[160px] h-[52px] 
    rounded-full 
    border-2 border-transparent 
    bg-[#175CD3] 
    shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
    text-white font-bold text-md leading-md
    flex items-center justify-center
    transition-all hover:bg-[#154ab8]
  '
                >
                  Start For Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default United
