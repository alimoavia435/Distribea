import Hero from '@/Components/Creators/Hero/Hero'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

const Creators = () => {
  const categories = [
    { title: 'Gaming', img: '/images/mine/n1.png' },
    { title: 'Vlogs', img: '/images/mine/n2.png' },
    { title: 'Reviews', img: '/Images/Creators/review.png' },
    { title: 'Animations', img: '/Images/Creators/animation.png' },
    { title: 'Storytelling', img: '/images/mine/n3.png' },
    { title: 'Challenges', img: '/images/mine/n4.png' },
    { title: 'Tutorials', img: '/Images/mine/n5.png' },
    { title: 'Podcasts', img: '/Images/Creators/pod.png' },
    { title: 'Short Films', img: '/Images/Creators/shortfilms.png' },
    { title: 'Live Streaming', img: '/Images/Creators/livestreaming.png' }

    // { title: 'Hip-Hop', img: '/images/mine/n6.png' },
    // { title: 'Trap', img: '/images/mine/n7.png' },
    // { title: 'Techno', img: '/images/mine/n8.png' },
    // { title: 'Jazz', img: '/images/mine/n9.png' },
    // { title: 'Ambient', img: '/images/mine/n10.png' },
    // { title: 'Home', img: '/images/mine/n11.png' },
    // { title: 'Pets', img: '/images/mine/n12.png' },
    // { title: 'Business', img: '/images/mine/n13.png' },
    // { title: 'Fitness', img: '/images/mine/n14.png' },
    // { title: 'Tech', img: '/images/mine/n15.png' }
  ]
  const categories1 = [
    { title: 'Tech', img: '/images/mine/n15.png' },
    { title: 'Business', img: '/images/mine/n13.png' },
    { title: 'Science', img: '/images/mine/n13.png' },
    { title: 'Finance', img: '/images/mine/n13.png' },
    { title: 'Productivity', img: '/images/mine/n13.png' },
    { title: 'History', img: '/images/mine/n13.png' },
    { title: 'Philosphy', img: '/images/mine/n13.png' },
    { title: 'Documentaries', img: '/images/mine/n13.png' },
    { title: 'Enterpreneurship', img: '/images/mine/n13.png' },
    { title: 'Career', img: '/images/mine/n13.png' }
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
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero.png')" }}
      className='bg-[0_0] bg-no-repeat max-w-[1700px] mx-auto overflow-x-hidden'
    >
      <Navbar />
      <Hero />

      <section
        className='bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
      >
        {/* Heading */}
        <div className='text-center max-w-3xl  w-auto mx-auto '>
          <p
            className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            🎬 Entertainment & Media
          </p>
          <p
            className='text-sm mt-3  text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Energy, chill, or deep vibes — pick what fits.
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
          {categories?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: '17.93px',
                background: gradients[index % gradients.length] // cycle through gradients
              }}
              className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[293.58px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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
      <section
        className='bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
      >
        {/* Heading */}
        <div className='text-center max-w-3xl  w-auto mx-auto '>
          <p
            className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            📚 Knowledge & Education
          </p>
          <p
            className='text-sm mt-3  text-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[400] text-[#94979C] tracking-0 leading-[140%]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Energy, chill, or deep vibes — pick what fits.
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
          {categories1?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: '17.93px',
                background: gradients[index % gradients.length] // cycle through gradients
              }}
              className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[293.58px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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

export default Creators
