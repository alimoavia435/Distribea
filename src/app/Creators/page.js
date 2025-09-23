'use client'
import dynamic from 'next/dynamic'

const Creators = dynamic(() => import('@/pages/Creators/Creators.js'), {
  ssr: false
})

export default function CreatorPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Creators />
    </div>
  )
}
