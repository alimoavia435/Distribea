// components/DashboardCards.tsx
import Image from 'next/image'
import { useState } from 'react'

export default function Profile () {
  const [profileData, setProfileData] = useState({
    name: 'Julien Dupont',
    email: 'juliendupont@email.com'
  })
  
  // Modal states
  const [showEditModal, setShowEditModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })

  // Edit profile
  const handleEdit = () => {
    setFormData({
      name: profileData.name,
      email: profileData.email
    })
    setShowEditModal(true)
  }

  // Save edited profile
  const handleSaveEdit = () => {
    if (formData.name.trim() && formData.email.trim()) {
      setProfileData({
        name: formData.name.trim(),
        email: formData.email.trim()
      })
      setFormData({ name: '', email: '' })
      setShowEditModal(false)
    }
  }

  // Cancel modal
  const handleCancel = () => {
    setFormData({ name: '', email: '' })
    setShowEditModal(false)
  }
  return (
    <div
      className='
    flex flex-col items-center justify-center py-[25px]           
    sm:pt-12 sm:pb-24 
    md:pt-[40px] 
    md:pb-[160px] 
    
  '
    >
      <div className='max-w-[1328px] w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 sm:gap-y-[24px] gap-x-4 sm:gap-x-[24px]'>
        {/* Card 1 */}
        <div className='w-full align-center  flex flex-col gap-12 px-5 py-6 rounded-[16px] bg-[#0C0E12]'>
          <div className='flex items-center gap-4'>
            <div className='w-[56px] h-[56px] rounded-full overflow-hidden'>
              <Image
                src='/Images/listicon/shapee.png' // replace with your image
                alt='Profile'
                width={64}
                height={64}
                className='object-cover'
              />
            </div>
            <div>
              <h2 className='text-white text-[18px] leading-[100%] font-medium tracking-normal font-[Space_Grotesk]'>
                {profileData.name}
              </h2>
              <p className='text-[#C0C0C0] text-sm'>{profileData.email}</p>
            </div>
            <div className='ml-auto cursor-pointer' onClick={handleEdit}>
              <Image
                src='/Images/listicon/edit1.png' // replace with your image
                alt='edit icon'
                width={20}
                height={20}
                className='object-cover'
              />
            </div>
          </div>
          <p className='text-[#A0A0A0] text-sm  text-center'>
            Active since Jan 24, 2025
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-full flex flex-col gap-10 p-5 rounded-[16px] bg-[#0C0E12]'>
          <p
            className='text-white text-md font-medium leading-6 tracking-normal '
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            Downloads this month
          </p>

          <div className='flex flex-col gap-[12px]'>
            <h1
              className='text-white text-[30px] leading-9 font-bold font-[Space_Grotesk]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              703
            </h1>
            <div className='flex flex-row gap-[12px] w-full'>
              <div className='flex flex-row items-center gap-[12px] w-full max-w-[258px]'>
                <Image
                  src='/Images/listicon/greenar.png' // replace with your image
                  alt='edit1'
                  width={20}
                  height={20}
                  className='object-cover'
                />
                <p
                  className='  text-[#079455]  text-sm font-medium'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  12%{' '}
                  <span
                    style={{
                      fontFamily: 'Space Grotesk'
                    }}
                    className='text-sm font-normal leading-5 tracking-normal text-white/70 font-[Space_Grotesk]'
                  >
                    vs last month
                  </span>
                </p>
              </div>

              {/* your green chart image */}
              <Image
                src='/Images/listicon/greenr.png'
                alt='Chart'
                width={112}
                height={56}
                className='w-[112px] h-[56px] object-contain'
                priority
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full flex flex-col gap-10 p-5 rounded-[16px] bg-[#0C0E12]'>
          <p
            className='text-white text-md font-medium leading-6 tracking-normal '
            style={{ fontFamily: 'Space Grotesk_Medium' }}
          >
            All time Downloads
          </p>
          <div className='flex flex-col gap-[12px]'>
            <h1
              className='text-white text-[30px] leading-9 font-bold font-[Space_Grotesk]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              12.5k
            </h1>
            <div className='flex flex-row gap-[12px] w-full'>
              <div className='flex flex-row items-center gap-[12px] w-full max-w-[258px]'>
                <Image
                  src='/Images/listicon/redar.png' // replace with your image
                  alt='edit1'
                  width={20}
                  height={20}
                  className='object-cover'
                />
                <p
                  className='  text-[#D92D20]  text-sm font-medium'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  12%{' '}
                  <span
                    style={{
                      fontFamily: 'Space Grotesk'
                    }}
                    className='text-sm font-normal leading-5 tracking-normal text-white/70 font-[Space_Grotesk]'
                  >
                    vs last month
                  </span>
                </p>
              </div>

              {/* your green chart image */}
              <Image
                src='/Images/listicon/redg.png'
                alt='Chart'
                width={112}
                height={56}
                className='w-[112px] h-[56px] object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div
         style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter:'blur(5px)'
          }}
        className='fixed inset-0 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-[#1a1a1a] rounded-[12px] p-6 w-full max-w-md mx-4'>
            <h3
              className='text-white text-xl font-medium mb-4'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Edit Profile
            </h3>
            <div className='space-y-4'>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Name
                </label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Email
                </label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter your email'
                />
              </div>
            </div>
            <div className='flex gap-3 mt-6'>
              <button
                onClick={handleSaveEdit}
                className='flex-1 bg-[#007bff] text-white py-2 px-4 rounded-[8px] hover:bg-[#0056b3] transition-colors'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className='flex-1 bg-[#333] text-[#CECFD2] py-2 px-4 rounded-[8px] hover:bg-[#444] transition-colors'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
