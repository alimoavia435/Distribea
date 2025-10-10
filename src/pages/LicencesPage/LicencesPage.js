import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import Licences from '@/Components/LicencesPage/Licences'

const LicencesPage = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero11.webp')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
           <Licences />
      <Footer />
    </div>
  )
}

export default LicencesPage
