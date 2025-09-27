import Hero from '@/Components/Creators/Hero/Hero'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

const Culture = () => {
  const categories = [
    { title: 'Salsa', name: 'Salsa', img: '/images/mine/l1.png' },
    { title: 'Tango', name: 'Argentina', img: '/images/mine/l2.png' },
    { title: 'Latin Pop', name: 'America Latina', img: '/Images/mine/l3.png' },
    { title: 'Reggaeton', name: 'Puerto Rico', img: '/Images/mine/l4.png' },
    { title: 'Cumbia', name: 'Colombia', img: '/images/mine/l5.png' },
    { title: 'Reggea', name: 'Jamaica', img: '/images/mine/l6.png' },
    { title: 'Mariachi', name: 'Mexico', img: '/Images/mine/l7.png' },
    { title: 'Rumba', name: 'Cuba', img: '/Images/mine/l8.png' },
    {
      title: 'Bachata',
      name: 'Dominican Republic',
      img: '/Images/mine/l9.png'
    },
    { title: 'Bosso Nova', name: 'Brazil', img: '/Images/mine/l10.png' }
  ]
  const categories1 = [
    { title: 'K-Pop', name: 'South Korea', img: '/images/mine/ll1.png' },
    { title: 'J-Pop', name: 'Japan', img: '/images/mine/ll2.png' },
    { title: 'Bollywood', name: 'India', img: '/Images/mine/ll3.png' },
    {
      title: 'Chinese Traditional',
      name: 'Asian',
      img: '/Images/mine/ll4.png'
    },
    {
      title: 'Thai Traditional Music',
      name: 'Thailand',
      img: '/images/mine/ll5.png'
    }
  ]

  const categories3 = [
    { title: 'Jazz', img: '/images/mine/oo1.png' },
    { title: 'Blues', img: '/images/mine/oo2.png' },
    { title: 'Hip-Hop', img: '/images/mine/oo3.png' },
    { title: 'Country', img: '/images/mine/oo4.png' },
    { title: 'Gospel', img: '/images/mine/oo5.png' },
    { title: 'West Coast', img: '/images/mine/oo6.png' },
    { title: 'R&B', img: '/images/mine/oo7.png' },
    { title: 'Soul', img: '/images/mine/oo8.png' },
    { title: 'Funk', img: '/images/mine/oo9.png' },
    { title: 'East-Coast', img: '/images/mine/oo10.png' }
  ]

  const categories4 = [
    { title: 'Classical', name: 'French', img: '/images/mine/lll1.png' },
    { title: 'Gregorian', name: 'Georgia', img: '/images/mine/lll2.png' },
    { title: 'German Folk', name: 'Germany', img: '/Images/mine/lll3.png' },
    { title: 'Fado', name: 'Portugal', img: '/Images/mine/lll4.png' },
    { title: 'Polka', name: 'Europe', img: '/images/mine/lll5.png' },
    { title: 'Flamenco', name: 'Spain', img: '/images/mine/lll6.png' },
    { title: 'Medieval ', name: 'European', img: '/Images/mine/lll7.png' },
    { title: 'Opera', name: 'Italy', img: '/Images/mine/lll8.png' },
    { title: 'Techno', name: 'Germany', img: '/Images/mine/lll9.png' },
    {
      title: 'Viennese Classical',
      name: 'Austria',
      img: '/Images/mine/lll10.png'
    }
  ]

  const categories5 = [
    { title: 'Afro-Beat', name: 'Nigeria', img: '/images/mine/llll1.png' },
    { title: 'Amapiano', name: 'South Africa', img: '/images/mine/llll2.png' },
    { title: 'Highlife', name: 'Ghana', img: '/Images/mine/llll3.png' },
    { title: 'Gqom', name: 'South Africa', img: '/Images/mine/llll4.png' },
    { title: 'Gnawa', name: 'Morocco', img: '/images/mine/llll5.png' },
    { title: 'Rai', name: 'Algeria', img: '/images/mine/llll6.png' },
    { title: 'Turkish Folk ', name: 'Turkey', img: '/Images/mine/llll7.png' },
    { title: 'Oud Music', name: 'Middle East', img: '/Images/mine/llll8.png' },
    {
      title: 'Arabic Maqam',
      name: 'Middle East',
      img: '/Images/mine/llll9.png'
    },
    { title: 'Dabke', name: 'Middle East', img: '/Images/mine/llll10.png' }
  ]

  return (
    <div
      style={{ backgroundImage: "url('/Images/hero.png')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
      <div className='py-[50px] md:py-[80px] lg:py-[100px] xl:py-[128px]  flex flex-col items-center gap-[30px] md:gap-[40] lg:gap-[60] xl:gap-[80px] max-w-[768px] mx-auto'>
        <div className=' flex flex-col items-center gap-[18px] xl:gap-[24px]'>
          <p
            className='text-[30px] sm:text-[35px] md:text-[50px] lg:text-[60px] xl:text-[72px] leading-[140%] tracking-[-1.44px] text-[#ffffff] text-center'
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            Global Sounds, Endless Inspiration 🌍
          </p>
          <p
            className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#CECFD2] text-center'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Discover the best music, carefully crafted for creators.
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[32px]'>
          <div className='flex items-center gap-[4px]'>
            <img
              src='/Images/pricing/tick.svg'
              alt=''
              className='h-[24px] w-[24px]'
            />
            <p
              className='text-[#ffffff] text-[14px] leading-[24px]'
              style={{
                fontFamily: 'Space Grotesk_Medium',
                textTransform: 'uppercase'
              }}
            >
              Premium Quality Tracks
            </p>
          </div>
          <div className='flex items-center gap-[4px]'>
            <img
              src='/Images/pricing/tick.svg'
              alt=''
              className='h-[24px] w-[24px]'
            />
            <p
              className='text-[#ffffff] text-[14px] leading-[24px]'
              style={{
                fontFamily: 'Space Grotesk_Medium',
                textTransform: 'uppercase'
              }}
            >
              Unlimited downloads
            </p>
          </div>
          <div className='flex items-center gap-[4px]'>
            <img
              src='/Images/pricing/tick.svg'
              alt=''
              className='h-[24px] w-[24px]'
            />
            <p
              className='text-[#ffffff] text-[14px] leading-[24px]'
              style={{
                fontFamily: 'Space Grotesk_Medium',
                textTransform: 'uppercase'
              }}
            >
              Tailored for Every Video
            </p>
          </div>
        </div>
      </div>
      {/* ......double check */}

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
            backgroundPosition: '0% 68%'
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
                💃 Latin Passion
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
                 w-[100%] sm:!h-[303.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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
                    className='flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px] pt-[5px]'
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]'
                  >
                    {cat.name}
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
                🎎 Asian Harmony
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
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[303.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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
                    className='flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px] pt-[5px]'
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='text-[#F9F9F9] flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]'
                  >
                    {cat.name}
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
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
          >
            {/* Heading */}
            <div className='text-center max-w-3xl  w-auto mx-auto '>
              <p
                className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                🎷 American Spirit
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
        </div>
      </div>
      {/* ...... */}

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
            backgroundPosition: '0% 70%'
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
                🎼 European Elegance
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
              {categories4?.map((cat, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '17.93px',
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[303.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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
                    className='flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px] pt-[5px]'
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]'
                  >
                    {cat.name}
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
    xl:px-[80px] xl:pt-[96px] xl:pb-[240px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[64px]'
          >
            {/* Heading */}
            <div className='text-center max-w-3xl  w-auto mx-auto '>
              <p
                className='flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[38px] xl:text-[48px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                🥁 Oriental & Africain Rhythms
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
              {categories5?.map((cat, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '17.93px',
                    // background: gradients[index % gradients.length] // cycle through gradients
                    background: '#1C1B1B'
                  }}
                  className='flex !flex-col !w-auto !h-[250.58px] 
                 w-[100%] sm:!h-[303.38px] 
                 !min-w-[150px] sm:!min-w-[150px] 
                 !overflow-hidden !hover:scale-105 !transition-transform '
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
                    className='flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px] pt-[5px]'
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk_Medium'
                    }}
                    className='text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]'
                  >
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                backgroundImage: "url('/Images/mine/s2.png')" // replace with your image
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
        </div>
      </div>
      {/* .... */}

      <Footer />
    </div>
  )
}

export default Culture
