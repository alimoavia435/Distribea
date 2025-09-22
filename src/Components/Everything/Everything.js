import React from 'react'

const Everything = () => {
  return (
    <div
      className='px-[25px] pt-[160px] pb-[96px] flex flex-col items-center gap-[48px] bg-no-repeat max-[768px]:pt-[70px] max-[768px]:pb-[50px] max-[768px]:gap-[28px]'
      style={{ backgroundImage: "url('/Images/shadevery.png')",backgroundPosition:"center" }}
    >
      <img src='/Images/logomiddle.svg' alt='' className='max-[768px]:h-[130px]' />

      <h2
        style={{
          fontFamily: 'Space Grotesk_Bold',
          textTransform: 'capitalize'
        }}
        className='font-Space Grotesk_Bold 
  font-bold 
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-[22px] 
  leading-[110%] 
  tracking-[-1px] 
  text-center 
  text-[#F7F7F7] 
  mb-5 '
      >
        Everything You Need.. <br /> to Succeed
      </h2>
    </div>
  )
}

export default Everything
