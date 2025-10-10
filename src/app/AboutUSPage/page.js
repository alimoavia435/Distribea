'use client'
import dynamic from 'next/dynamic'

const AboutUSPage = dynamic(() => import('@/pages/AboutUSPage/AboutUSPage.js'), {
  ssr: false
})

export default function AboutUSPagePage () {
  return (
    <div>
   
      <AboutUSPage />
    </div>
  )
}
