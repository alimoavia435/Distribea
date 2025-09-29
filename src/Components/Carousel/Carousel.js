import React, { useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        'Finally a royalty free music platform I can trust. No more copyright claims, no lost revenue—just quality tracks that make my videos stand out. Highly recommend!',
      name: 'Alex Carter',
      title: 'Music Producer & Sound Engineer',
      image: '/Images/prof.svg', // You'll need to add this image to your public folder
      rating: 5
    },
    {
      quote:
        'I had been waiting for a platform like Distribea! Everything is simple and clear, with an elegant design that’s a pleasure to use.  I just go to the music category I need and instantly find the perfect fit',
      name: '— Sarah Giroud',
      title: '',
      image: '/Images/prof.svg', // You'll need to add this image to your public folder
      rating: 5
    }
    ,
    {
      quote:
        '"I used to spend so much time searching for the right music, but not anymore. The platform is clear, well-designed, and always delivers relevant results. Exactly what I’ve been waiting for!"',
      name: 'John Doe',
      title: 'American Singer',
      image: '/Images/prof.svg', // You'll need to add this image to your public folder
      rating: 5
    }
    // Add more testimonials here as needed
  ]

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className='bg-transparent flex flex-col items-center justify-center px-4 py-[100px]'>
      {/* 5-Star Rating */}
      <div className='flex justify-center mb-8'>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className='w-6 h-6 text-[#F68A29] fill-current'
            viewBox='0 0 24 24'
          >
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        ))}
      </div>

      {/* Main Testimonial Content */}
      <div className='max-w-4xl mx-auto text-center relative'>
        {/* Stylized Quotation Marks */}
        <img
          src='/Images/2.png'
          className='absolute left-[-144px] top-[-60px] max-[1300px]:left-[-70px] max-[768px]:h-[40px] max-[768px]:left-[-30px] max-[400px]:left-[0px] max-[475px]:h-[30px]'
          alt=''
        />
        <img src='/Images/“.png' className='absolute  right-[-100px] bottom-[100px] max-[1300px]:right-[-50px] max-[768px]:right-[-20px] max-[768px]:right-[10px] max-[768px]:h-[40px] max-[475px]:h-[30px]' alt='' />

        {/* Testimonial Quote */}
        <blockquote
          className=' text-white xl:text-[36px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[16px] leading-[140%] mb-[25px] lg:mb-[40px] xl:mb-[48px]   px-[25px] max-w-[300px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[980px]'
          style={{ fontFamily: 'Space Grotesk_Medium' }}
        >
          {`"${currentTestimonial.quote}"`}
        </blockquote>

        {/* Customer Profile */}
        <div className='flex items-center justify-center space-x-4 mb-12'>
          {/* Profile Image */}
          <Image
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            width={60}
            height={60}
            className="rounded-full"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />

          {/* Name and Title */}
          <div className='text-left'>
            <h3
              className='text-white xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
            >
              {currentTestimonial.name}
            </h3>
            <p
              className='text-[#94979C] xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[11px] text-[11px]'
              style={{ fontFamily: 'Space Grotesk' }}
            >
              {currentTestimonial.title}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className='flex justify-center space-x-4'>
        <button
          onClick={prevTestimonial}
          className='w-12 h-12 rounded-full bg-black border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors'
        >
          <Image src='/Images/left.svg' alt='Previous' width={24} height={24} />
        </button>

        <button
          onClick={nextTestimonial}
          className='w-12 h-12 rounded-full bg-black border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors'
        >
          <Image src='/Images/right.svg' alt='Next' width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
