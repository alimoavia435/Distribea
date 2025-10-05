// app/components/Categories.tsx (or inside your pages folder if using /pages)
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const categories = [
  { title: 'Gaming', img: '/Images/mine/n1.webp' },
  { title: 'Vlogs', img: '/Images/mine/n2.webp' },
  { title: 'Storytelling', img: '/Images/mine/n3.webp' },
  { title: 'Challenges', img: '/Images/mine/n4.webp' },
  { title: 'Tutorials', img: '/Images/mine/n5.webp' },
  { title: 'Hip-Hop', img: '/Images/mine/n6.webp' },
  { title: 'Trap', img: '/Images/mine/n7.webp' },
  { title: 'Techno', img: '/Images/mine/n8.webp' },
  { title: 'Jazz', img: '/Images/mine/n9.webp' },
  { title: 'Ambient', img: '/Images/mine/n10.webp' },
  { title: 'Home', img: '/Images/mine/n11.webp' },
  { title: 'Pets', img: '/Images/mine/n12.webp' },
  { title: 'Business', img: '/Images/mine/n13.webp' },
  { title: 'Fitness', img: '/Images/mine/n14.webp' },
  { title: 'Tech', img: '/Images/mine/n15.webp' }
]
const gradients = [
  'linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(209, 160, 65, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(245, 218, 94, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(132, 57, 9, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(246, 211, 142, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(248, 178, 188, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(149, 183, 183, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(43, 90, 147, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(254, 199, 97, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(111, 202, 184, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(2, 96, 96, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(143, 185, 174, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)',
  'linear-gradient(179.71deg, rgba(252, 135, 148, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)'
]

export default function CardCategories () {
    const router = useRouter()
  return (
    <div className='relative overflow-hidden'>
      <img
        src='/Images/pricing/shadpricing.png'
        alt='pricing-bg'
        className='h-[700px] w-[700px] absolute top-[60px] right-[-190px] 2xl:right-[-190px] max-[1000px]:top[-70px]'
      />
      <section
        className='bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[72px] lg:py-[80px]   /* large screens */
    xl:px-[115px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
      >
        {/* Heading */}
        <div className='text-center max-w-3xl  w-auto mx-auto '>
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
  text-[#F7F7F7] m-[25px] lg:mb-24'
          >
            Browse through 100+ exclusive styles
          </h2>
          <p
            className='flex items-center justify-center gap-2  max-[600px]:text-center text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            🎬 Get the right music for your creation
          </p>
          <p
            className='text-sm mt-3  max-[600px]:text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Not just background sound. [Your brand] turns every project into a
            signature experience.
          </p>
        </div>

        {/* Grid */}
        <div
          className='
  !grid 
  grid-cols-1              /* default => <360px */
  min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
  md:!grid-cols-3
  lg:!grid-cols-4
  xl:!grid-cols-5
  !gap-2 lg:!gap-6 
  max-w-[1210px] mx-auto w-full
'
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: '17.93px',
                background: gradients[index % gradients.length] // cycle through gradients
              }}
              className='relative flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[293.58px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer '
                  onClick={() =>
                    router.push(
                      `/TracksDetails?title=${encodeURIComponent(
                        cat.title
                      )}&image=${encodeURIComponent(
                        cat.img
                      )}&section=Entertainment`
                    )
                  }
            >
              <div className='w-full h-[200px] sm:h-[227px] overflow-hidden rounded-t-[17.93px]'>
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className='w-full h-full object-cover'
                />
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk_Medium'
                }}
                className='flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]'
              >
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
