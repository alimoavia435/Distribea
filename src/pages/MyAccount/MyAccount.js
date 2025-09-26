import Footer from '@/Components/Footer/Footer'
import MyAccountNavbar from '@/Components/MyAccount/MyAccountNavbar/MyAccountNavbar'
import React from 'react'

const MyAccount = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero.png')" }}
      className='bg-no-repeat'
    >
      <MyAccountNavbar />

      <div className='text-white px-[25px] md:px-[56px] py-[50px] md:py-[96px]'>
        {/* Title */}
        <h1
          style={{ fontFamily: 'Space Grotesk_Medium' }}
          className='text-[23px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[48px] tracking-[-2.5px] mb-[60px] text-[#FFFFFF]'
        >
          My Account
        </h1>

        {/* Tabs */}
        <div className='flex flex-wrap gap-6 mb-[40px]'>
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
              style={{ fontFamily: 'Space Grotesk' }}
              className={`pb-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-[#94979C] hover:text-[#FFFFFF]`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className='flex gap-6 w-full'>
          {/* Subscription Card */}
          <div className='flex w-full'>
            <div>
              <h2 className='text-lg font-semibold mb-4'>
                Creator Subscription
              </h2>
              <p className='text-gray-400 text-sm mb-4'>
                Your subscription renews{' '}
                <span className='font-semibold text-white'>annually</span>. Your
                next payment of <span className='font-semibold'>€71.88</span>{' '}
                (excluding tax and discounts) is scheduled for{' '}
                <span className='font-semibold'>Nov 28, 2025</span> — in 83
                days.
              </p>

              {/* Card Info */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold'>
                  VISA
                </div>
                <p>**** **** *** 1234</p>
                <button className='text-gray-400 hover:text-red-500'>🗑️</button>
              </div>
            </div>
            {/* Features */}
            <ul className='space-y-2 text-sm'>
              <li>✔ Unlimited downloads</li>
              <li>
                ✔ <span className='font-semibold'>Commercial license</span>{' '}
                (YouTube, TikTok, Twitch, podcasts)
              </li>
              <li>✔ Monetization (1 channel per platform)</li>
              <li>✔ Lifetime usage of downloaded music</li>
              <li>✔ Lifetime usage of downloaded music</li>
            </ul>
          </div>

          {/* Enterprise Card */}
          <div className='bg-[#111] p-6 rounded-xl flex flex-col items-center justify-center text-center w-full max-w-[311px]'>
            <div className='w-16 h-16 mb-4'>
              <img
                src='https://dummyimage.com/100x100/000/fff&text=Logo'
                alt='enterprise'
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            <h2 className='text-lg font-semibold mb-2'>
              Distribea for Enterprise
            </h2>
            <p className='text-gray-400 text-sm mb-6'>
              Add multiple members to this account, and go Unlimited.
            </p>
            <button className='bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg font-semibold mb-3'>
              Upgrade Now
            </button>
            <button className='border border-gray-600 hover:bg-gray-800 w-full py-2 rounded-lg font-semibold'>
              Learn more
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyAccount
