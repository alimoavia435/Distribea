// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0c10] to-[#0e1117] text-gray-300 px-6 md:px-20 lg:px-32 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex !flex-col !md:flex-row !md:items-start !md:justify-between !gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col space-y-4 max-w-sm">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
               src='/Images/logomiddle.svg'// replace with your logo
                alt="Distribea Logo"
                width={79}
                height={80}
                 className='max-[79px]:h-[80px]' 
              />
            
              <h2 className="text-2xl font-bold text-white">Distribea</h2>
            </div>
            <p className="text-sm text-gray-400">
              Music That Moves Your Story
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="#">
                <Image src="/Images/mine/x.svg" alt="X" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/Images/mine/instagram.svg" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/Images/mine/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/Images/mine/youtube.svg" alt="YouTube" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
            {/* Pages */}
            <div>
              <h3 className="font-semibold text-gray-400 mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/get-started">Get Started</Link></li>
                <li><Link href="/music-platforms">Music Platforms</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/creators">Creators</Link></li>
                <li><Link href="/gaming">Gaming</Link></li>
                <li><Link href="/in-store">In-Store</Link></li>
                <li><Link href="/licences">Licences</Link></li>
                <li><Link href="/ads">Ads & Branding</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-400 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/livechat">LiveChat</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
              </ul>
            </div>

            {/* Legals */}
            <div>
              <h3 className="font-semibold text-gray-400 mb-4">Legals</h3>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy & Policy</Link></li>
                <li><Link href="/anti-fraud">Anti-Fraud</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-xs text-gray-500">
          © 2025 <span className="font-semibold text-white">Distribea</span>
        </div>
      </div>
    </footer>
  );
}
