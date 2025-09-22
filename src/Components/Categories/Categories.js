// app/page.tsx or components/Categories.tsx
import React from "react";
import "./Categories.css"
import Image from "next/image";

export default function Categories() {
  return (
   <section className="relative bg-no-repeat text-white px-[18px] py-16 lg:px-[56px] lg:pt-[96px] lg:pb-[240px]">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
       <h1   style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}  className="font-Space Grotesk_Bold 
  font-bold 
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-[22px] 
  leading-[110%] 
  tracking-[-1px] 
  text-center 
  text-[#F7F7F7] 
  mb-5">
          The Ultimate Sound Library <br /> for Creators
        </h1>
        <p className=" mx-auto max-w-[900px]  text-[#CECFD2] text-[16px] md:text-[20px] lg:text-[18px] mb-12   lg:mb-20  font-normal leading-[28px] text-center  " style={{ fontFamily: 'Space Grotesk',textTransform: 'capitalize' }} >
          Discover royalty-free music by genre, mood, and culture — the perfect
          sound library for creators, artists, and storytellers worldwide
        </p>
      </div>

{/* Categories */}
<div className="w-full overflow-x-auto scrollbar-hide releative z-2">
  <div className="flex gap-6  mx-auto  md:px-0">

    {/* Card 1 - Genres */}
    <div
      style={{
        borderRadius: "17.93px",
        background:
          "linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)",
      }}
      className="flex flex-col w-[220px] h-[293.58px] 
                 sm:w-[220px] sm:h-[293.58px] 
                 min-w-[180px] sm:min-w-[220px] 
                 overflow-hidden hover:scale-105 transition-transform"
    >
      <div className="w-full h-[227px] sm:h-[227px] overflow-hidden rounded-t-[17.93px]">
        <Image
          src="/images/c1.png"
          alt="Genres"
          width={220}
          height={227}
          className="w-full h-full object-cover"
        />
      </div>
      <div     style={{
        fontFamily: 'Space Grotesk_Medium'}} className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]" >
        Genres
      </div>
    </div>

    {/* Card 2 - Moods */}
    <div
      style={{
        borderRadius: "17.93px",
        background:
          "linear-gradient(179.71deg, rgba(208, 136, 128, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)",
      }}
      className="flex flex-col w-[220px] h-[293.58px] 
                 sm:w-[260px] sm:h-[346.96px] 
                 min-w-[180px] sm:min-w-[220px] 
                 overflow-hidden hover:scale-105 transition-transform"
    >
      <div className="w-full h-[227px] sm:h-[280px] overflow-hidden rounded-t-[17.93px]">
        <Image
          src="/images/c2.png"
          alt="Moods"
          width={260}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
      <div style={{
        fontFamily: 'Space Grotesk_Medium'}} className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]">
        Moods
      </div>
    </div>

    {/* Card 3 - Creators */}
    <div
      style={{
        borderRadius: "17.93px",
        background:
          "linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)",
      }}
      className="flex flex-col w-[220px] h-[293.58px] 
                 sm:w-[290px] sm:h-[387px] 
                 min-w-[180px] sm:min-w-[220px] 
                 overflow-hidden hover:scale-105 transition-transform"
    >
      <div className="w-full h-[227px] sm:h-[320px] overflow-hidden rounded-t-[17.93px]">
        <Image
          src="/images/c3.png"
          alt="Creators"
          width={290}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>
      <div style={{
        fontFamily: 'Space Grotesk_Medium'}} className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]">
        Creators
      </div>
    </div>

    {/* Card 4 - Culture */}
    <div
      style={{
        borderRadius: "17.93px",
        background:
          "linear-gradient(179.71deg, rgba(208, 136, 128, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)",
      }}
      className="flex flex-col w-[220px] h-[293.58px] 
                 sm:w-[260px] sm:h-[346.96px] 
                 min-w-[180px] sm:min-w-[220px] 
                 overflow-hidden hover:scale-105 transition-transform"
    >
      <div className="w-full h-[227px] sm:h-[280px] overflow-hidden rounded-t-[17.93px]">
        <Image
          src="/images/c2.png"
          alt="Culture"
          width={260}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
      <div style={{
        fontFamily: 'Space Grotesk_Medium'}} className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]">
        Culture
      </div>
    </div>

    {/* Card 5 - Lifestyle */}
    <div
      style={{
        borderRadius: "17.93px",
        background:
          "linear-gradient(179.71deg, rgba(42, 136, 168, 0.4) 70.23%, rgba(28, 27, 27, 0.4) 108.54%)",
      }}
      className="flex flex-col w-[220px] h-[293.58px] 
                 sm:w-[220px] sm:h-[293.58px] 
                 min-w-[180px] sm:min-w-[220px] 
                 overflow-hidden hover:scale-105 transition-transform"
    >
      <div className="w-full h-[227px] sm:h-[227px] overflow-hidden rounded-t-[17.93px]">
        <Image
          src="/images/c4.png"
          alt="Lifestyle"
          width={220}
          height={227}
          className="w-full h-full object-cover"
        />
      </div>
      <div style={{
        fontFamily: 'Space Grotesk_Medium'}} className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[20px]">
        Lifestyle
      </div>
    </div>

  </div>
</div>


   <Image
          src="/images/cat.png"
          alt="Genres"
          width={220}
          height={227}
          className="
    w-full h-full object-cover absolute 
  top-[-150px] left-[-0px]    /* mobile ke liye chhoti shift */
    sm:top-[-150px] sm:left-[-250px] 
    md:top-[-200px] md:left-[-400px] 
    lg:top-[-240px] lg:left-[-550px] /* large screen pe original */
    z-0
  "
        />
    </section>
  );
}
