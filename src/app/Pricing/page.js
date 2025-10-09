'use client'
import dynamic from 'next/dynamic'

const Pricing = dynamic(() => import('@/pages/Pricing/PricingPage.js'), {
  ssr: false
})

export default function LoginPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Pricing />
    </div>
  )
}
