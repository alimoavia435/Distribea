'use client'
import dynamic from 'next/dynamic'

const Lifestyle = dynamic(() => import('@/pages/Lifestyle/Lifestyle.js'), {
  ssr: false
})

export default function LifestylePage () {
  return (
    <div>
      {/* <Learn /> */}
      <Lifestyle />
    </div>
  )
}
