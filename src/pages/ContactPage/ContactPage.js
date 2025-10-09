import GetIntouch from '@/Components/ContactusPage/GetIntouch/GetIntouch'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <GetIntouch/>
      <div className='pt-[50px] mx-auto max-w-[1364px] flex flex-wrap justify-center items-center gap-3  md:gap-8 mb-[30px] px-4'>
        {[1, 2, 3, 4, 5, 6, 7].map(num => (
          <div
            key={num}
            className='flex-shrink-0 w-[calc(33.33%-32px)] sm:w-[calc(25%-32px)] md:w-[calc(20%-32px)] lg:w-auto max-w-[180px] min-w-[60px]'
          >
            <Image
              src={`/Images/${num}.svg`}
              alt={`Logo ${num}`}
              width={180}
              height={68}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
