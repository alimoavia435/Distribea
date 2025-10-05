// app/components/Features.tsx
import Image from "next/image";

export default function Money() {
  return (
//     <section className="bg-no-repeat text-white px-[18px] py-16 lg:px-[56px] lg:pt-[128px] lg:pb-[96px] flex justify-center">
//      <div className="mx-0 w-full max-w-[1328px]  grid md:grid-cols-2 gap-[80px] items-center">
//         {/* Block 1 */}
//        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[640px] mx-auto">
//             <h2     style={{ fontFamily: "Space Grotesk_Bold" }} className="font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
//             Unlimited Music You Can Trust
//           </h2>
//     <p  style={{ fontFamily: "Space Grotesk" }} className=" font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[640px]">
//             No copyright strikes, no takedowns, no stress. Every track is 100% 
//             cleared for commercial use, so your videos stay online and your 
//             revenue stays safe. Whether you’re a creator, brand, or studio, 
//             you can publish with confidence.
//           </p>
//                 <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
//   className="w-[245px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
//              shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
//              text-white font-bold text-md leading-md
//              transition-all hover:bg-[#154ab8]"
// >
//             Explore the music library
//           </button>
//         </div>
//   <div className="flex-shrink-0 w-full max-w-[576px] mx-auto">
//   <Image
//     src="/Images/mine/i1.png"
//     alt="Handshake"
//     width={576}
//     height={512}
//     className="rounded-[12px] object-cover w-full h-auto"
//   />
// </div>


//         {/* Block 2 */}
//       <div className="flex-shrink-0 w-full max-w-[576px] mx-auto">
//   <Image
//     src="/Images/mine/i2.png"
//     alt="Handshake"
//     width={576}
//     height={512}
//     className="rounded-[12px] object-cover w-full h-auto"
//   />
// </div>
//        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[640px] mx-auto">
//              <h2     style={{ fontFamily: "Space Grotesk_Bold" }} className=" font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
//             Sound That Elevates Your Story
//           </h2>
//        <p  style={{ fontFamily: "Space Grotesk" }} className=" font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[640px]">
//             The right soundtrack makes your content unforgettable. Our royalty-free 
//             music is crafted to grab attention, keep audiences watching, and spark 
//             stronger emotions. More retention means more views, shares, and long-term 
//             growth for your channel.
//           </p>
//                <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
//   className="w-[290px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
//              shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
//              text-white font-bold text-md leading-md
//              transition-all hover:bg-[#154ab8]"
// >
//             Make your story unforgettable
//           </button>
//         </div>

//         {/* Block 3 */}
//          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[640px] mx-auto">
//            <h2    style={{ fontFamily: "Space Grotesk_Bold" }} className=" font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#F7F7F7]">
//             Revenue That Stays Yours
//           </h2>
//           <p  style={{ fontFamily: "Space Grotesk" }} className=" font-normal text-lg leading-[28px] tracking-[-0.01em] text-[#F9F9F9] max-w-[640px]">
//             Why share your earnings when you don’t have to? With a one-time license, 
//             you can use tracks forever without paying extra royalties. Your profit 
//             stays yours, so you can reinvest in your creativity and scale your 
//             projects faster.
//           </p>
//                <button style={{ fontFamily: 'Space Grotesk_Bold',textTransform: 'capitalize' }}
//   className="w-[245px] h-[56px] rounded-full border-2 border-transparent bg-[#175CD3] 
//              shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
//              text-white font-bold text-md leading-md
//              transition-all hover:bg-[#154ab8]"
// >
//             Grow your projects faster
//           </button>
//         </div>
//        <div className="flex-shrink-0 w-full max-w-[576px] mx-auto">
//   <Image
//     src="/Images/mine/i3.png"
//     alt="Handshake"
//     width={576}
//     height={512}
//     className="rounded-[12px] object-cover w-full h-auto"
//   />
// </div>
//       </div>
//     </section>
<section className="bg-no-repeat text-white px-4 sm:px-6 lg:px-[56px] pt-[90px] pb-[70px] lg:pt-[128px] lg:pb-[96px]">
  <div className="mx-auto max-w-[1328px] flex flex-col gap-[28px] md:gap-20">

    {/* Block 1 */}
<div className="flex flex-col-reverse   xl:flex-row-reverse items-center gap-8 lg:gap-20">
        <div className="flex-1 w-full max-w-[576px] mx-auto">
        <Image src="/Images/mine/i1.png" alt="Handshake" width={576} height={512} className="rounded-[12px] object-cover w-full h-auto"
        />
      </div>
       <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[650px] mx-auto">
       <h2
  style={{ fontFamily: "Space Grotesk_Bold" }}
  className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center"
>
  Unlimited Music You Can Trust
</h2>
       <p
  className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left"
  style={{ fontFamily: 'Space Grotesk', textAlign:"center" }}
>
         No copyright strikes, no takedowns, no stress. Every track is 100% cleared for commercial use, so your videos stay online and your revenue stays safe. Whether you’re a creator, brand, or studio, you can publish with confidence.
        </p>
        <button className="mt-6 w-full md:w-[290px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]" style={{ fontFamily: 'Space Grotesk_Bold' }}>
          Explore the music library
        </button>
      </div>
    
    </div>

    {/* Block 2 */}
    <div className="flex flex-col xl:flex-row-reverse items-center gap-8 md:gap-20">
       <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[650px] mx-auto">
          <h2
  style={{ fontFamily: "Space Grotesk_Bold" }}
  className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center"
>
          Sound That Elevates Your Story
        </h2>
       <p
  className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left"
  style={{ fontFamily: 'Space Grotesk',textAlign:"center" }}
>
          The right soundtrack makes your content unforgettable. Our royalty free music is crafted to grab attention, keep audiences watching, and spark stronger emotions. More retention means more views, shares, and long-term growth for your channel.
        </p>
        <button className="mt-6 w-full md:w-[290px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]" style={{ fontFamily: 'Space Grotesk_Bold' }}>
          Make your story unforgettable
        </button>
      </div>
      <div className="flex-1 w-full max-w-[576px] mx-auto">
        <Image src="/Images/mine/i2.png" alt="Handshake" width={576} height={512} className="rounded-[12px] object-cover w-full h-auto"/>
      </div>
    </div>

    {/* Block 3 */}
  <div className="flex flex-col   xl:flex-row items-center gap-8 lg:gap-20">
       <div className="flex flex-col items-center justify-center space-y-4 md:space-y-[40px] text-center w-full max-w-[650px] mx-auto">
             <h2
  style={{ fontFamily: "Space Grotesk_Bold" }}
  className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] text-center"
>
          Revenue That Stays Yours
        </h2>
       <p
  className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7 text-center md:text-left"
  style={{ fontFamily: 'Space Grotesk',textAlign:"center" }}
>
          Why share your earnings when you don’t have to? With a one-time license, you can use tracks forever without paying extra royalties. Your profit stays yours, so you can reinvest in your creativity and scale your projects faster.
        </p>
        <button className="mt-6 w-full md:w-[245px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]" style={{ fontFamily: 'Space Grotesk_Bold' }}>
          Grow your projects faster
        </button>
      </div>
      <div className="flex-1 w-full max-w-[576px] mx-auto">
        <Image src="/Images/mine/i3.png" alt="Handshake" width={576} height={512} className="rounded-[12px] object-cover w-full h-auto"/>
      </div>
    </div>

  </div>
</section>

  );
}
