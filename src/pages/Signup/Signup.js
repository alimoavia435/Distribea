import Navbar from '@/Components/Navbar/Navbar'
// import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const Signup = () => {
  const router = useRouter()
  return (
    <div
      style={{
        backgroundImage: "url('/Images/Login/hero.png')",
        backgroundPositionX: 'right',
        backgroundPositionY: 'top'
      }}
      className='bg-no-repeat mx-auto overflow-hidden h-[100vh]'
    >
      <Navbar />
      <div className='flex flex-row items-center'>
        {/* left section */}
        <img
          src='/Images/Login/signupsect.png'
          alt=''
          className='w-[55%] h-[100vh] max-[1000px]:hidden'
        />
        {/* right section  */}
        <div className='w-[55%] max-[1000px]:w-full h-[100vh] scrollbar-hide overflow-y-auto px-[25px] '>
          {/* welcome note */}
          <div className='flex flex-col items-center  max-[768px]:gap-[25px] gap-[40px]  max-[768px]:py-[70px] py-[118px]'>
            <div className='flex flex-col items-start w-full max-w-[360px]'>
              <p
                className=' text-left text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[105%] mb-[12px] text-[#F7F7F7]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Sign up
              </p>
              <p
                className='text-left text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] leading-[105%] mb-[12px] text-[#CECFD2]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Sign up quickly and unleash your creativity!
              </p>
            </div>

            <div className='flex flex-col gap-[20px] items-center w-full max-w-[360px]'>
              <div className='flex flex-col items-start gap-[6px] w-full'>
                <p
                  className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%]  text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  First name
                </p>
                <input
                  type='text'
                  className='rounded-[999px] max-[768px]:text-[14px] xl:text-[16px] max-[768px]:px-[18px] max-[768px]:py-[10px] px-[24px] py-[14px] border border-[#373A41] w-full text-[#CECFD2] placeholder:text-[#85888E] focus:outline-0 bg-transparent focus:border-[#F7F7F7] focus:border-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                  placeholder='Enter Your First Name'
                />
              </div>
              <div className='flex flex-col items-start gap-[6px] w-full'>
                <p
                  className='text-[11px] sm:text-[11px]  md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%]  text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Last name
                </p>
                <input
                  type='text'
                  className='rounded-[999px] max-[768px]:text-[14px] xl:text-[16px] max-[768px]:px-[18px] max-[768px]:py-[10px] px-[24px] py-[14px] border border-[#373A41] w-full text-[#CECFD2] placeholder:text-[#85888E] focus:outline-0 bg-transparent focus:border-[#F7F7F7] focus:border-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                  placeholder='Enter Your Last name'
                />
              </div>
              {/* input fields */}
              <div className='flex flex-col items-start gap-[6px] w-full'>
                <p
                  className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%]  text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Email
                </p>
                <input
                  type='text'
                  className='rounded-[999px] max-[768px]:text-[14px] xl:text-[16px] max-[768px]:px-[18px] max-[768px]:py-[10px] px-[24px] py-[14px] border border-[#373A41] w-full text-[#CECFD2] placeholder:text-[#85888E] focus:outline-0 bg-transparent focus:border-[#F7F7F7] focus:border-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                  placeholder='Enter Your Email'
                />
              </div>
              <div className='flex flex-col items-start gap-[6px] w-full'>
                <p
                  className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%] text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Password
                </p>
                <input
                  type='text'
                  className='rounded-[999px] max-[768px]:text-[14px] xl:text-[16px] max-[768px]:px-[18px] max-[768px]:py-[10px] px-[24px] py-[14px] border border-[#373A41] w-full text-[#CECFD2] placeholder:text-[#85888E] focus:outline-0 bg-transparent focus:border-[#F7F7F7] focus:border-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                  placeholder='Enter Your Password'
                />
                <p
                  className='text-[#85888E] text-[12px] xl:text-[14px] mt-[-5px] ml-[5px]'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Must be at least 8 characters.
                </p>
              </div>

              {/* button */}
              <button
                style={{ fontFamily: 'Space Grotesk_Bold' }}
                className='bg-[#175CD3] max-[768px]:py-[9px] border-2 border-[#FFFFFF1F] rounded-[999px] w-full py-[14px] text-[14px] lg:text-[15px] xl:text-[17px] text-[#FFFFFF] text-center mt-[4px]'
              >
                Get Started
              </button>

              {/* social icons */}

              <div className='flex items-center max-[768px]:gap-[6px] gap-[12px] justify-center mt-[4px]'>
                <a href='https://distribea.shwanix.com/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/Images/Login/apple.svg'
                    alt='Apple'
                    width={52}
                    height={52}
                    className='max-[768px]:h-[45px] max-[768px]:w-[45px] cursor-pointer'
                  />
                </a>
                <a href='https://distribea.shwanix.com/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/Images/Login/cord.svg'
                    alt='Discord'
                    width={52}
                    height={52}
                    className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                  />
                </a>
                <a href='https://distribea.shwanix.com/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/Images/Login/fb.svg'
                    alt='FB'
                    width={52}
                    height={52}
                    className='max-[768px]:h-[45px] max-[768px]:w-[45px] cursor-pointer'
                  />
                </a>
                <a href='https://distribea.shwanix.com/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/Images/Login/google.svg'
                    alt='G'
                    width={52}
                    height={52}
                    className='max-[768px]:h-[45px] max-[768px]:w-[45px] cursor-pointer'
                  />
                </a>
                <a href='https://distribea.shwanix.com/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/Images/Login/microsoft.svg'
                    alt='Microsoft'
                    width={52}
                    height={52}
                    className='max-[768px]:h-[45px] max-[768px]:w-[45px] cursor-pointer'
                  />
                </a>
              </div>

              <p
                className='text-[#85888E] text-[12px] xl:text-[14px] mt-[20px]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Already have an account?{' '}
                <span
                  className='text-[#F7F7F7] cursor-pointer hover:underline hover:decoration-[#F7F7F7] decoration-2'
                  style={{ fontFamily: 'Space Grotesk_Bold' }}
                  onClick={() => router.push('/Login')}
                >
                  Log in
                </span>
              </p>
            </div>

            <div className='mt-[60px] pr-[32px] max-[768px]:pr-[0px] flex justify-end gap-[8px] w-full'>
              <img src='/Images/Login/mail.svg' alt='' />
              <p
                className='text-[#85888E] text-[11px] xl:text-[13px]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                help@distribea.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
