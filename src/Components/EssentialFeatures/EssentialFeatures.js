// components/EssentialFeatures.tsx
import React, { useState } from 'react'
import Image from 'next/image'
export default function EssentialFeatures() {
  return (
    <div  style={{ backgroundImage: "url('/Images/mara.png')" }} className=" bg-no-repeat">
    <section
   
  className="bg-cover bg-center bg-no-repeat text-white 
              px-[18px] py-[40] lg:px-[56px] lg:pt-[160px] lg:pb-[96px]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
      <h2   style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}  className="font-Space Grotesk_Bold 
  font-bold 
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-[22px] 
  leading-[110%] 
  tracking-[-1px] 
  text-center 
  text-[#F7F7F7] 
  mb-5">
          Essential Features
        </h2>
 <p className=" mx-auto max-w-[900px]  text-[#CECFD2] text-[16px] md:text-[20px] lg:text-[18px] mb-12   lg:mb-20  font-normal leading-[28px] text-center  " style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }} >
  Key Features to Protect Your Content, Avoid Copyright Strikes, and Maximize Earnings
</p>


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Images/music.svg" // <-- replace with your actual image path
              alt="Tracks"
              className="w-14 h-14 mb-6"
                width={48}
                height={48}
            />
            <h3 className="text-lg font-semibold mb-3"  style={{ fontFamily: 'Space Grotesk_Bold' }} >
              🎵 +50K Tracks Available
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }}>
              Access over <span className="font-semibold">50,000 royalty-free tracks</span> 
              for YouTube, Twitch, TikTok, podcasts, and ads. One license, unlimited usage—
              no restrictions, no hidden costs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
         <Image
              src="/Images/company.svg" // <-- replace with your actual image path
              alt="Clients"
              className="w-14 h-14 mb-6"
               width={48}
                height={48}
            />
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Space Grotesk_Bold' }}>
              🏢 +700 Client Companies
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }}>
              Trusted by more than <span className="font-semibold">700 global companies</span>.
              Protect your content, avoid copyright strikes, and keep your revenue streams safe.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
       <Image
              src="/Images/download.svg" // <-- replace with your actual image path
              alt="Downloads"
              className="w-14 h-14 mb-6"
               width={48}
                height={48}
            />
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Space Grotesk_Bold' }}>
              📈 +5k Downloads per Day
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }}>
              Join creators generating over <span className="font-semibold">5,000 daily downloads</span>.
              Ensure consistent monetization, transparent earnings, and uninterrupted income flow.
            </p>
          </div>

        </div>
      </div>
    </section>
     <div className=" text-white 
               text-center  px-[16px] py-[30] lg:px-[56px] lg:pt-[96px] lg:pb-[96px]">
          {/* Heading */}
     <h2   style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}  className="font-Space Grotesk_Bold 
      font-bold 
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-[22px] 
      leading-[110%] 
      tracking-[-1px] 
      text-center 
      text-[#F7F7F7] 
      mb-5">
            Monetization Without Limits
          </h2>
    
          {/* Subtext */}
     <p className=" mx-auto max-w-[900px]  text-[#CECFD2] text-[16px] md:text-[20px] lg:text-[18px] mb-12   lg:mb-20  font-normal leading-[28px] text-center  " style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }} >
            Distribute to all major platforms and streaming services including Apple, Spotify,
            YouTube, Deezer, Amazon, TikTok, Facebook, Instagram, and many more.
          </p>
    
        {/* Logos Section */}
    <div className="mx-auto max-w-[794px] flex flex-wrap justify-center items-center gap-8 mb-12 px-4">
      {[1,2,3,4,5,6,7].map((num) => (
        <div
          key={num}
          className="flex-shrink-0 w-[calc(33.33%-32px)] sm:w-[calc(25%-32px)] md:w-[calc(20%-32px)] lg:w-auto max-w-[180px] min-w-[60px]"
        >
          <Image
            src={`/Images/${num}.svg`}
            alt={`Logo ${num}`}
            width={180}
            height={68}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
    
    
    
    
          {/* CTA Button */}
          <div>
          <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
      className="w-[158px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
                 shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
                 text-white font-bold text-md leading-md
                 transition-all hover:bg-[#154ab8]"
    >
      Start For Free
    </button>
    
          </div>
        </div>
    </div>

  );
}
