'use client'
import dynamic from 'next/dynamic'

const Signup = dynamic(() => import('@/pages/Signup/Signup.js'), {
  ssr: false
})

export default function LoginPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Signup />
    </div>
  )
}
