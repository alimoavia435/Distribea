import Navbar from '@/Components/Navbar/Navbar'
// import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
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
          src='/Images/Login/Section.png'
          alt=''
          className='w-[55%] h-[100vh] max-[1000px]:hidden'
        />
        {/* right section  */}
        <div className='w-[55%] max-[1000px]:w-full h-[100vh] scrollbar-hide overflow-y-auto px-[25px] '>
          {/* welcome note */}
          <div className='flex flex-col items-center  max-[768px]:gap-[30px] gap-[64px]  max-[768px]:py-[70px] py-[129px]'>
            <div className='flex flex-col items-center w-full max-w-[360px]'>
              <img
                src='/Images/Login/logo.svg'
                alt=''
                className='mb-[24px]  max-[768px]:h-[80px] w-[80px]'
              />
              <p
                className=' text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[105%] mb-[12px] text-[#F7F7F7]'
                style={{ fontFamily: 'Space Grotesk_Bold' }}
              >
                Welcome back
              </p>
              <p
                className='text-center text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[105%] mb-[12px] text-[#CECFD2]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Welcome back! Please enter your details.
              </p>
            </div>

            <div className='flex flex-col gap-[20px] items-center w-full max-w-[360px]'>
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
                  className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%]  text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Password
                </p>
                <input
                  type='text'
                  className='rounded-[999px] max-[768px]:px-[18px] max-[768px]:py-[10px] px-[24px] py-[14px] border border-[#373A41] w-full text-[#CECFD2] placeholder:text-[#85888E] max-[768px]:text-[14px] xl:text-[16px] focus:outline-0 bg-transparent focus:border-[#F7F7F7] focus:border-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                  placeholder='Enter Your Password'
                />
              </div>
              {/* check and forgot passowrd */}
              <div className='flex items-center justify-between w-full mt-[4px]'>
                <div className='flex items-center gap-[8px]'>
                  <img src='/Images/Login/uncheck.svg' alt='' />
                  <p
                    className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%] text-[#CECFD2]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    Remember for 30 days
                  </p>
                </div>
                <p
                  className='text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[105%]  text-[#CECFD2]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Forgot password
                </p>
              </div>
              {/* button */}
              <button
                onClick={() => router.push('/MyAccount')}
                style={{ fontFamily: 'Space Grotesk_Bold' }}
                className=' cursor-pointer bg-[#175CD3] border-2 border-[#FFFFFF1F] rounded-[999px] w-full max-[768px]:py-[9px] py-[14px] text-[14px] lg:text-[15px] xl:text-[17px] text-[#FFFFFF] text-center mt-[4px]'
              >
                Sign in
              </button>

              {/* social icons */}

              <div className='flex items-center max-[768px]:gap-[6px] gap-[12px] justify-center mt-[4px]'>
                <img
                  src='/Images/Login/apple.svg'
                  alt='Apple'
                  className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                />
                <img
                  src='/Images/Login/cord.svg'
                  alt='Discord'
                  className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                />
                <img
                  src='/Images/Login/fb.svg'
                  alt='FB'
                  className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                />
                <img
                  src='/Images/Login/google.svg'
                  alt='G'
                  className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                />
                <img
                  src='/Images/Login/microsoft.svg'
                  alt='Microsoft'
                  className='max-[768px]:h-[45px] max-[768px]:w-[45px]'
                />
              </div>
              {/* already  */}
              <p
                className='text-[#85888E] text-[12px] xl:text-[14px] mt-[20px]'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Don’t have an account?{' '}
                <span
                  className='text-[#F7F7F7] cursor-pointer hover:underline hover:decoration-[#F7F7F7] decoration-2'
                  style={{ fontFamily: 'Space Grotesk_Bold' }}
                  onClick={() => router.push('/Signup')}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
