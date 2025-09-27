import Footer from '@/Components/Footer/Footer'
import Download from '@/Components/MyAccount/Download/Download'
import MyAccountNavbar from '@/Components/MyAccount/MyAccountNavbar/MyAccountNavbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import SafeList from '@/Components/SafeList/SafeList'
import Profile from '@/Components/Profile/Profile'
const MyAccount = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Subscription')
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero.png')" }}
      className='bg-no-repeat'
    >
      <MyAccountNavbar />

      <div className='text-white px-[20px] md:px-[56px] py-[50px] md:py-[96px]'>
        {/* Title */}
        <h1
          style={{ fontFamily: 'Space Grotesk_Medium' }}
          className='text-[23px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[48px] tracking-[-2.5px] mb-[60px] text-[#FFFFFF]'
        >
          My Account
        </h1>

        {/* Tabs */}
        <div className='flex flex-wrap max-[500px]:gap-[15px] gap-6 mb-[40px]'>
          {[
            'Subscription',
            'Downloads',
            'Licenses',
            'SafeList',
            'Profile',
            'Playlist'
          ].map((tab, idx) => (
            <button
              key={idx}
              onClick={() =>
                tab === 'Playlist'
                  ? router.push('/TracksDetails')
                  : setActiveTab(tab)
              }
              style={{ fontFamily: 'Space Grotesk' }}
              className={`pb-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] ${
                activeTab === tab
                  ? 'text-[#FFFFFF] border-b-2 border-[#FFFFFF]'
                  : 'text-[#94979C] hover:text-[#FFFFFF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Subscription' && (
          <div className='flex items-center max-[768px]:flex-col gap-6 w-full'>
            {/* Subscription Card */}
            <div className='custom-height flex w-full px-[15px] py-[25px] sm:px-[36px] sm:py-[36px] flex-col gap-[48px] items-start bg-[#0C0E12] rounded-[20px] '>
              <p
                style={{ fontFamily: 'Space Grotesk_Medium' }}
                className='text-[#ffffff] text-[26px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[100%]'
              >
                Creator Subscription
              </p>
              <div className='flex max-[1100px]:flex-col items-start justify-between gap-[20px] w-full'>
                <div className='max-w-[397px]'>
                  <p
                    style={{ fontFamily: 'Space Grotesk_Light' }}
                    className='mb-4 text-[12px] lg:text-[15px] text-[#ffffff]'
                  >
                    Your subscription renews{' '}
                    <span
                      style={{ fontFamily: 'Space Grotesk_Bold' }}
                      className='text-white'
                    >
                      annually
                    </span>
                    . Your next payment of{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                      €71.88
                    </span>{' '}
                    (excluding tax and discounts) is scheduled for{' '}
                    <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                      Nov 28, 2025
                    </span>{' '}
                    — in 83 days.
                  </p>

                  {/* Card Info */}
                  <div className='flex items-center gap-3 mb-6'>
                    <img src='/Images/Myaccount/visa.svg' alt='' />
                    <p
                      style={{ fontFamily: 'Space Grotesk_Light' }}
                      className='mb-4 text-[10px] lg:text-[12px] text-[#ffffff]'
                    >
                      **** **** *** 1234
                    </p>
                    <img src='/Images/Myaccount/bin.svg' alt='' />
                  </div>
                </div>
                {/* Features */}
                <div className='md:min-w-[320px]'>
                  <p
                    style={{ fontFamily: 'Space Grotesk' }}
                    className='mb-4 text-[12px] lg:text-[14px] text-[#ffffff]'
                  >
                    You have:
                  </p>
                  <ul className='space-y-2 text-sm'>
                    <li
                      className='flex gap-[10px] text-[12px] lg:text-[15px] leading-[150$]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      <img src='/Images/Myaccount/tick.svg' alt='' /> Unlimited
                      downloads
                    </li>
                    <li
                      className='flex gap-[10px] text-[12px] lg:text-[15px] leading-[150$]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      <img src='/Images/Myaccount/tick.svg' alt='' />
                      <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                        Commercial license
                      </span>{' '}
                      (YouTube, TikTok, Twitch, podcasts)
                    </li>
                    <li
                      className='flex gap-[10px] text-[12px] lg:text-[15px] leading-[150$]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      <img src='/Images/Myaccount/tick.svg' alt='' />
                      <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                        Monetization
                      </span>{' '}
                      (1 channel per platform)
                    </li>
                    <li
                      className='flex gap-[10px] text-[12px] lg:text-[15px] leading-[150$]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      <img src='/Images/Myaccount/tick.svg' alt='' />
                      <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                        Lifetime usage{' '}
                      </span>{' '}
                      of downloaded music
                    </li>
                    <li
                      className='flex gap-[10px] text-[12px] lg:text-[15px] leading-[150$]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      <img src='/Images/Myaccount/tick.svg' alt='' />
                      <span style={{ fontFamily: 'Space Grotesk_Bold' }}>
                        {' '}
                        Lifetime usage{' '}
                      </span>{' '}
                      of downloaded music
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div
              style={{
                backgroundImage: "url('/Images/el.png')",
                backgroundRepeat: 'no-repeat'
              }}
              className='bg-[#0C0E12] px-[15px] sm:px-[20px] py-[24px] rounded-[16px] flex flex-col items-center justify-center text-center w-full max-w-[311px] max-[768px]:max-w-full custom-height'
            >
              <img
                src='/Images/Myaccount/grd.png'
                alt=''
                className='h-[120px] w-[120px] mb-[24px]'
              />
              <h2
                style={{ fontFamily: 'Space Grotesk_Bold' }}
                className='text-[#ffffff] mb-[8px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[100%]'
              >
                Distribea for Enterprise
              </h2>
              <p
                style={{ fontFamily: 'Space Grotesk_Light' }}
                className='mb-[48px] text-[11px] lg:text-[14px] text-[#ffffff]'
              >
                Add multiple members to this account, and go Unlimited.
              </p>
              <button
                style={{ fontFamily: 'Space Grotesk_Bold' }}
                className=' text-[12px] lg:text-[15px] leading-[150$] bg-[linear-gradient(91.43deg,#175CD3_-10.29%,#0C306D_108.88%)] hover:opacity-70 w-full text-center py-[15px] rounded-[999px] mb-[12px]'
              >
                Upgrade Now
              </button>
              <button
                style={{ fontFamily: 'Space Grotesk_Bold' }}
                className=' text-[12px] lg:text-[15px] leading-[150$] bg-transparent border-[0.86px] border-[#373A41] hover:opacity-70 w-full text-center py-[15px] rounded-[999px]'
              >
                Learn more
              </button>
            </div>
          </div>
        )}

        {activeTab === 'Downloads' && <Download />}
        {activeTab === 'SafeList' && <SafeList />}
        {activeTab === 'Profile' && <Profile />}
      </div>
      <Footer />
    </div>
  )
}

export default MyAccount
