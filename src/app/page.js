'use client'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/pages/MainPage/Home.js'), {
  ssr: false
})

export default function HomePage () {
  return (
    <div>
      {/* <Learn /> */}
      <Home />
    </div>
  )
}
