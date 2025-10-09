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
    
    </div>
  )
}

export default United
