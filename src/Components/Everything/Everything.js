import React from 'react'
import Image from 'next/image'

const Everything = () => {
  return (
    <div
      className='px-[25px] pt-[160px] pb-[96px] flex flex-col items-center gap-[48px] bg-no-repeat max-[768px]:pt-[90px] max-[768px]:pb-[60px] max-[768px]:gap-[28px]'
      style={{ backgroundImage: "url('/Images/shadevery.png')",backgroundPosition:"center" }}
    >
      <Image 
        src='/Images/logomiddle.svg' 
        alt='Distribea Logo' 
        width={200}
        height={130}
        className='max-[768px]:h-[130px]'
        priority
      />

      <h2
        style={{
          fontFamily: 'Space Grotesk_Bold',
          textTransform: 'capitalize'
        }}
        className='font-Space Grotesk_Bold 
  font-bold 
text-[31px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[56px] 
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
