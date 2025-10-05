import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const Individualmusic = () => {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)
  const [showSlider, setShowSlider] = useState(false)
  const durationLabel = '2:55'
  const currentTimeLabel = '0:00'
  return (
    <div
      className='bg-no-repeat h-[100dvh]'
      style={{
        backgroundImage: 'url("/Images/musicbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      {/* hero */}
      <div className='pt-[40px] lg:pt-[64px] pb-[0px] md:pb-[50px]  lg:pb-[96px] px-[30px] lg:px-[56px] flex flex-col w-full gap-[50px] lg:gap-[96px] overflow-hidden'>
        <p
          style={{ fontFamily: 'IBM_Plex_Mono', textTransform: 'uppercase' }}
          className='text-[#FAFAFA80] text-[12px] lg:text-[14px] tracking-[-0.28px] leading-[100%]'
        >
          CREATOR / <span className='text-[#F9F9F9]'>Entertainment</span> /{' '}
          <span className='text-[#F9F9F9]'>Gaming</span> /{' '}
          <span className='text-[#F9F9F9]'>INTO THE BLUE </span>/{' '}
          <span className='text-[#F9F9F9]'>sleep in ocean</span>
        </p>

        <div className='flex flex-col items-center w-full'>
          <Image
            src='/Images/Trackdetails/Rectangle 3.png'
            alt=''
            height={200}
            width={200}
            className='h-[130px] md:h-[150px] lg:h-[170px] xl:h-[200px] w-[130px]  md:w-[150px] lg:w-[170px] xl:w-[200px] mb-[16] md:mb-[24px]'
          />
          <p
            style={{
              fontFamily: 'Space Grotesk_Bold'
            }}
            className=' text-[30px] sm:text-[35px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[100%] text-[#F9F9F9] tracking-[-1.28px] xl:tracking-[–2.56px]'
          >
            Sleep in ocean
          </p>
          <div className='flex flex-col items-center gap-[16px] md:gap-[24px] mt-[24px] md:mt-[32px]'>
            <div className='flex items-center gap-[4px]'>
              <p
                style={{
                  fontFamily: 'Space Grotesk_Medium'
                }}
                className='text-[13px] text-[#CECFD2] bg-[#1A311C] px-[8.73px] py-[2.18px] rounded-[99999px] leading-[19.21px]'
              >
                Gaming
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk_Medium'
                }}
                className='text-[13px] text-[#CECFD2] bg-[#514C31] px-[8.73px] py-[2.18px] rounded-[99999px] leading-[19.21px]'
              >
                Happy
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk_Medium'
                }}
                className='text-[13px] text-[#CECFD2] bg-[#1A2B31] px-[8.73px] py-[2.18px] rounded-[99999px] leading-[19.21px]'
              >
                Dreamy
              </p>
            </div>
            <p
              style={{
                fontFamily: 'Space Grotesk'
              }}
              className='text-[13px] text-[#F9F9F9] leading-[19.21px]'
            >
              40 BPM
            </p>
          </div>
        </div>
      </div>

      <div className='fixed bottom-0  bg-[#010101]  w-full px-[15px] sm:px-[20px] md:px-[32px] pb-[32px] pt-[32px] flex flex-col gap-[20px] lg:gap-[24px]'>
        <div
          className={`max-[800px]:flex-col flex items-center justify-between gap-[10px] rounded-lg max-[600px]:flex-none max-[600px]:min-w-full 
                bg-transparent
              `}
        >
          {/* Left section: Image + Title + Duration + svgs */}
          <div className='max-[800px]:hidden flex items-center gap-[8px] sm:gap-[10px] md:gap-[13px] lg:gap-[16px]'>
            <img
              src='/Images/Trackdetails/Rectangle 3 (1).png'
              alt='ddd'
              className=' w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-md object-cover'
            />
            <div>
              <h3
                className='text-[#F9F9F9] text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px]'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                {/* {track.title.length > 8
                      ? `${track.title.slice(0, 10)}...`
                      : track.title} */}
                Sleep in Ocean
              </h3>
              <p
                style={{ fontFamily: 'Space Grotesk' }}
                className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
              >
                02:30
              </p>
            </div>
            <div className='flex items-center gap-[16px] md:gap-[14] lg:gap-[24px]'>
              <img
                onClick={() => router.push('/Signup')}
                src='/Images/Trackdetails/plus.svg'
                alt='pl'
                className='h-[15px] md:h-[20px] cursor-pointer'
              />
              <img
                onClick={() => router.push('/Signup')}
                src='/Images/Trackdetails/dnl.svg'
                alt='dn'
                className='h-[15px] md:h-[20px] cursor-pointer'
              />
            </div>
          </div>

          {/* Middle waveform and controls*/}
          <div className='min-[800px]:fixed left-1/2 min-[800px]:-translate-x-1/2 flex-1 flex flex-col items-center justify-center gap-[10px] w-full max-w-[485px] max-[800px]:max-w-full'>
            {/* Top transport controls - replace icons to match Figma if needed */}
            <div className='flex items-center justify-between min-[800px]:justify-center w-full'>
              <div className='min-[800px]:hidden flex items-center gap-[8px]  md:gap-[12px] '>
                <img
                  onClick={() => router.push('/Signup')}
                  src='/Images/Trackdetails/plus.svg'
                  alt='pl'
                  className='h-[15px] md:h-[20px] cursor-pointer'
                />
                <img
                  onClick={() => router.push('/Signup')}
                  src='/Images/Trackdetails/dnl.svg'
                  alt='dn'
                  className='h-[15px] md:h-[20px] cursor-pointer'
                />
              </div>
              <div className='flex items-center justify-center gap:[12px] md:gap-[18px]'>
                <button aria-label='Shuffle' onClick={() => {}}>
                  <img src='/Images/Trackdetails/shuffle.svg' alt='shuffle' />
                </button>
                <button aria-label='Previous' onClick={() => {}}>
                  <img src='/Images/Trackdetails/prev.svg' alt='previous' />
                </button>
                <button
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <img src='/Images/Trackdetails/play.svg' alt='pause' />
                  ) : (
                    <img src='/Images/Trackdetails/play.svg' alt='play' />
                  )}
                </button>
                <button aria-label='Next' onClick={() => {}}>
                  <img src='/Images/Trackdetails/next.svg' alt='next' />
                </button>
                <button aria-label='Comments' onClick={() => {}}>
                  <img src='/Images/Trackdetails/comment.svg' alt='comment' />
                </button>
              </div>

              <div className='min-[800px]:hidden flex flex-col-reverse items-center gap-1 group relative'>
                {/* Volume icon */}
                <img
                  src='/Images/Trackdetails/volume.svg'
                  alt='volume'
                  className='cursor-pointer pr-[6px]'
                  onClick={() => setShowSlider(!showSlider)} // toggle on click
                />

                {/* Range slider (hidden until hover or click) */}
                <input
                  type='range'
                  min={0}
                  max={100}
                  value={volume}
                  onChange={e => setVolume(parseInt(e.target.value))}
                  className={`w-[80px] md:w-[93px] h-[5px] mb-[40px] rounded-[4px] cursor-pointer appearance-none transition-all duration-300 absolute bottom-8 origin-bottom rotate-[-90deg]
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-0 
          [&::-webkit-slider-thumb]:h-0 
          [&::-webkit-slider-thumb]:bg-transparent
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:w-0 
          [&::-moz-range-thumb]:h-0 
          [&::-moz-range-thumb]:bg-transparent
          ${showSlider ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
                  style={{
                    border: '0.1px solid #E6E6E6',
                    background: `linear-gradient(to right, #E6E6E6 ${volume}%, transparent ${volume}%)`
                  }}
                  aria-label='Volume'
                />
              </div>
            </div>
            {/* Waveform with time labels */}
            <div className='flex items-center gap-[10px] max-[800px]:w-full'>
              <span
                className='text-[#F9F9F9] opacity-70 text-[11px] md:text-[12px]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                {currentTimeLabel}
              </span>
              <img
                src='/Images/Frame 43.png'
                alt='waveform'
                className='h-[22px] w-full max-w-[385px] max-[1100px]:max-w-[250px] max-[800px]:max-w-full max-[540px]:max-w-[85%] max-[400px]:max-w-[78%]'
              />
              <span
                className='text-[#F9F9F9] opacity-70 text-[11px] md:text-[12px]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                {durationLabel}
              </span>
            </div>
          </div>

          {/* Right section  of media player*/}
          <div className='max-[800px]:hidden  flex items-center'>
            {/* Volume control */}
            <img src='/Images/Trackdetails/volume.svg' alt='volume' />
            <input
              type='range'
              min={0}
              max={100}
              value={volume}
              onChange={e => setVolume(parseInt(e.target.value))}
              // className='w-[80px] md:w-[93px] h-[4px] accent-[#E6E6E6] cursor-pointer'
              className='w-[80px] md:w-[93px] h-[5px] rounded-[4px] cursor-pointer appearance-none 
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-0 
    [&::-webkit-slider-thumb]:h-0 
    [&::-webkit-slider-thumb]:bg-transparent
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-0 
    [&::-moz-range-thumb]:h-0 
    [&::-moz-range-thumb]:bg-transparent
  '
              style={{
                border: '0.1px solid #E6E6E6',
                background: `linear-gradient(to right, #E6E6E6 ${volume}%, transparent ${volume}%)`
              }}
              aria-label='Volume'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Individualmusic
