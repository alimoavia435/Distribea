import React from "react";
import Image from "next/image";
const LicencesPage = () => {
  return (
    <div>
      <section
        className=" text-white px-4 sm:px-6 lg:px-[56px] pt-[90px]  lg:pt-[96px]  "
        style={{}}
      >
        <div className=" mx-auto max-w-[1328px] flex flex-col gap-[60px] md:gap-23">
          {/* Block 1 */}
          <div className="flex flex-col-reverse   xl:flex-row-reverse  gap-6 lg:gap-20">
            <div className="flex-1 w-full max-w-[625px] mx-auto">
              <Image
                src="/Images/bluebrand/mac.webp"
                alt="Handshake"
                width={576}
                height={512}
                className="rounded-[12px] object-cover w-full h-auto"
              />
            </div>
            <div className="mb-[20px] md-mb-[0px] flex flex-col items-start justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[548px] mx-auto">
              <div className="flex flex-col !items-start justify-center gap-[5px]">
                <div
                  className="
    max-w-[371px] w-full h-[28px]
    flex items-center 
    gap-[4px] md:gap-2 p-[8px] md:p-[4px] py-[20px] md:py-0
    rounded-lg border border-[#373A414D]
    bg-[#0C0E1266]
    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]
    sm:max-w-[320px] md:max-w-[355px] lg:max-w-[371px]
    mb-2 lg:mb-5
  "
                >
                  {/* Example inner content */}
                  <img
                    src="/Images/bluebrand/1.svg"
                    alt="icon"
                    className="w-[24px] h-[12px]"
                  />
                  <p
                    className="text-[11px] lg:text-[12px] xl:text-[13px] leading-[140%] ]  tracking-[0.5px]"
                    style={{
                      fontFamily: "Space Grotesk_Medium",
                      color: "var(--colors-text-text-tertiary-600, #94979C)",
                    }}
                  >
                    Protection for Youtube , social media and more !
                  </p>
                </div>

                <h2
                  style={{ fontFamily: "Space Grotesk_Bold" }}
                  className="font-bold text-nowrap  text-2xl sm:text-3xl md:text-4xl lg:text-[58px]  leading-relaxed sm:leading-[1.4] md:leading-[1.5] lg:leading-[60px] text-[#F7F7F7] tracking-[-0.02em] "
                >
                  Distribea Royalty-Free <br /> Music License
                </h2>
              </div>
              <p
                className="mt-1 text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  md:text-left"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Distribea provides a clear, worldwide, all-inclusive
                royalty-free music license. You can use our tracks without
                limitation on YouTube, TikTok, Instagram, Twitch, podcasts,
                sponsored content, and commercial campaigns. Your channel is
                added to our whitelist, eliminating any risk of copyright
                claims, blocks, or lost revenue.
              </p>
              <div
                className="
    mt-5 flex items-center justify-center gap-3 
    w-full max-w-[344px] 
    flex-wrap
    [@media(min-width:401px)]:flex-nowrap
  "
              >
                <button
                  className="w-full md:max-w-[139px] h-[56px] text-white font-bold px-[24px] py-[16px] rounded-full relative"
                  style={{
                    fontFamily: "Space Grotesk_Bold",
                    background:
                      "linear-gradient(#13171E, #13171E) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) border-box",
                    border: "2px solid transparent",
                    borderRadius: "999px",
                    boxSizing: "border-box",
                  }}
                >
                  Learn more
                </button>

                <button
                  className=" w-full md:w-[193px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]"
                  style={{ fontFamily: "Space Grotesk_Bold" }}
                >
                  Start for Free now
                </button>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col xl:flex-row-reverse items-center gap-6 md:gap-20">
            <div className="mb-[20px] md-mb-[0px] flex flex-col !items-start justify-center space-y-[0px] md:space-y-[40px]  w-full max-w-[650px] mx-auto">
              <div className="flex flex-col !items-start justify-center gap-[12px]">
                <h2
                  style={{ fontFamily: "Space Grotesk_Bold" }}
                  className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] "
                >
                  Total Creative  <span
    style={{
      background: "linear-gradient(90deg, #175CD3 0%, #366FD0 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    Freedom
  </span>
                </h2>
              </div>
              <div className="mt-4 flex flex-col gap-6 ">
                <p
                  className=" text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  md:text-left"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  With a single subscription, you can download and use as much
                  music as you want. Every video you publish during your
                  subscription period remains protected and fully monetizable
                  for life, even after the subscription ends. This guarantee
                  means your content will continue generating revenue legally
                  and securely, with no fear of takedowns or copyright disputes.
                </p>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-lg text-[#F9F9F9] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  md:text-left"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  There are no hidden fees, no revenue-sharing agreements, and
                  no complicated processes. Everything is designed to give you
                  peace of mind, so you can focus entirely on creating and
                  distributing your videos, podcasts, ads, or marketing
                  campaigns without limits.
                </p>
              
              </div>
                <div
                  className="
    mt-5 flex items-center justify-center gap-3 
    w-full max-w-[344px] 
    flex-wrap
    [@media(min-width:401px)]:flex-nowrap
  "
                >
                  <button
                    className="w-full md:max-w-[139px] h-[56px] text-white font-bold px-[24px] py-[16px] rounded-full relative"
                    style={{
                      fontFamily: "Space Grotesk_Bold",
                      background:
                        "linear-gradient(#13171E, #13171E) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) border-box",
                      border: "2px solid transparent",
                      borderRadius: "999px",
                      boxSizing: "border-box",
                    }}
                  >
                    Learn more
                  </button>

                  <button
                    className=" w-full md:w-[193px] h-[56px] rounded-full bg-[#175CD3] text-white font-bold hover:bg-[#154ab8]"
                    style={{ fontFamily: "Space Grotesk_Bold" }}
                  >
                    Start for Free now
                  </button>
                </div>
            </div>

            <div className="flex-1 w-full max-w-[576px] mx-auto">
              <Image
                src="/Images/bluebrand/total.webp"
                alt="Handshake"
                width={576}
                height={512}
                className="rounded-[12px] object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* .... */}
      <div className="
  flex flex-col items-center justify-center w-full
  px-4 sm:px-6 md:px-[34px] 
  pt-[46px] sm:pt-40 md:pt-[216px] 
  pb-24 sm:pb-28 md:pb-[120px]
">

    <div className="flex flex-col items-center justify-center w-full max-w-[710px] gap-8 mx-auto">
          <Image
    src="/Images/bluebrand/tick.webp"
    alt="YourImage"
    width={152}
    height={92}
    className="rounded-[120px] object-cover sm:w-[120px] sm:h-[72px] md:w-[152px] md:h-[92px]"
  />

 <h2
                  style={{ fontFamily: "Space Grotesk_Bold" }}
                  className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-snug sm:leading-snug md:leading-[44px] text-[#F7F7F7] tracking-[-0.02em] "
                >
                  Guaranteed Legal Protection
                </h2>
 <p
                  className="text-sm text-center sm:text-base md:text-lg lg:text-lg text-[#FFFFFF] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                 Your content remains visible worldwide, without restrictions or legal uncertainty. You keep <span className="text-[#CECFD2] "  style={{ fontFamily: "Space Grotesk_Bold" }}>100% of your ad and sponsorship revenue</span> and publish with confidence across all major platforms. 
                </p>
                 <p
                  className="text-sm text-center sm:text-base md:text-lg lg:text-lg text-[#FFFFFF] leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-7  "
                  style={{ fontFamily: "Space Grotesk" }}
                >
Distribea is the ideal solution for independent creators, businesses, and agencies who want to <span className="text-[#CECFD2] "  style={{ fontFamily: "Space Grotesk_Bold" }}>monetize videos without copyright risks.</span>
                </p>

    </div>
</div>
    </div>
  );
};

export default LicencesPage;
