'use client'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/Pages/HomePage/HomePage'), {
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
