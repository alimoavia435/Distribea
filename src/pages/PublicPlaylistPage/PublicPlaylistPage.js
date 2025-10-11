import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import PublicPlaylist from '@/Components/PublicPlaylist/PublicPlaylist'

const PublicPlaylistPage = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/hero11.webp')" }}
      className='bg-[0_0] bg-no-repeat  mx-auto overflow-x-hidden'
    >
      <Navbar />
           <PublicPlaylist />
      <Footer />
    </div>
  )
}

export default PublicPlaylistPage
