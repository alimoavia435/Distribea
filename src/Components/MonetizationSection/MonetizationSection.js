// components/MonetizationSection.tsx

import Image from "next/image";

const MonetizationSection = () => {
  return (
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
  );
};

export default MonetizationSection;
