import React from "react";
import Image from "next/image";
const PublicPlaylist = () => {
  const categories = [
    {
      title: "RapCaviar",
      name: "Where top hits meet underground vibes — pure rap energy",
      img: "/Images/bluebrand/list1.webp",
      track: "38 Tracks",
      play: "39M Plays",
    },
    {
      title: "Mint",
      name: "A refreshing journey through playful rhythms and bright melodies.",
       img: "/Images/bluebrand/list2.webp",
            track: "19 Tracks",
      play: "25M Plays",

    },
    {
      title: "Like A Queen",
      name: "Hard Life tells stories of pain, hustle, and resilience.”",
   img: "/Images/bluebrand/list3.webp",
            track: "15 Tracks",
      play: "15M Plays",
    },
    {
      title: "Lost",
      name: "Hard Life tells stories of pain, hustle, and resilience.”",
    img: "/Images/bluebrand/list4.webp",
            track: "38 Tracks",
      play: "3M Plays",
    },
  ];
  const categories1 = [
    { title: "Dance with Me", name: "39 Tracks",    img: "/Images/bluebrand/list5.webp",},
    { title: "Elysian Vibes", name: "12 Tracks",    img: "/Images/bluebrand/list6.webp", },
    {
      title: "Mindful Clouds",
      name: "16 Tracks",
       img: "/Images/bluebrand/list7.webp",
    },
    {
      title: "Adventure Awaits",
      name: "48 Tracks",
      img: "/Images/bluebrand/list8.webp",
    },
    {
      title: "Sunny DayDreams",
      name: "44 Tracks",
         img: "/Images/bluebrand/list9.webp",
    },
  ];
  const categories2 = [
    { title: "Chill Pop Beats", name: "12 Tracks",    img: "/Images/bluebrand/list10.webp", },
    { title: "Relaxing Jazz Vibes", name: "16 Tracks",    img: "/Images/bluebrand/list11.webp",},
    {
      title: "Epic Adventure Tunes",
      name: "46 Tracks",
        img: "/Images/bluebrand/list12.webp",
    },
    {
      title: "Hi",
      name: "48 Tracks",
       img: "/Images/bluebrand/list13.webp",
    },
    {
      title: "Feel-Good Dance Hits",
      name: "29 Tracks",
       img: "/Images/bluebrand/list14.webp",
    },
  ];
  const categories3 = [
    { title: "Jazz for Unwinding", name: "16 Tracks",    img: "/Images/bluebrand/list15.webp", },
    { title: "Life's Highlights", name: "12 Tracks",    img: "/Images/bluebrand/list16.webp", },
    {
      title: "Tunes for Epic Journe..",
      name: "48 Tracks",
      img: "/Images/bluebrand/list17.webp",
    },
    {
      title: "Serene Nights",
      name: "44 Tracks",
   img: "/Images/bluebrand/list18.webp",
    },
    {
      title: "Feel-Good Dance Trac..",
      name: "39 Tracks",
        img: "/Images/bluebrand/list19.webp",
    },
  ];
  const categories4 = [
    { title: "Life's Highlights", name: "39 Tracks",   img: "/Images/bluebrand/list20.webp",},
    { title: "Jazz for Unwinding", name: "12 Tracks",    img: "/Images/bluebrand/list21.webp", },
    {
      title: "Tunes for Epic Journe..",
      name: "16 Tracks",
   img: "/Images/bluebrand/list22.webp",
    },
    {
      title: "Serene Nights",
      name: "48 Tracks",
        img: "/Images/bluebrand/list23.webp",
    },
    {
      title: "Feel-Good Dance Trac..",
      name: "44 Tracks",
       img: "/Images/bluebrand/list24.webp",
    },
  ];
const gradients = [
  ' linear-gradient(180deg, #B04987 0%, #6136A1 100%)',
  'linear-gradient(180deg, #2DD83D 0%, #187220 100%)',
  'linear-gradient(180deg, #D9BA3A 0%, #9D841C 100%)',
  'linear-gradient(180deg, #FF6138 0%, #993A22 100%)',
 
]
  return (
    <div>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[128px]  flex flex-col items-center gap-[40] lg:gap-[60] xl:gap-[80px] max-w-[768px] mx-auto">
        <div className=" flex flex-col items-center gap-[18px] xl:gap-[24px] px-[15px]">
          <p
            className="text-[35px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[72px] leading-[140%] tracking-[-1.44px] text-[#ffffff] text-center"
            style={{ fontFamily: "Space Grotesk_Bold" }}
          >
            Discover the Perfect Playlist For You ✨
          </p>
          <p
            className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#CECFD2] text-center"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Curated by our team or tailored to your mood, moment, and favorite
            genres.
          </p>
        </div>
        <div className=" max-w-[290px] md:max-w-[480px] w-full flex flex-row items-center gap-4 px-6 py-[18px]     rounded-3xl bg-[#FAFAFA1A] text-white  ">
          <Image
            src="/Images/bluebrand/search.svg"
            alt="search"
            width={19}
            height={19}
            className=""
          />
          <p
            className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[140%] text-[#B3B3B3] text-center"
            style={{ fontFamily: "Space Grotesk" }}
          >
            What do you want to play?
          </p>
        </div>
      </div>
      {/* ...... */}
      <section
        className="bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-6 lg:gap-[48px]"
      >
        <div
          className="
    max-w-[1196px] 
    w-full 
    flex 
    justify-between 
    items-center
     mx-auto 
  "
        >
          <p
            className="flex items-center justify-center gap-2  text-center text-[18px] md:text-[25px] lg:text-[35px] xl:text-[42px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]"
            style={{ fontFamily: "Space Grotesk_Medium" }}
          >
            ⭐ Featured Playlists
          </p>
          <p
            className="text-sm mt-0 md:mt-3  text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            SHOW MORE
          </p>
        </div>

        {/* Grid */}
        <div
          className="
       !grid 
       grid-cols-1              /* default => <360px */
       min-[400px]:!grid-cols-2 /* >=360px => 2 cards */
       md:!grid-cols-2
       lg:!grid-cols-3
       xl:!grid-cols-4
       !gap-4 lg:!gap-6 
       max-w-[1210px] mx-auto w-full
     "
        >
          {categories?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: "17.93px",
                background: gradients[index % gradients.length] 
              }}
              className="flex !flex-col !w-auto !h-[300.58px] 
                      w-[100%] sm:!h-[458.38px] 
                      !min-w-[150px] sm:!min-w-[287px] 
                      !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer"
            >
              <div className="w-full h-[200px] sm:h-[287px] overflow-hidden rounded-t-[17.93px]">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Wrapper */}
              <div className="flex flex-col gap-[20.34px] md:gap-[35.34px]  p-[13.67px] md:p-[17.67px]">
                <div>
                  <div
                    style={{ fontFamily: "Space Grotesk_Medium" }}
                    className="flex-1 flex items-center font-medium text-[18px] lg:text-[18px] pb-[2px] sm:pb-[8.83px]"
                  >
                    {cat.title}
                  </div>

                  <div
                    style={{ fontFamily: "Space Grotesk_Medium" }}
                    className="text-[#F9F9F9] opacity-70 flex-1 flex items-center font-medium text-[11px] lg:text-[14px] "
                  >
                    {cat.name}
                  </div>
                </div>
                {/* Bottom Section (for your future data) */}
                <div className="flex items-center justify-between">
                  {/* Place your custom data here */}
                  <div
                    className="flex gap-[5.8px]"
                    style={{
                      maxWidth: "77.55692291259766px",
                    }}
                  >
                    {/* Your inner content goes here */}
                    <Image
                      src="/Images/bluebrand/trrackimg.svg"
                      alt="play"
                      width={17}
                      height={17}
                      className=" "
                    />
                    <div
                      style={{ fontFamily: "Space Grotesk_Medium" }}
                      className=" flex items-center font-medium text-[11px] lg:text-[12px] "
                    >
                       {cat.track}
                    </div>
                  </div>
                  <div
                    className="flex gap-[5.8px]"
                    style={{
                      maxWidth: "82.55692291259766px",
                    }}
                  >
                    {/* Your inner content goes here */}
                    <Image
                      src="/Images/bluebrand/plays.svg"
                      alt="play"
                      width={17}
                      height={17}
                      className=" "
                    />
                    <div
                      style={{ fontFamily: "Space Grotesk_Medium" }}
                      className=" flex items-center font-medium text-[11px] lg:text-[12px] "
                    >
                        {cat.play}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* .... */}

      <section
        className="bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[48px]"
      >
        <div
          className="
    max-w-[1196px] 
    w-full 
    flex 
    justify-between 
    items-center
     mx-auto 
  "
        >
          <p
            className="flex items-center justify-center gap-2  text-center text-[18px] md:text-[25px] lg:text-[35px] xl:text-[42px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]"
            style={{ fontFamily: "Space Grotesk_Medium" }}
          >
            🤩 Moods.
          </p>
          <p
            className="text-sm mt-0 md:mt-3  text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            SHOW MORE
          </p>
        </div>

        {/* Grid */}
        <div
          className="
       !grid 
       grid-cols-1              /* default => <360px */
       min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
       md:!grid-cols-3
       lg:!grid-cols-4
       xl:!grid-cols-5
       !gap-2 lg:!gap-6 
       max-w-[1210px] mx-auto w-full
     "
        >
          {categories1?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: "17.93px",
                // background: gradients[index % gradients.length] // cycle through gradients
                background: "#1C1B1B",
              }}
              className="flex !flex-col !w-auto !h-[250.58px] 
                      w-[100%] sm:!h-[303.38px] 
                      !min-w-[150px] sm:!min-w-[150px] 
                      !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer"
            >
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[18px] pt-[5px]"
              >
                {cat.title}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]"
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ..... */}

      <section
        className="bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[48px]"
      >
        <div
          className="
    max-w-[1196px] 
    w-full 
    flex 
    justify-between 
    items-center
     mx-auto 
  "
        >
          <p
            className="flex items-center justify-center gap-2  text-center text-[18px] md:text-[25px] lg:text-[35px] xl:text-[42px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]"
            style={{ fontFamily: "Space Grotesk_Medium" }}
          >
            🎸 Genres.
          </p>
          <p
            className="text-sm mt-0 md:mt-3  text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            SHOW MORE
          </p>
        </div>

        {/* Grid */}
        <div
          className="
       !grid 
       grid-cols-1              /* default => <360px */
       min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
       md:!grid-cols-3
       lg:!grid-cols-4
       xl:!grid-cols-5
       !gap-2 lg:!gap-6 
       max-w-[1210px] mx-auto w-full
     "
        >
          {categories2?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: "17.93px",
                // background: gradients[index % gradients.length] // cycle through gradients
                background: "#1C1B1B",
              }}
              className="flex !flex-col !w-auto !h-[250.58px] 
                      w-[100%] sm:!h-[303.38px] 
                      !min-w-[150px] sm:!min-w-[150px] 
                      !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer"
            >
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[18px] pt-[5px]"
              >
                {cat.title}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]"
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ...... */}
      <section
        className="bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[96px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[48px]"
      >
        <div
          className="
    max-w-[1196px] 
    w-full 
    flex 
    justify-between 
    items-center
     mx-auto 
  "
        >
          <p
            className="flex items-center justify-center gap-2  text-center text-[18px] md:text-[25px] lg:text-[35px] xl:text-[42px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]"
            style={{ fontFamily: "Space Grotesk_Medium" }}
          >
            💃 Life Moments.
          </p>
          <p
            className="text-sm mt-0 md:mt-3  text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            SHOW MORE
          </p>
        </div>

        {/* Grid */}
        <div
          className="
       !grid 
       grid-cols-1              /* default => <360px */
       min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
       md:!grid-cols-3
       lg:!grid-cols-4
       xl:!grid-cols-5
       !gap-2 lg:!gap-6 
       max-w-[1210px] mx-auto w-full
     "
        >
          {categories3?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: "17.93px",
                // background: gradients[index % gradients.length] // cycle through gradients
                background: "#1C1B1B",
              }}
              className="flex !flex-col !w-auto !h-[250.58px] 
                      w-[100%] sm:!h-[303.38px] 
                      !min-w-[150px] sm:!min-w-[150px] 
                      !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer"
            >
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[18px] pt-[5px]"
              >
                {cat.title}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]"
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ...... */}
      <section
        className="bg-no-repeat text-white 
    px-4 py-8              /* mobile (default) */
    sm:px-6 sm:py-12       /* small screens */
    md:px-10 md:py-16      /* medium screens */
    lg:px-[62px] lg:py-[80px]   /* large screens */
    xl:px-[80px] xl:pt-[96px] xl:pb-[200px] /* ≥1400px screens */
    flex justify-center flex-col gap-5 lg:gap-[48px]"
      >
        <div
          className="
    max-w-[1196px] 
    w-full 
    flex 
    justify-between 
    items-center
     mx-auto 
  "
        >
          <p
            className="flex items-center justify-center gap-2  text-center text-[18px] md:text-[25px] lg:text-[35px] xl:text-[42px] font-[500] text-[#F7F7F7] tracking-0 leading-[110%]"
            style={{ fontFamily: "Space Grotesk_Medium" }}
          >
            🌍 International.
          </p>
          <p
            className="text-sm mt-0 md:mt-3  text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            SHOW MORE
          </p>
        </div>

        {/* Grid */}
        <div
          className="
       !grid 
       grid-cols-1              /* default => <360px */
       min-[360px]:!grid-cols-2 /* >=360px => 2 cards */
       md:!grid-cols-3
       lg:!grid-cols-4
       xl:!grid-cols-5
       !gap-2 lg:!gap-6 
       max-w-[1210px] mx-auto w-full
     "
        >
          {categories4?.map((cat, index) => (
            <div
              key={index}
              style={{
                borderRadius: "17.93px",
                // background: gradients[index % gradients.length] // cycle through gradients
                background: "#1C1B1B",
              }}
              className="flex !flex-col !w-auto !h-[250.58px] 
                      w-[100%] sm:!h-[303.38px] 
                      !min-w-[150px] sm:!min-w-[150px] 
                      !overflow-hidden !hover:scale-105 !transition-transform cursor-pointer"
            >
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[17.93px]">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={220}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="flex-1 flex items-center justify-center text-center font-medium text-[18px] lg:text-[18px] pt-[5px]"
              >
                {cat.title}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk_Medium",
                }}
                className="text-[#F9F9F9] opacity-70 flex-1 flex items-center justify-center text-center font-medium text-[11px] lg:text-[12px] pb-[5px]"
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ....... */}
      <section
        className="
    relative w-full flex justify-center 
    pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[64px]
     px-[25] md:px-[40px]
  "
      >
        {/* Background Image */}
        <div
          className="relative w-full max-w-[1328px] bg-cover bg-center rounded-[32px] overflow-hidden"
          style={{
            backgroundImage: "url('/Images/bluebrand/list25.webp')", // replace with your image
          }}
        >
          {/* Overlay for readability */}
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <div
              className="
    flex flex-col items-center text-center
    px-4 py-12       /* mobile */
    sm:px-8 sm:py-16 /* small devices */
    md:px-16 md:py-20 /* tablets */
    lg:px-24 lg:py-28 /* laptops */
    xl:px-[178.5px] xl:py-[178.5px] /* desktops, your exact spec */
  "
            >
              <div className=" w-full flex flex-col justify-between items-center gap-3">
                {/* Text */}

                <p
                  className="flex items-center justify-center gap-2  text-center text-[20px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[64px] font-[700] text-[#F7F7F7] tracking-0 leading-[110%] w-full max-w-[652.45px] "
                  style={{ fontFamily: "Space Grotesk_Bold" }}
                >
                  Stay Connected.
                </p>
                <p
                  className="text-sm mt-0 md:mt-3  text-center text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-[400] text-[#94979C] tracking-0 leading-[140%]"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Follow your favorite playlists and never miss a new track.
                </p>
              </div>
              {/* Gap */}
              <div className="h-[48px]" />

              {/* Buttons */}
              <div className="flex gap-3  max-[400px]:flex-col">
                <button
                  style={{
                    fontFamily: "Space Grotesk_Bold",
                    textTransform: "capitalize",
                  }}
                  className="
    w-[160px] h-[52px] 
    rounded-full 
    border-2 border-transparent 
    bg-[#175CD3] 
    shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_-2px_0_0_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.12)] 
    text-white font-bold text-md leading-md
    flex items-center justify-center
    transition-all hover:bg-[#154ab8]
  "
                >
                  Get Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicPlaylist;
