'use client'
import dynamic from 'next/dynamic'

const Moods = dynamic(() => import('@/pages/Moods/Moods.js'), {
  ssr: false
})

export default function MoodsPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Moods />
    </div>
  )
}
