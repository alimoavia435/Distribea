import React, { useState } from 'react'

export default function SafeList () {
  // State management for all social platforms
  const [socialData, setSocialData] = useState({
    youtube: [
      {
        id: 1,
        name: 'JazzOne',
        link: 'https://www.youtube.com/@JazzOne'
      },
      {
        id: 2,
        name: 'DNA Music',
        link: 'https://www.youtube.com/@DNAMusic1'
      }
    ],
    tiktok: [
      {
        id: 3,
        name: 'JazzOne TikTok',
        link: 'https://www.tiktok.com/@jazzone'
      },
      {
        id: 4,
        name: 'DNA Music TikTok',
        link: 'https://www.tiktok.com/@dnamusic'
      }
    ],
    instagram: [
      {
        id: 5,
        name: 'JazzOne Instagram',
        link: 'https://www.instagram.com/jazzone'
      },
      {
        id: 6,
        name: 'DNA Music Instagram',
        link: 'https://www.instagram.com/dnamusic'
      }
    ],
    facebook: [
      {
        id: 7,
        name: 'JazzOne Facebook',
        link: 'https://www.facebook.com/jazzone'
      },
      {
        id: 8,
        name: 'DNA Music Facebook',
        link: 'https://www.facebook.com/dnamusic'
      }
    ],
    twitch: []
  })

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [currentPlatform, setCurrentPlatform] = useState('')
  const [formData, setFormData] = useState({ name: '', link: '' })

  // Add new item
  const handleAdd = platform => {
    setCurrentPlatform(platform)
    setFormData({ name: '', link: '' })
    setShowAddModal(true)
  }

  // Edit item
  const handleEdit = (platform, item) => {
    setCurrentPlatform(platform)
    setEditingItem(item)
    setFormData({ name: item.name, link: item.link })
    setShowEditModal(true)
  }

  // Delete item
  const handleDelete = (platform, itemId) => {
    setSocialData(prev => ({
      ...prev,
      [platform]: prev[platform].filter(item => item.id !== itemId)
    }))
  }

  // Save new item
  const handleSaveAdd = () => {
    if (formData.name.trim() && formData.link.trim()) {
      const newItem = {
        id: Date.now(),
        name: formData.name.trim(),
        link: formData.link.trim()
      }

      setSocialData(prev => ({
        ...prev,
        [currentPlatform]: [...prev[currentPlatform], newItem]
      }))

      setFormData({ name: '', link: '' })
      setShowAddModal(false)
    }
  }

  // Save edited item
  const handleSaveEdit = () => {
    if (formData.name.trim() && formData.link.trim()) {
      setSocialData(prev => ({
        ...prev,
        [currentPlatform]: prev[currentPlatform].map(item =>
          item.id === editingItem.id
            ? {
                ...item,
                name: formData.name.trim(),
                link: formData.link.trim()
              }
            : item
        )
      }))

      setFormData({ name: '', link: '' })
      setEditingItem(null)
      setShowEditModal(false)
    }
  }

  // Cancel modal
  const handleCancel = () => {
    setFormData({ name: '', link: '' })
    setEditingItem(null)
    setShowAddModal(false)
    setShowEditModal(false)
  }

  // Social platform configuration
  const platforms = [
    {
      key: 'youtube',
      name: 'Youtube',
      icon: '/Images/listicon/youtube.png',
      alt: 'youtube'
    },
    {
      key: 'tiktok',
      name: 'TikTok',
      icon: '/Images/listicon/tiktok.png',
      alt: 'tiktok'
    },
    {
      key: 'instagram',
      name: 'Instagram',
      icon: '/Images/listicon/instagram.png',
      alt: 'instagram'
    },
    {
      key: 'facebook',
      name: 'Facebook',
      icon: '/Images/listicon/Facebook.png',
      alt: 'facebook'
    },
    {
      key: 'twitch',
      name: 'Twitch',
      icon: '/Images/listicon/twitch.png',
      alt: 'twitch'
    }
  ]

  // Render social platform section
  const renderPlatformSection = platform => {
    const data = socialData[platform.key]
    const count = data.length

    return (
      <div key={platform.key} className='text-white flex flex-col gap-3 w-full'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={platform.icon} alt={platform.alt} className='w-8 h-8' />
            <h2
              className='
                font-medium 
                text-[18px] sm:text-[20px] 
                leading-[24px] 
                text-white
              '
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              {platform.name}{' '}
              <span
                className='
                  font-[Space_Grotesk] 
                  font-light 
                  text-[16px] sm:text-[18px] 
                  leading-[24px] 
                  text-gray-400
                '
              >
                ({count})
              </span>
            </h2>
          </div>
          <button
            onClick={() => handleAdd(platform.key)}
            className='
              font-normal 
              text-[14px] sm:text-[16px] 
              leading-[24px] 
              text-[#CECFD2] 
              hover:underline
              cursor-pointer
            '
            style={{ fontFamily: 'Space Grotesk' }}
          >
            + Add new
          </button>
        </div>

        {/* List */}
        <div className='space-y-3 md:space-y-5 w-full'>
          {data.map(item => (
            <div
              key={item.id}
              className='
                flex flex-col sm:flex-row items-center sm:items-center justify-between 
                bg-[#0C0E12] 
                rounded-[12px] 
                p-3 sm:p-4 md:px-4 md:py-5  
                gap-5
              '
            >
              <div className='flex flex-col items-center sm:flex-row gap-5'>
                <span
                  className='
                    font-[Space_Grotesk] 
                    font-normal 
                    text-[14px] sm:text-[15px] 
                    leading-[140%] 
                    text-[#F7F7F7]
                  '
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {item.name}
                </span>

                <a
                  href={item.link}
                  className='
                    font-[Space_Grotesk] 
                    font-normal 
                    text-[12px] sm:text-[15px] 
                    leading-[140%] 
                    text-center 
                    text-[#94979C] 
                    truncate max-w-[250px] sm:max-w-none
                  '
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {item.link}
                </a>
              </div>
              <div className='flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0'>
                <button
                  onClick={() => handleEdit(platform.key, item)}
                  className='cursor-pointer'
                >
                  <img
                    src='/Images/listicon/edit.png'
                    alt='edit'
                    className='w-[18px] h-[18px] sm:w-[18px] sm:h-[18px] min-h-[18px] min-w-[18px]'
                  />
                </button>
                <button
                  onClick={() => handleDelete(platform.key, item.id)}
                  className='cursor-pointer'
                >
                  <img
                    src='/Images/listicon/trash.png'
                    alt='trash'
                    className='w-[18px] h-[18px] sm:w-[18px] sm:h-[18px] min-h-[18px] min-w-[18px]'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div
      className='
        flex flex-col items-center justify-center 
        py-[25px] sm:pb-24 md:pt-[60px] md:pb-[160px] 
      '
    >
      <div className='max-w-[1328px] w-full grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-[48px] gap-x-4  xl:gap-x-[70px] sm:gap-x-[10px]'>
        {/* Render first 4 platforms in 2x2 grid */}
        {platforms.slice(0, 4).map(renderPlatformSection)}
      </div>

      {/* Twitch section - full width below */}
      <div className='max-w-[1328px] w-full mt-[24px] md:mt-[48px]'>
        {renderPlatformSection(platforms[4])}
      </div>
      {/* Add Modal */}
      {showAddModal && (
        <div
          style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)'
          }}
          className='fixed inset-0 bg-opacity-50 flex items-center justify-center z-50'
        >
          <div className='bg-[#1a1a1a] rounded-[12px] p-6 w-full max-w-md mx-4'>
            <h3
              className='text-white text-xl font-medium mb-4'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Add New {platforms.find(p => p.key === currentPlatform)?.name}{' '}
              Account
            </h3>
            <div className='space-y-4'>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Account Name
                </label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter account name'
                />
              </div>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Link
                </label>
                <input
                  type='url'
                  value={formData.link}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, link: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter profile link'
                />
              </div>
            </div>
            <div className='flex gap-3 mt-6'>
              <button
                onClick={handleSaveAdd}
                className='flex-1 bg-[#007bff] text-white py-2 px-4 rounded-[8px] hover:bg-[#0056b3] transition-colors'
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Add
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

      {/* Edit Modal */}
      {showEditModal && (
        <div
          style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)'
          }}
          className='fixed inset-0 bg-opacity-50 flex items-center justify-center z-50'
        >
          <div className='bg-[#1a1a1a] rounded-[12px] p-6 w-full max-w-md mx-4'>
            <h3
              className='text-white text-xl font-medium mb-4'
              style={{ fontFamily: 'Space Grotesk_Medium' }}
            >
              Edit {platforms.find(p => p.key === currentPlatform)?.name}{' '}
              Account
            </h3>
            <div className='space-y-4'>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Account Name
                </label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter account name'
                />
              </div>
              <div>
                <label
                  className='block text-[#CECFD2] text-sm mb-2'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Link
                </label>
                <input
                  type='url'
                  value={formData.link}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, link: e.target.value }))
                  }
                  className='w-full bg-[#0C0E12] border border-[#333] rounded-[8px] px-3 py-2 text-white focus:outline-none focus:border-[#555]'
                  placeholder='Enter profile link'
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
