// components/YoutubeList.tsx

const youtubeData = [
  {
    name: "JazzOne",
    link: "https://www.youtube.com/@JazzOne",
  },
  {
    name: "DNA Music",
    link: "https://www.youtube.com/@DNAMusic1",
  },
];
const TikTok = [
  {
    name: "JazzOne",
    link: "https://www.youtube.com/@JazzOne",
  },
  {
    name: "DNA Music",
    link: "https://www.youtube.com/@DNAMusic1",
  },
];


const instagram = [
  {
    name: "JazzOne",
    link: "https://www.youtube.com/@JazzOne",
  },
  {
    name: "DNA Music",
    link: "https://www.youtube.com/@DNAMusic1",
  },
];

const facebook = [
  {
    name: "JazzOne",
    link: "https://www.youtube.com/@JazzOne",
  },
  {
    name: "DNA Music",
    link: "https://www.youtube.com/@DNAMusic1",
  },
];

const Twitch = [
  {
    name: "JazzOne",
    link: "https://www.youtube.com/@JazzOne",
  },
  {
    name: "DNA Music",
    link: "https://www.youtube.com/@DNAMusic1",
  },
];



export default function SafeList() {
  return (
    <div
  className="
    flex items-center justify-center 
    px-6 py-10           /* mobile: smaller padding */
    sm:px-10 sm:pt-12 sm:pb-24 
    md:px-14 md:pt-[60px] md:pb-[160px] 
    lg:px-[56px]
  "
>
    <div className="max-w-[1328px] w-full grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-[48px] gap-x-4 sm:gap-x-[108px]">
      <div className="text-white flex flex-col gap-3  w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* YouTube Icon Image */}
            <img
              src="/Images/listicon/youtube.png"
              alt="youtube"
              className="w-8 h-8"
            />
            <h2
              className="
    font-medium 
    text-[18px] sm:text-[20px] 
    leading-[24px] 
    text-white
  "   style={{ fontFamily: "Space Grotesk_Medium" }}
            >
              Youtube{" "}
              <span
                className="
      font-[Space_Grotesk] 
      font-light 
      text-[16px] sm:text-[18px] 
      leading-[24px] 
      text-gray-400
    "
              >
                (2)
              </span>
            </h2>
          </div>
          <button
            className="
    font-normal 
    text-[14px] sm:text-[16px] 
    leading-[24px] 
    text-[#CECFD2] 
    hover:underline
    cursor-pointer
  "  style={{ fontFamily: "Space Grotesk" }}
          >
            + Add new
          </button>
        </div>

        {/* List */}
        <div className="space-y-3 md:space-y-5 w-full">
          {TikTok.map((item, index) => (
            <div
              key={index}
              className="
    flex flex-col sm:flex-row items-center sm:items-center justify-between 
    bg-[#0C0E12] 
    rounded-[12px] 
    p-3 sm:p-4 md:p-5 
    gap-5
  "
            >
              <div className="flex flex-col  items-center   sm:flex-row gap-5">
                <span
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[14px] sm:text-[15px] 
    leading-[140%] 
    text-[#F7F7F7]
  "  style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.name}
                </span>

                <a
                  href={item.link}
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[12px] sm:text-[15px] 
    leading-[140%] 
    text-center 
    text-[#94979C] 
    truncate max-w-[250px] sm:max-w-none
  "
                  target="_blank"
                  rel="noopener noreferrer"
                    style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.link}
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/edit.png"
                    alt="edit"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/trash.png"
                    alt="trash"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
         <div className="text-white flex flex-col gap-3  w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* YouTube Icon Image */}
            <img
              src="/Images/listicon/TikTok.png"
              alt="youtube"
              className="w-8 h-8"
            />
            <h2
              className="
    font-medium 
    text-[18px] sm:text-[20px] 
    leading-[24px] 
    text-white
  "   style={{ fontFamily: "Space Grotesk_Medium" }}
            >
              TikTok{" "}
              <span
                className="
      font-[Space_Grotesk] 
      font-light 
      text-[16px] sm:text-[18px] 
      leading-[24px] 
      text-gray-400
    "
              >
                (2)
              </span>
            </h2>
          </div>
          <button
            className="
    font-normal 
    text-[14px] sm:text-[16px] 
    leading-[24px] 
    text-[#CECFD2] 
    hover:underline
    cursor-pointer
  "  style={{ fontFamily: "Space Grotesk" }}
          >
            + Add new
          </button>
        </div>

        {/* List */}
        <div className="space-y-3 md:space-y-5 w-full">
          {youtubeData.map((item, index) => (
            <div
              key={index}
              className="
    flex flex-col sm:flex-row items-center sm:items-center justify-between 
    bg-[#0C0E12] 
    rounded-[12px] 
    p-3 sm:p-4 md:p-5 
    gap-5
  "
            >
              <div className="flex flex-col  items-center   sm:flex-row gap-5">
                <span
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[14px] sm:text-[15px] 
    leading-[140%] 
    text-[#F7F7F7]
  "  style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.name}
                </span>

                <a
                  href={item.link}
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[12px] sm:text-[15px] 
    leading-[140%] 
    text-center 
    text-[#94979C] 
    truncate max-w-[250px] sm:max-w-none
  "
                  target="_blank"
                  rel="noopener noreferrer"
                    style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.link}
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/edit.png"
                    alt="edit"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/trash.png"
                    alt="trash"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
             <div className="text-white flex flex-col gap-3  w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* YouTube Icon Image */}
            <img
              src="/Images/listicon/Instagram.png"
              alt="youtube"
              className="w-8 h-8"
            />
            <h2
              className="
    font-medium 
    text-[18px] sm:text-[20px] 
    leading-[24px] 
    text-white
  "   style={{ fontFamily: "Space Grotesk_Medium" }}
            >
              Instagram{" "}
              <span
                className="
      font-[Space_Grotesk] 
      font-light 
      text-[16px] sm:text-[18px] 
      leading-[24px] 
      text-gray-400
    "
              >
                (2)
              </span>
            </h2>
          </div>
          <button
            className="
    font-normal 
    text-[14px] sm:text-[16px] 
    leading-[24px] 
    text-[#CECFD2] 
    hover:underline
    cursor-pointer
  "  style={{ fontFamily: "Space Grotesk" }}
          >
            + Add new
          </button>
        </div>

        {/* List */}
        <div className="space-y-3 md:space-y-5 w-full">
          {instagram.map((item, index) => (
            <div
              key={index}
              className="
    flex flex-col sm:flex-row items-center sm:items-center justify-between 
    bg-[#0C0E12] 
    rounded-[12px] 
    p-3 sm:p-4 md:p-5 
    gap-5
  "
            >
              <div className="flex flex-col  items-center   sm:flex-row gap-5">
                <span
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[14px] sm:text-[15px] 
    leading-[140%] 
    text-[#F7F7F7]
  "  style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.name}
                </span>

                <a
                  href={item.link}
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[12px] sm:text-[15px] 
    leading-[140%] 
    text-center 
    text-[#94979C] 
    truncate max-w-[250px] sm:max-w-none
  "
                  target="_blank"
                  rel="noopener noreferrer"
                    style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.link}
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/edit.png"
                    alt="edit"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/trash.png"
                    alt="trash"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
             <div className="text-white flex flex-col gap-3  w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* YouTube Icon Image */}
            <img
              src="/Images/listicon/Facebook.png"
              alt="youtube"
              className="w-8 h-8"
            />
            <h2
              className="
    font-medium 
    text-[18px] sm:text-[20px] 
    leading-[24px] 
    text-white
  "   style={{ fontFamily: "Space Grotesk_Medium" }}
            >
              Facebook{" "}
              <span
                className="
      font-[Space_Grotesk] 
      font-light 
      text-[16px] sm:text-[18px] 
      leading-[24px] 
      text-gray-400
    "
              >
                (2)
              </span>
            </h2>
          </div>
          <button
            className="
    font-normal 
    text-[14px] sm:text-[16px] 
    leading-[24px] 
    text-[#CECFD2] 
    hover:underline
    cursor-pointer
  "  style={{ fontFamily: "Space Grotesk" }}
          >
            + Add new
          </button>
        </div>

        {/* List */}
        <div className="space-y-3 md:space-y-5 w-full">
          {facebook.map((item, index) => (
            <div
              key={index}
              className="
    flex flex-col sm:flex-row items-center sm:items-center justify-between 
    bg-[#0C0E12] 
    rounded-[12px] 
    p-3 sm:p-4 md:p-5 
    gap-5
  "
            >
              <div className="flex flex-col  items-center   sm:flex-row gap-5">
                <span
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[14px] sm:text-[15px] 
    leading-[140%] 
    text-[#F7F7F7]
  "  style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.name}
                </span>

                <a
                  href={item.link}
                  className="
    font-[Space_Grotesk] 
    font-normal 
    text-[12px] sm:text-[15px] 
    leading-[140%] 
    text-center 
    text-[#94979C] 
    truncate max-w-[250px] sm:max-w-none
  "
                  target="_blank"
                  rel="noopener noreferrer"
                    style={{ fontFamily: "Space Grotesk" }}
                >
                  {item.link}
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/edit.png"
                    alt="edit"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
                <button className="cursor-pointer">
                  <img
                    src="/Images/listicon/trash.png"
                    alt="trash"
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
