'use client'
import dynamic from 'next/dynamic'

const MyAccount = dynamic(() => import('@/pages/MyAccount/MyAccount.js'), {
  ssr: false
})

export default function MyAccountPage () {
  return (
    <div>
      {/* <Learn /> */}
      <MyAccount />
    </div>
  )
}
