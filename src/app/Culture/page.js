'use client'
import dynamic from 'next/dynamic'

const Culture = dynamic(() => import('@/pages/Culture/Culture.js'), {
  ssr: false
})

export default function CulturePage () {
  return (
    <div>
      {/* <Learn /> */}
      <Culture />
    </div>
  )
}
