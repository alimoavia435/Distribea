'use client'
import dynamic from 'next/dynamic'

const PublicPlaylistPage = dynamic(() => import('@/pages/PublicPlaylistPage/PublicPlaylistPage.js'), {
  ssr: false
})

export default function PublicPlaylistPagePage () {
  return (
    <div>
   
      <PublicPlaylistPage />
    </div>
  )
}
