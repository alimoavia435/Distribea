import React, { useState } from 'react'
import Image from 'next/image'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const GetIntouch = () => {
  const [projectType, setProjectType] = useState('')
  const [numTracks, setNumTracks] = useState('')
  const [deadline, setDeadline] = useState('')
  const [projectTypeOpen, setProjectTypeOpen] = useState(false)
  const [numTracksOpen, setNumTracksOpen] = useState(false)
  const [deadlineOpen, setDeadlineOpen] = useState(false)
  return (
    <section className=' text-white'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:pr-[50px] xl:pr-[120px] gap-[70px] lg:gap-12'>
        {/* Left: Hero Image */}
        <div className='w-full flex justify-center lg:justify-start'>
          <Image
            src='/Images/contactus/getleft.webp'
            alt='Person on a phone, contact us'
            width={720}
            height={1065}
            className='w-full object-cover lg:max-w-[720px] lg:min-w-[480px] max-h-[1065px]'
            priority
          />
        </div>

        {/* Right: Form */}
        <div className='w-full lg:max-w-[480px] mt-[40px] lg:mt-0 px-5 sm:px-6 lg:px-0'>
          <h2
            className='text-[#F7F7F7] text-[32px] md:text-[50px] lg:text-[64px] tracking-[-2px]'
            style={{ fontFamily: 'Space Grotesk_Bold' }}
          >
            Get In Touch
          </h2>
          <p
            className='mt-[5px] text-[15px] md:text-[18px] leading-[170%] text-[#94979C]'
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Our friendly team would love to hear from you.
          </p>

          <form className='mt-[32px] md:mt-[48px] space-y-5'>
            {/* Name */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Name <span className='text-[#7F56D9]'>*</span>
              </label>
              <input
                type='text'
                placeholder='your name'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Email <span className='text-[#7F56D9]'>*</span>
              </label>
              <input
                type='email'
                placeholder='you@company.com'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Project Type <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <Select
                  displayEmpty
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  IconComponent={() => null}
                  open={projectTypeOpen}
                  onOpen={() => setProjectTypeOpen(true)}
                  onClose={() => setProjectTypeOpen(false)}
                  sx={{ height: 52, '& .MuiSelect-select': { py: 0, height: 52, lineHeight: '52px', color: projectType ? '#ffffff' : '#717680' } }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#080808',
                        borderRadius: '8px',
                        '& .MuiMenuItem-root': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root:hover': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected:hover': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                      },
                    },
                  }}
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light', borderRadius: '8px' }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return 'Select a type..'
                    }
                    return <span className='text-white'>{selected}</span>
                  }}
                >
                  <MenuItem disabled value="" className='bg-[#080808] text-[#717680]' style={{ backgroundColor: '#fafafa14' }}>Select a type..</MenuItem>
                  <MenuItem value={'Commercial'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Commercial</MenuItem>
                  <MenuItem value={'Film/TV'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Film/TV</MenuItem>
                  <MenuItem value={'Game'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Game</MenuItem>
                  <MenuItem value={'Other'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Other</MenuItem>
                </Select>
                <button type='button' onClick={() => setProjectTypeOpen(true)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desired number of tracks */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Desired number of tracks <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <Select
                  displayEmpty
                  value={numTracks}
                  onChange={(e) => setNumTracks(e.target.value)}
                  IconComponent={() => null}
                  open={numTracksOpen}
                  onOpen={() => setNumTracksOpen(true)}
                  onClose={() => setNumTracksOpen(false)}
                  sx={{ height: 52, '& .MuiSelect-select': { py: 0, height: 52, lineHeight: '52px', color: numTracks ? '#ffffff' : '#717680' } }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#080808',
                        borderRadius: '8px',
                        '& .MuiMenuItem-root': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root:hover': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected:hover': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                      },
                    },
                  }}
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light', borderRadius: '8px' }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return '1 - 10,000'
                    }
                    return <span className='text-white'>{selected}</span>
                  }}
                >
                  <MenuItem disabled value="" className='bg-[#080808] text-[#717680]' style={{ backgroundColor: '#fafafa14' }}>1 - 10,000</MenuItem>
                  <MenuItem value={'1 - 100'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>1 - 100</MenuItem>
                  <MenuItem value={'100 - 1,000'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>100 - 1,000</MenuItem>
                  <MenuItem value={'1,000 - 10,000'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>1,000 - 10,000</MenuItem>
                  <MenuItem value={'10,000+'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>10,000+</MenuItem>
                </Select>
                <button type='button' onClick={() => setNumTracksOpen(true)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Deadline */}
            <div>
              <label
                className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
                style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Deadline <span className='text-[#7F56D9]'>*</span>
              </label>
              <div className='relative'>
                <Select
                  displayEmpty
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  IconComponent={() => null}
                  open={deadlineOpen}
                  onOpen={() => setDeadlineOpen(true)}
                  onClose={() => setDeadlineOpen(false)}
                  sx={{ height: 52, '& .MuiSelect-select': { py: 0, height: 52, lineHeight: '52px', color: deadline ? '#ffffff' : '#717680' } }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#080808',
                        borderRadius: '8px',
                        '& .MuiMenuItem-root': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root:hover': {
                          bgcolor: '#080808',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                        '& .MuiMenuItem-root.Mui-selected:hover': {
                          bgcolor: '#080808 !important',
                          color: '#ffffff !important',
                        },
                      },
                    },
                  }}
                  className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full appearance-none rounded-xl bg-[#FAFAFA14] border-none px-4 py-3 pr-10 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none text-[#717680]'
                  style={{ fontFamily: 'Space Grotesk_Light', borderRadius: '8px' }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return 'Before 30 days'
                    }
                    return <span className='text-white'>{selected}</span>
                  }}
                >
                  <MenuItem disabled value="" className='bg-[#080808] text-[#717680]' style={{ backgroundColor: '#fafafa14' }}>Before 30 days</MenuItem>
                  <MenuItem value={'ASAP'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>ASAP</MenuItem>
                  <MenuItem value={'Within 2 weeks'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Within 2 weeks</MenuItem>
                  <MenuItem value={'Within 30 days'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Within 30 days</MenuItem>
                  <MenuItem value={'Flexible'} className='bg-[#080808] text-white' style={{ backgroundColor: '#fafafa14' }}>Flexible</MenuItem>
                </Select>
                <button type='button' onClick={() => setDeadlineOpen(true)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
               className='block text-[13px] md:text-[14px] text-[#F9F9F9] mb-2'
               style={{ fontFamily: 'Space Grotesk_Medium' }}
              >
                Message <span className='text-[#7F56D9]'>*</span>
              </label>
              <textarea
                rows={5}
                placeholder='Leave us a message...'
                className='shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] w-full rounded-xl bg-[#FAFAFA14] border-none  px-4 py-3 text-[14px] md:text-[16px] placeholder-[#717680] outline-none focus:border-none'
                style={{ fontFamily: 'Space Grotesk_Light' }}
              />
            </div>

            {/* Terms */}
            <label className='flex items-start gap-3 text-[12px] md:text-[14px] text-[#9CA3AF]'>
              <Image src="/Images/contactus/uncheck.svg" width={22} height={22} alt="" />
              <span style={{ fontFamily: 'Space Grotesk' }}>
                You agree to our friendly{' '}
                <a href='/privacy' className='underline hover:text-white'>
                  privacy policy
                </a>
                .
              </span>
            </label>

            <button
              type='submit'
              className='w-full rounded-full bg-[#175CD3] hover:bg-[#1D4ED8] transition-colors text-white py-3 text-[16px]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetIntouch
