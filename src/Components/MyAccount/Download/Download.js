import React from 'react'

const Download = () => {
  // Updated track data
  const tracks = [
    {
      id: 1,
      title: 'Sleep in Ocean',
      date: 'Sep 6, 2025 - 06:10 AM',
      thumbnail: '/Images/Trackdetails/track1.png'
    },
    {
      id: 2,
      title: 'Vintage Moment',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track2.png'
    },
    {
      id: 3,
      title: 'I Feel Good!',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track3.png'
    },
    {
      id: 4,
      title: 'New Generation',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track4.png'
    },
    {
      id: 5,
      title: 'Culture Sound',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track5.png'
    },
    {
      id: 6,
      title: 'Our Dreams',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track4.png'
    },
    {
      id: 7,
      title: 'Classic',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track2.png'
    },
    {
      id: 8,
      title: 'Modern',
      date: 'Sep 7, 2025 - 04:15 PM',
      thumbnail: '/Images/Trackdetails/track1.png'
    },
    {
      id: 9,
      title: 'Retro',
      date: 'Sep 8, 2025 - 09:26 AM',
      thumbnail: '/Images/Trackdetails/track4.png'
    },
    {
      id: 10,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/Rectangle 3 (1).png'
    },
    {
      id: 11,
      title: 'Our Dreams',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track3.png'
    },
    {
      id: 12,
      title: 'Classic',
      date: 'Sep 6, 2025 - 04:39 AM',
      thumbnail: '/Images/Trackdetails/track1.png'
    },
    {
      id: 13,
      title: 'Modern',
      date: 'Sep 7, 2025 - 04:15 PM',
      thumbnail: '/Images/Trackdetails/Rectangle 3 (1).png'
    },
    {
      id: 14,
      title: 'Retro',
      date: 'Sep 8, 2025 - 09:26 AM',
      thumbnail: '/Images/Trackdetails/track5.png'
    },
    {
      id: 15,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/Rectangle 3 (1).png'
    },
    {
      id: 16,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/track1.png'
    },
    {
      id: 17,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/track4.png'
    },
    {
      id: 18,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/Rectangle 3 (1).png'
    },
    {
      id: 19,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/track1.png'
    },
    {
      id: 20,
      title: 'Futuristic',
      date: 'Sep 9, 2025 - 11:50 PM',
      thumbnail: '/Images/Trackdetails/Rectangle 3 (1).png'
    }
  ]

  return (
    <div className='px-[15px] py-[30px]'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <h2
          style={{ fontFamily: 'Space Grotesk_Medium' }}
          className='text-[#ffffff] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[100%]'
        >
          354 Tracks found!
        </h2>
        <div className='relative'>
          <select
            style={{ fontFamily: 'Space Grotesk_Medium' }}
            className='text-[#ffffff] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[100%] focus:outline-none'
          >
            <option value='latest' className='bg-black text-white'>
              Latest
            </option>
            <option value='oldest' className='bg-black text-white'>
              Oldest
            </option>
            <option value='popular' className='bg-black text-white'>
              Popular
            </option>
          </select>
          {/* <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div> */}
        </div>
      </div>

      {/* Tracks List */}
      <div className='space-y-4 mb-8'>
        {tracks.map(track => (
          <div
            key={track.id}
            className='flex items-center  rounded-lg md:px-4 py-4  transition-colors justify-between gap-[10px]'
          >
            <div className='flex items-start gap-[8px] sm:gap-[10px] md:gap-[20px]'>
              <img
                src={track.thumbnail}
                alt={track.title}
                className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-md object-cover'
              />
              <div>
                <h3
                  className='text-[#F9F9F9] text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  {/* {track.title.length > 8
                      ? `${track.title.slice(0, 10)}...`
                      : track.title} */}
                  {track.title}
                </h3>
                <p
                  style={{ fontFamily: 'Space Grotesk' }}
                  className=' text-[#F9F9F9] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] opacity-70'
                >
                  {track.date}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-[7px] sm:gap-[15px] md:gap-[36px]'>
              {/* Get Licenses Button */}
              <div className='flex items-center gap-[5px] sm:gap-[10px]'>
                <img src='/Images/Myaccount/verfied.svg' alt='' />
                <p
                  className='text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] text-[#ffffff]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Get Licenses
                </p>
              </div>

              {/* Download Button */}
              <button className='border-[0.91px] border-white text-white hover:opacity-70 hover:text-black max-[500px]:px-1 px-2 py-1 sm:px-4 sm:py-2 rounded-[909px] flex items-center gap-[5px] transition-colors'>
                <img
                  src='/Images/Myaccount/dn.svg'
                  alt='dn'
                  className='h-[12px] md:h-[20px]'
                />
                <p
                  className='max-[500px]:hidden text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] text-[#ffffff]'
                  style={{ fontFamily: 'Space Grotesk_Medium' }}
                >
                  Download
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center space-x-2'>
        <button className='bg-white text-black px-4 py-2 rounded-lg font-medium'>
          1
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          2
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          3
        </button>
        <span className='text-white px-2'>...</span>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          8
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          9
        </button>
        <button className='text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors'>
          10
        </button>
      </div>
    </div>
  )
}

export default Download
