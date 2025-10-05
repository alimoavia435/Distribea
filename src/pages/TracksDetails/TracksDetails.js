import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Header from '@/Components/trackdetails/Header/Header'
import React from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const TracksDetails = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const title = searchParams?.get('title')
  const image = searchParams?.get('image')
  const section = searchParams?.get('section')

  const tracks = [
    {
      id: 1,
      title: 'Sleep in Ocean',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      // genre: 'POP, 2020s',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg', // placeholder for waveform
      active: false
    },
    {
      id: 2,
      title: 'Blue Night',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: true
    },
    {
      id: 3,
      title: 'Closed Door',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },

    {
      id: 4,
      title: 'Vintage Moment',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 5,
      title: 'I Feel Good!',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 6,
      title: 'Pinky Mind',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 7,
      title: 'Orange World',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 8,
      title: 'Culture Sound',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 9,
      title: 'Our Dreams',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 10,
      title: 'New Generation',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 9,
      title: 'Our Dreams',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 9,
      title: 'Our Dreams',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Soul',
      f2: 'Reggea',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    },
    {
      id: 10,
      title: 'New Generation',
      duration: '02:30',
      bpm: '40 BPM',
      f1: 'Jazz',
      f2: 'Love',
      mood: 'Happy, Dreamy',
      image: '/Images/Trackdetails/Rectangle 3 (1).png',
      waveform: '/Images/Trackdetails/wave.svg',
      active: false
    }
  ]
  const categories = [
    {
      title: 'Elysian Vibes',
      name: '12 Tracks',
      img: '/Images/Trackdetails/track1.png'
    },
    {
      title: 'Mindful Clouds',
      name: '16 Tracks',
      img: '/Images/Trackdetails/track2.png'
    },
    {
      title: 'Adventure Awaits',
      name: '48 Tracks',
      img: '/Images/Trackdetails/track5.png'
    },
    {
      title: 'Sunny Daydreams',
      name: '44 Tracks',
      img: '/Images/Trackdetails/track3.png'
    },
    {
      title: 'Dance with Me',
      name: '39 Tracks',
      img: '/Images/Trackdetails/track5.png'
    },
    {
      title: 'Dance with Me',
      name: '39 Tracks',
      img: '/Images/Trackdetails/track5.png'
    }
  ]

  return (
    <div className='bg-[#080808]'>
      <Navbar />
      {/* hero */}
      <div className='pt-[40px] lg:pt-[64px] pb-[50px]  lg:pb-[96px] flex flex-col px-[15px] lg:px-[30px]  gap-[30px] lg:gap-[48px]'>
        <p
          style={{ fontFamily: 'IBM_Plex_Mono', textTransform: 'uppercase' }}
          className='text-[#FAFAFA80] text-left text-[11px] md:text-[12px] lg:text-[14px] tracking-[-0.28px] leading-[100%]'
        >
          CREATOR /{' '}
          <span className='text-[#F9F9F9]'>{section || 'Entertainment'}</span> /{' '}
          <span className='text-[#F9F9F9]'>{title || 'Gaming'}</span> /{' '}
          <span className='text-[#F9F9F9]'>INTO THE BLUE </span>
        </p>
        <div
          style={{
            backgroundImage: "url('/Images/Trackdetails/tdshad.png')"
          }}
          className='flex items-center justify-between pl-[15px] md:pl-[30px] lg:pl-[60px] pr-20px pb-[15px] md:pb-[25px] max-[350px]:pr-[24px] max-[640px]:pr-[10px] max-[640px]:pt-[15px] bg-[#03070F] rounded-[20px] bg-no-repeat w-full'
        >
          <div className='flex flex-col gap-[15px] lg:gap-[20px] pt-[15px]  items-start'>
            <p
              style={{
                fontFamily: 'IBM_Plex_Mono',
                textTransform: 'uppercase'
              }}
              className='text-[#FAFAFA80] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] tracking-[-0.28px] leading-[100%]'
            >
              PLAYLIST
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk_Bold'
              }}
              className=' text-[30px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[128px] leading-[100%] text-[#F9F9F9] tracking-[-1.28px] xl:tracking-[–2.56px]'
            >
              {title || 'Gaming'}
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk',
                textTransform: 'uppercase'
              }}
              className='text-[#FAFAFA80] text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] tracking-[-0.28px] leading-[100%]'
            >
              Where the Ocean Meets Serenity...
            </p>
          </div>
          <div className='flex items-center'>
            <img
              src='/Images/Trackdetails/cd.png'
              alt=''
              className=' mr-[-40px] sm:mr-[-75px] md:mr-[-105px] lg:mr-[-150px] xl:mr-[-200px] h-[80px] w-[80px] sm:h-[150px] sm:w-[150px] md:h-[210px] md:w-[210px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]'
            />
            <img
              src={image || '/Images/Trackdetails/Rectangle 3.png'}
              alt=''
              className='h-[80px] w-[80px] sm:h-[150px] sm:w-[150px] md:h-[210px] md:w-[210px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] rounded-[12px] md:rounded-[29px]'
            />
          </div>
        </div>
      </div>
      {/* music header se nechy  */}
      <div className='flex flex-col items-center gap-[30px] lg:gap-[48px] px-[0px]'>
        <Header />
        <div className='max-w-[1320px] w-full px-[15px] md:px-[25px] flex flex-col gap-[20px] lg:gap-[24px]  max-[600px]:gap-[12px]'>
          {tracks?.map((track, index) => (
            <div
              key={`${track.id}-${index}`}
              className={`flex items-center justify-between pr-[30px] gap-[10px] rounded-lg max-[600px]:flex-none max-[600px]:min-w-full max-[600px]:pr-[15px] cursor-pointer ${
                track.active ? 'bg-[#FAFAFA1A]' : 'bg-transparent'
              }`}
              onClick={() => router.push('/Individualmusic')}
            >
              {/* Left section: Image + Title + Duration */}
              <div className='flex items-start gap-[8px] sm:gap-[10px] md:gap-[20px]'>
                <img
                  src={track.image}
                  alt={track.title}
                  className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-md object-cover'
                />
                <div>
                  <h3
                    className='text-[#F9F9F9] text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    {/* {track.title.length > 8
                      ? `${track.title.slice(0, 10)}...`
                      : track.title} */}
                    {track.title}
                  </h3>
                  <p
                    style={{ fontFamily: 'Space Grotesk' }}
                    className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
                  >
                    {track.duration}
                  </p>
                </div>
              </div>

              {/* Middle waveform */}
              <div className='max-[768]:hidden flex-1 flex justify-center'>
                <img
                  src={track.waveform}
                  alt='waveform'
                  className='h-[32px] w-full max-w-[450px] object-contain'
                />
              </div>

              {/* Right section */}
              <div className='flex items-center max-[470px]:gap-[10px]  gap-6'>
                <div
                  style={{ fontFamily: 'Space Grotesk' }}
                  className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
                >
                  {track.bpm}
                </div>
                <div
                  style={{ fontFamily: 'Space Grotesk' }}
                  className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
                >
                  <div className='flex items-center gap-[4px]'>
                    <p
                      style={{
                        backgroundColor:
                          track.f1 === 'Soul'
                            ? '#1B1E30'
                            : track.f1 === 'Reggea'
                            ? '#1A311C'
                            : track.f1 === 'Jazz'
                            ? '#504A2B'
                            : track.f1 === 'Love'
                            ? '#562636'
                            : '#1A311C',
                        fontFamily: 'Space Grotesk_Medium'
                      }}
                      className='text-[13px] text-[#CECFD2]  px-[8.73px] py-[2.18px] rounded-[99999px] leading-[19.21px]'
                    >
                      {track.f1}
                    </p>
                    <p
                      style={{
                        backgroundColor:
                          track.f2 === 'Soul'
                            ? '#1B1E30'
                            : track.f2 === 'Reggea'
                            ? '#1A311C'
                            : track.f2 === 'Jazz'
                            ? '#504A2B'
                            : track.f2 === 'Love'
                            ? '#562636'
                            : '#1A311C',
                        fontFamily: 'Space Grotesk_Medium'
                      }}
                      className='text-[13px] text-[#CECFD2]  px-[8.73px] py-[2.18px] rounded-[99999px] leading-[19.21px]'
                    >
                      {track.f2}
                    </p>
                  </div>
                  <p className='mt-[5px]'>{track.mood}</p>
                </div>
                <img
                  src='/Images/Trackdetails/plus.svg'
                  alt='pl'
                  className='h-[15px] md:h-[20px] '
                />
                <img
                  src='/Images/Trackdetails/dnl.svg'
                  alt='dn'
                  className='h-[15px] md:h-[20px]'
                />
              </div>
            </div>
          ))}
        </div>
           {/* Pagination */}
      <div className='flex justify-center items-center space-x-2'>
        <button className='bg-white text-black px-4 py-2 rounded-lg font-medium'>
          1
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          2
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          3
        </button>
        <span className='text-white px-2'>...</span>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          8
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          9
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          10
        </button>
      </div>
      </div>

      <section
        className='bg-no-repeat text-white 
    px-[25px] pt-[32px]       
    md:px-[38px] md:pt-[40]    
    lg:px-[45px] lg:pt-[60]  
    xl:px-[56px] xl:pt-[80px] xl:pb-[32px]
    flex justify-center flex-col gap-5 lg:gap-[64px]'
      >
        {/* Heading */}
        <div className='w-full flex items-center justify-between'>
          <p
            className='text-[17px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[36px] font-[500] text-[#F9F9F9] tracking-[-1px] leading-[110%]'
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            Related.
          </p>
          <p
            className='mt-3 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[400] text-[#FAFAFACC] tracking-[-1px] leading-[140%]'
            style={{ fontFamily: 'IBM_Plex_Mono' }}
          >
            show more
          </p>
        </div>

        {/* Grid */}
        <div
          className='
  !grid 
  grid-cols-1             
  min-[360px]:!grid-cols-2
  md:!grid-cols-3
  lg:!grid-cols-4
  xl:!grid-cols-6
  !gap-2 lg:!gap-6 
  max-w-[1328px] w-full
'
        >
          {categories?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: '17.93px',
                // background: gradients[index % gradients.length] // cycle through gradients
                background:'#1C1B1B'
              }}
              className='flex !flex-col !w-auto !h-[279.58px] 
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
              <div className='flex flex-col items-start px-[0px] py-[10px] gap-[4px]'>
                <p
                  style={{
                    fontFamily: 'Space Grotesk_Medium'
                  }}
                  className='pl-[16px] text-[14px] lg:text-[16px] pt-[5px] text-[#F9F9F9]'
                >
                  {cat.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Space Grotesk'
                  }}
                  className=' pl-[16px] text-[#F9F9F9] opacity-70 text-[11px] lg:text-[12px]'
                >
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TracksDetails
