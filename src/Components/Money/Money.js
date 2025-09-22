// app/components/Features.tsx
import Image from "next/image";

export default function Money() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-[80px] items-center">
        {/* Block 1 */}
        <div className="flex flex-col items-center justify-center  space-y-4 text-center">
            <h2 className="font-['Space_Grotesk'] font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
            Unlimited Music You Can Trust
          </h2>
    <p className="font-['Space_Grotesk'] font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[540px]">
            No copyright strikes, no takedowns, no stress. Every track is 100% 
            cleared for commercial use, so your videos stay online and your 
            revenue stays safe. Whether you’re a creator, brand, or studio, 
            you can publish with confidence.
          </p>
                <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
  className="w-[245px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
             shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
             text-white font-bold text-md leading-md
             transition-all hover:bg-[#154ab8]"
>
            Explore the music library
          </button>
        </div>
        <div className="flex-shrink-0">
            {/* Image size set to requested 576x512. On small screens it will scale down. */}
            <Image
              src="/images/mine/i1.png"
              alt="Handshake"
              width={576}
              height={512}
              className="rounded-[12px] object-cover w-full max-w-[576px] h-auto"
            />
          </div>

        {/* Block 2 */}
       <div className="flex-shrink-0">
            {/* Image size set to requested 576x512. On small screens it will scale down. */}
            <Image
              src="/images/mine/i2.png"
              alt="Handshake"
              width={576}
              height={512}
              className="rounded-[12px] object-cover w-full max-w-[576px] h-auto"
            />
          </div>
        <div className="flex flex-col items-center justify-center  space-y-4 text-center">
             <h2 className="font-['Space_Grotesk'] font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
            Sound That Elevates Your Story
          </h2>
       <p className="font-['Space_Grotesk'] font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[540px]">
            The right soundtrack makes your content unforgettable. Our royalty-free 
            music is crafted to grab attention, keep audiences watching, and spark 
            stronger emotions. More retention means more views, shares, and long-term 
            growth for your channel.
          </p>
               <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
  className="w-[290px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
             shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
             text-white font-bold text-md leading-md
             transition-all hover:bg-[#154ab8]"
>
            Make your story unforgettable
          </button>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center justify-center  space-y-4 text-center">
           <h2 className="font-['Space_Grotesk'] font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
            Revenue That Stays Yours
          </h2>
          <p className="font-['Space_Grotesk'] font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[540px]">
            Why share your earnings when you don’t have to? With a one-time license, 
            you can use tracks forever without paying extra royalties. Your profit 
            stays yours, so you can reinvest in your creativity and scale your 
            projects faster.
          </p>
               <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
  className="w-[245px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
             shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
             text-white font-bold text-md leading-md
             transition-all hover:bg-[#154ab8]"
>
            Grow your projects faster
          </button>
        </div>
         <div className="flex-shrink-0">
            {/* Image size set to requested 576x512. On small screens it will scale down. */}
            <Image
              src="/images/mine/i3.png"
              alt="Handshake"
              width={576}
              height={512}
              className="rounded-[12px] object-cover w-full max-w-[576px] h-auto"
            />
          </div>
      </div>
    </section>
  );
}
