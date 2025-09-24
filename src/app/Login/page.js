'use client'
import dynamic from 'next/dynamic'

const Login = dynamic(() => import('@/pages/Login/Login.js'), {
  ssr: false
})

export default function LoginPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Login />
    </div>
  )
}
