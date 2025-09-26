import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import { useRouter } from 'next/navigation'
const Individualmusic = () => {
  const router = useRouter()
  return (
    <div className='bg-[#080808]'>
      <Navbar />
      {/* hero */}
      <div className='pt-[40px] lg:pt-[64px] pb-[50px]  lg:pb-[96px] flex flex-col px-[15px] lg:px-[30px] items-center gap-[30px] lg:gap-[48px]'>
        <div
          style={{
            backgroundImage: "url('/Images/Trackdetails/tdshad.png')"
          }}
          className='flex items-center justify-between pl-[15px] md:pl-[30px] lg:pl-[60px] pr-20px pb-[15px] md:pb-[25px] max-[350px]:pr-[24px] max-[640px]:pr-[10px] max-[640px]:pt-[15px] bg-[#03070F] rounded-[20px] bg-no-repeat w-full'
        >
          <div className='flex flex-col gap-[15px] lg:gap-[20px]  items-start'>
            <p
              style={{
                fontFamily: 'IBM_Plex_Mono',
                textTransform: 'uppercase'
              }}
              className='text-[#FAFAFA80] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] tracking-[-0.28px] leading-[100%]'
            >
              Music
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk_Bold'
              }}
              className=' text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[48px] leading-[100%] text-[#F9F9F9] tracking-[-1.28px] xl:tracking-[–2.56px]'
            >
              Sleep in ocean
            </p>
          </div>
          <div className='flex items-center'>
            <img
              src='/Images/Trackdetails/cd.png'
              alt=''
              className=' mr-[-40px] sm:mr-[-75px] md:mr-[-105px] lg:mr-[-150px] xl:mr-[-200px] h-[80px] w-[80px] sm:h-[150px] sm:w-[150px] md:h-[210px] md:w-[210px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]'
            />
            <img
              src='/Images/Trackdetails/Rectangle 3.png'
              alt=''
              className='h-[80px] w-[80px] sm:h-[150px] sm:w-[150px] md:h-[210px] md:w-[210px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]'
            />
          </div>
        </div>
      </div>

      <div className=' bg-[#010101]  w-full px-[32px] md:px-[25px] pb-[100px] pt-[32px] flex flex-col gap-[20px] lg:gap-[24px]  max-[600px]:gap-[12px]'>
        <div
          className={`flex items-center justify-between pr-[30px] gap-[10px] rounded-lg max-[600px]:flex-none max-[600px]:min-w-full max-[600px]:pr-[15px]
                bg-transparent
              `}
        >
          {/* Left section: Image + Title + Duration */}
          <div className='flex items-start gap-[8px] sm:gap-[10px] md:gap-[20px]'>
            <img
              src='/Images/Trackdetails/Rectangle 3 (1).png'
              alt='ddd'
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
                Sleep in Ocean
              </h3>
              <p
                style={{ fontFamily: 'Space Grotesk' }}
                className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
              >
                02:30
              </p>
            </div>
          </div>

          {/* Middle waveform */}
          <div className='max-[768]:hidden flex-1 flex justify-center'>
            <img
              src='/Images/Trackdetails/wave.svg'
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
              40BPM
            </div>
            <div
              style={{ fontFamily: 'Space Grotesk' }}
              className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
            >
              <span>POP, 2020s</span>
              <br />
              <span>Happy, Dreamy</span>
            </div>
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
      </div>
      <Footer />
    </div>
  )
}

export default Individualmusic
