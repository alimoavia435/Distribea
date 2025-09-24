'use client'
import dynamic from 'next/dynamic'

const Genre = dynamic(() => import('@/pages/Genre/Genre.js'), {
  ssr: false
})

export default function GenrePage () {
  return (
    <div>
      {/* <Learn /> */}
      <Genre />
    </div>
  )
}
