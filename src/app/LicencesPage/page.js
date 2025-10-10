'use client'
import dynamic from 'next/dynamic'

const LicencesPage = dynamic(() => import('@/pages/LicencesPage/LicencesPage.js'), {
  ssr: false
})

export default function LicencesPagePage () {
  return (
    <div>
   
      <LicencesPage />
    </div>
  )
}
