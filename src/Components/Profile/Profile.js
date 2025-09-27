// components/DashboardCards.tsx
import Image from "next/image";

export default function Profile() {
  return (
       <div
  className="
    flex flex-col items-center justify-center 
    px-6 py-10           /* mobile: smaller padding */
    sm:px-10 sm:pt-12 sm:pb-24 
    md:px-14 md:pt-[40px] md:pb-[160px] 
    lg:px-[56px]
  "
>
    <div className="max-w-[1328px] w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 sm:gap-y-[24px] gap-x-4 sm:gap-x-[24px]">
      
      {/* Card 1 */}
      <div className="w-full align-center  flex flex-col gap-12 px-5 py-6 rounded-[16px] bg-[#0C0E12]">
        <div className="flex items-center gap-4">
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
            <Image
              src="/Images/listicon/shapee.png" // replace with your image
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
           <h2 className="text-white text-[18px] leading-[100%] font-medium tracking-normal font-[Space_Grotesk]">
  Julien Dupont
</h2>

            <p className="text-[#C0C0C0] text-sm">juliendupont@email.com</p>
          </div>
          <div className="ml-auto cursor-pointer">
           <Image
              src="/Images/listicon/edit1.png" // replace with your image
              alt="edit1"
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-[#A0A0A0] text-sm  text-center">Active since Jan 24, 2025</p>
      </div>

      {/* Card 2 */}
      <div className="w-full flex flex-col gap-10 p-5 rounded-[16px] bg-[#0C0E12]"> 
      <p className="text-white text-md font-medium leading-6 tracking-normal " style={{ fontFamily: "Space Grotesk_Medium" }}>
  Downloads this month
</p>

        <div className="flex flex-col gap-[12px]">
<h1 className="text-white text-[30px] leading-9 font-bold font-[Space_Grotesk]" style={{ fontFamily: "Space Grotesk_Bold" }}>
  703
</h1>
<div className="flex flex-row gap-[12px] w-full">
        <div className="flex flex-row items-center gap-[12px] w-full max-w-[258px]">
             <Image
              src="/Images/listicon/greenar.png" // replace with your image
              alt="edit1"
              width={20}
              height={20}
              className="object-cover"
            />
        <p  className="  text-[#079455]  text-sm font-medium"
    style={{ fontFamily: "Space Grotesk_Medium" }}>
            
            12%{" "}<span   style={{
    fontFamily: "Space Grotesk"}} className="text-sm font-normal leading-5 tracking-normal text-white/70 font-[Space_Grotesk]">
  vs last month
</span>

</p>
            </div>
          
        {/* your green chart image */}
      <Image
  src="/Images/listicon/greenr.png"
  alt="Chart"
  width={112}
  height={56}
  className="w-[112px] h-[56px] object-contain"
  priority
/>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full flex flex-col gap-10 p-5 rounded-[16px] bg-[#0C0E12]">
          <p className="text-white text-md font-medium leading-6 tracking-normal " style={{ fontFamily: "Space Grotesk_Medium" }}>
All time Downloads
</p>
    <div className="flex flex-col gap-[12px]">
<h1 className="text-white text-[30px] leading-9 font-bold font-[Space_Grotesk]" style={{ fontFamily: "Space Grotesk_Bold" }}>
  12.5k
</h1>
<div className="flex flex-row gap-[12px] w-full">
        <div className="flex flex-row items-center gap-[12px] w-full max-w-[258px]">
             <Image
              src="/Images/listicon/redar.png" // replace with your image
              alt="edit1"
              width={20}
              height={20}
              className="object-cover"
            />
        <p  className="  text-[#D92D20]  text-sm font-medium"
    style={{ fontFamily: "Space Grotesk_Medium" }}>
            
            12%{" "}<span   style={{
    fontFamily: "Space Grotesk"}} className="text-sm font-normal leading-5 tracking-normal text-white/70 font-[Space_Grotesk]">
  vs last month
</span>

</p>
            </div>
          
        {/* your green chart image */}
      <Image
  src="/Images/listicon/redg.png"
  alt="Chart"
  width={112}
  height={56}
  className="w-[112px] h-[56px] object-contain"
  priority
/>
          </div>
        </div>
   
       
      </div>
    </div>
    </div>
  );
}
