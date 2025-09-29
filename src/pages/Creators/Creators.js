import Hero from '@/Components/Creators/Hero/Hero'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
const Creators = () => {
  const router = useRouter()
  const categories = [
    { title: 'Gaming', img: '/Images/mine/n1.png' },
    { title: 'Vlogs', img: '/Images/mine/n2.png' },
    { title: 'Reviews', img: '/Images/Creators/review.png' },
    { title: 'Animations', img: '/Images/Creators/animation.png' },
    { title: 'Storytelling', img: '/Images/mine/n3.png' },
    { title: 'Challenges', img: '/Images/mine/n4.png' },
    { title: 'Tutorials', img: '/Images/mine/n5.png' },
    { title: 'Podcasts', img: '/Images/Creators/pod.png' },
    { title: 'Short Films', img: '/Images/Creators/shortfilms.png' },
    { title: 'Live Streaming', img: '/Images/Creators/livestreaming.png' }
  ]
  const categories1 = [
    { title: 'Tech', img: '/Images/mine/n15.png' },
    { title: 'Business', img: '/Images/mine/n13.png' },
    { title: 'Science', img: '/Images/mine/b1.png' },
    { title: 'Finance', img: '/Images/mine/b2.png' },
    { title: 'Productivity', img: '/Images/mine/b3.png' },
    { title: 'History', img: '/Images/mine/b4.png' },
    { title: 'Philosphy', img: '/Images/mine/b5.png' },
    { title: 'Documentaries', img: '/Images/mine/b6.png' },
    { title: 'Enterpreneurship', img: '/Images/mine/b7.png' },
    { title: 'Career', img: '/Images/mine/b8.png' }
  ]

  const categories3 = [
    { title: 'Fitness', img: '/Images/mine/o1.png' },
    { title: 'Fashion', img: '/Images/mine/o2.png' },
    { title: 'Pets & Animals', img: '/Images/mine/o3.png' },
    { title: 'Motivation', img: '/Images/mine/o4.png' },
    { title: 'Spirituality', img: '/Images/mine/o5.png' },
    { title: 'Travel', img: '/Images/mine/o6.png' },
    { title: 'Photography & Art', img: '/Images/mine/o7.png' },
    { title: 'Kids & Family', img: '/Images/mine/o8.png' },
    { title: 'Home & Interior', img: '/Images/mine/o9.png' },
    { title: 'Wellness', img: '/Images/mine/o10.png' }
  ]

  return (
    <div
      style={{ backgroundImage: "url('/Images/hero.png')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
      <Hero />
      <div
        style={{
          backgroundImage: "url('/Images/Creators/creatureshadr.png')",
          backgroundPositionX: 'right'
        }}
        className='bg-no-repeat'
      >
        <div
          style={{
            backgroundImage: "url('/Images/Creators/createleft.png')",
            backgroundPosition: '0% 40%'
          }}
          className='bg-no-repeat'
        >
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
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[272.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer'
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
                  <div className='w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]'>
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
            <div className='!grid grid-cols-1 min-[360px]:!grid-cols-2  md:!grid-cols-3 lg:!grid-cols-4 xl:!grid-cols-5 !gap-2 lg:!gap-6 max-w-[1210px] mx-auto w-full cursor-pointer'>
              {categories1?.map((cat, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '17.93px',
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[272.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
                  onClick={() =>
                    router.push(
                      `/TracksDetails?title=${encodeURIComponent(
                        cat.title
                      )}&image=${encodeURIComponent(cat.img)}&section=Knowledge`
                    )
                  }
                >
                  <div className='w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]'>
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
          {/* .... */}
          <section
            className='bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[240px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
          >
            {/* Heading */}
            <div className='text-center max-w-3xl  w-auto mx-auto '>
              <p
                className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                🌟 Passion & Inspiration
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
  cursor-pointer
'
            >
              {categories3?.map((cat, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '17.93px',
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[272.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
                  onClick={() =>
                    router.push(
                      `/TracksDetails?title=${encodeURIComponent(
                        cat.title
                      )}&image=${encodeURIComponent(cat.img)}&section=Passion`
                    )
                  }
                >
                  <div className='w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]'>
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
          {/* ...... */}
        </div>
      </div>
      <section
        className='
    relative w-full flex justify-center 
    pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[64px]
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
                className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[700] text-[#F7F7F7] tracking-0 leading-[110%] w-full max-w-[652.45px] '
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Ready to explore the ultimate royalty-free music library,
                crafted for creators.
              </p>
              {/* Gap */}
              <div className='h-[48px]' />

              {/* Buttons */}
              <div className='flex gap-3 '>
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
      {/* .... */}

      <Footer />
    </div>
  )
}

export default Creators
