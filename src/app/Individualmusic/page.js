'use client'
import dynamic from 'next/dynamic'

const Individualmusic = dynamic(() => import('@/pages/IndividualMusic/Individualmusic.js'), {
  ssr: false
})

export default function IndividualmusicPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Individualmusic />
    </div>
  )
}
