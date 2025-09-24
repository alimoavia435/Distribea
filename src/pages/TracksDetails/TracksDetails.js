import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const TracksDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[64px] pb-[96px] flex flex-col px-[30px] items-center'>
        <p style={{ fontFamily: 'Space Grotesk' }}
        className='text-[#FAFAFA80]'
        >
          CREATOR / Entertainment / Gaming / INTO THE BLUE
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default TracksDetails
