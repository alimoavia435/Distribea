// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<footer  style={{ backgroundImage: "url('/Images/mine/FOOTERc.png')", backgroundSize:"100% 100%"}} className="bg-no-repeat text-white px-[18px] py-16 lg:px-[56px] lg:pt-[96px] lg:pb-[32px] flex justify-center">
  <div className="mx-0 w-full max-w-[1700px]">
        {/* Top Section */}
       <div className="flex !flex-col !md:flex-row !md:items-start !md:justify-between !gap-5 !md:gap-[48px] max-w-[1328px]">
          {/* Logo + tagline */}
          <div className="flex flex-col space-y-4 max-w-sm">
            {/* Logo */}
            <div className="flex items-center space-x-1 lg:space-x-3">
              <Image
                src="/Images/logomiddle.svg" // replace with your logo
                alt="Distribea Logo"
                width={79}
                height={80}
                className="max-[60px]:h-[70px]  lg:max-[79px]:h-[80px] lg:h-[79px]:w-[80px]  h-[60px] w-[70px] "
              />

              <h2
                className="
    font-bold 
    text-[#F7F7F7] 
    text-[40px] 
    md:text-[56px] 
    lg:text-[64px] 
    leading-[110%] 
    tracking-[-3px] 
    text-center
  "
                style={{ fontFamily: "Space Grotesk_Bold" }}
              >
                Distribea
              </h2>
            </div>
            <p
              style={{ fontFamily: "Space Grotesk" }}
              className="font-['Space_Grotesk'] font-normal text-[18px] leading-[140%] tracking-[-0.03em] text-[#CECFD2] mb-6 md:mb-10"
            >
              Music That Moves Your Story
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 ">
              <Link href="#">
                <Image
                  src="/Images/mine/x.svg"
                  alt="X"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Images/mine/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Images/mine/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Images/mine/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[1328px]  border-b border-[#0B1425] opacity-100 mx-auto"></div>

          {/* Links */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 lg:gap-24 text-sm">
            {/* Pages */}
            <div>
              <h3
                className="
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                Pages
              </h3>

              <ul className="space-y-[8px] sm:space-y-3">
                <li>
                  <Link href="/"   style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
 >Home</Link>
                </li>
                <li>
                  <Link href="/get-started" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Get Started</Link>
                </li>
                <li>
                  <Link href="/music-platforms" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Music Platforms</Link>
                </li>
                <li>
                  <Link href="/pricing" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Pricing</Link>
                </li>
                <li>
                  <Link href="/about" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>About Us</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3
                className="
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                Resources
              </h3>
              <ul className="space-y-[8px] sm:space-y-3">
                <li>
                  <Link href="/creators" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Creators</Link>
                </li>
                <li>
                  <Link href="/gaming" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Gaming</Link>
                </li>
                <li>
                  <Link href="/in-store" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>In-Store</Link>
                </li>
                <li>
                  <Link href="/licences" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Licences</Link>
                </li>
                <li>
                  <Link href="/ads" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Ads & Branding</Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3
                className="
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                Support
              </h3>
              <ul className="space-y-[8px] sm:space-y-3">
                <li>
                  <Link href="/contact" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Contact Us</Link>
                </li>
                <li>
                  <Link href="/livechat" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>LiveChat</Link>
                </li>
                <li>
                  <Link href="/faqs" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>FAQs</Link>
                </li>
                <li>
                  <Link href="/blogs" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Blogs</Link>
                </li>
              </ul>
            </div>

            {/* Legals */}
            <div>
              <h3
                className="
    font-normal 
    text-sm 
    leading-[1.25rem] 
    text-[#94979C] 
    mb-4
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                Legals
              </h3>
              <ul className="space-y-[8px] sm:space-y-3">
                <li>
                  <Link href="/terms" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Privacy & Policy</Link>
                </li>
                <li>
                  <Link href="/anti-fraud" style={{ fontFamily: "Space Grotesk" }}  className="font-['Space Grotesk'] font-medium text-base leading-6 tracking-[0%] text-[#F7F7F7] hover:underline"
>Anti-Fraud</Link>
                </li>
              </ul>
            </div>

          </div>

<div className="w-full max-w-[1328px]  border-b border-[#0B1425] opacity-100 mx-auto"></div>



        </div>

        {/* Bottom  */}

    <div className="mt-12 font-['Space_Grotesk'] font-normal text-sm leading-6 tracking-[0%] text-[#94979C]"  style={{ fontFamily: "Space Grotesk" }}>
  © 2025{" "}
  <span        style={{ fontFamily: "Space Grotesk_Bold" }}  className="font-['Space_Grotesk'] font-bold text-sm leading-6 tracking-[0%] text-[#94979C]">
    Distribea
  </span>
</div>

      </div>
    </footer>
  );
}
