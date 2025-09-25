'use client'
import dynamic from 'next/dynamic'

const Trackdetails = dynamic(
  () => import('@/pages/TracksDetails/TracksDetails.js'),
  {
    ssr: false
  }
)

export default function TrackdetailsPage () {
  return (
    <div>
      {/* <Learn /> */}
      <Trackdetails />
    </div>
  )
}
