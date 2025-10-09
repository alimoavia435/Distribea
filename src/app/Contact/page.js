'use client'
import dynamic from 'next/dynamic'

const Contact = dynamic(() => import('@/pages/ContactPage/ContactPage.js'), {
  ssr: false
})

export default function LoginPage () {
  return (
    <div>
      <Contact />
    </div>
  )
}
