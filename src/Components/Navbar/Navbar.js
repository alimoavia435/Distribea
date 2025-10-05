import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter , usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleDrawer = open => () => {
    setDrawerOpen(open)
  }

  // Hybrid navigation (scroll if on home, else push with hash)
  const handleNavClick = (sectionId) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
    setDrawerOpen(false)
  }

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Get Started', id: 'essential-features' },
    { label: 'Features', id: 'features' }, // dropdown later
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'card-categories' }
  ]

  return (
    <>
      <AppBar
        position='static'
        className='bg-transparent shadow-none max-[1000px]:px-[0px] px-[32px]'
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar className='flex justify-between py-[16px]'>
          {/* Left - Logo */}
          <div className='flex items-center space-x-2'>
            <Image
              src='/Images/logo.webp'
              alt='logo'
              width={150}
              height={40}
              className='max-[768px]:w-[120px] cursor-pointer'
              priority
            />
          </div>

          {/* Center - Nav links (Desktop only) */}
          <div className='hidden md:flex max-[1000px]:space-x-[18px] space-x-[24px] text-[rgba(247,247,247,1)]'>
            {navLinks.map(link =>
              link.label === 'Features' ? (
                <select
                  key={link.label}
                  className='max-[1000px]:text-[14px] text-[16px] font-[500] capitalize bg-transparent border-none outline-none cursor-pointer'
                  style={{
                    fontFamily: 'Space Grotesk_Medium',
                    textTransform: 'capitalize',
                    color: 'rgba(247,247,247,1)'
                  }}
                >
                  <option value="features" className='bg-black text-white'>Features</option>
                </select>
              ) : (
                <button
                  key={link.label}
                  className='max-[1000px]:text-[14px] text-[16px] font-[500] capitalize cursor-pointer'
                  style={{
                    fontFamily: 'Space Grotesk_Medium',
                    textTransform: 'capitalize'
                  }}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Right - Buttons (Desktop) */}
          <div className='hidden md:flex space-x-[12px]'>
            <button
              className='cursor-pointer text-white border border-[rgba(55,58,65,1)] shadow rounded-full px-[16px] py-[10px] max-[1000px]:text-[14px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Login')}
            >
              Log in
            </button>
            <button
              className='cursor-pointer bg-[rgba(23,92,211,1)] shadow rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Signup')}
            >
              Join Us
            </button>
          </div>

          {/* Hamburger Menu (Mobile only) */}
          <div className='md:hidden'>
            <IconButton onClick={toggleDrawer(true)} className='text-white cursor-pointer'>
              {/* <MenuIcon /> */}
              <Image src='/Images/menu.svg' alt='menu' width={24} height={24} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className='w-64 bg-black h-full text-white flex flex-col'>
          <List>
            {navLinks?.map(link => (
              <ListItem key={link.label}>
                {link.label === 'Features' ? (
                  <select
                    className='text-[16px] text-[rgba(247,247,247,1)] font-[500] capitalize bg-transparent border-none outline-none cursor-pointer'
                    style={{
                      fontFamily: 'Space Grotesk_Medium',
                      textTransform: 'capitalize',
                      color: 'rgba(247,247,247,1)'
                    }}
                  >
                    <option value="features" className='bg-black text-white'>Features</option>
                  </select>
                ) : (
                  <p
                    className='text-[16px] text-[rgba(247,247,247,1)] font-[500] capitalize cursor-pointer'
                    style={{
                      fontFamily: 'Space Grotesk_Medium',
                      textTransform: 'capitalize'
                    }}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </p>
                )}
              </ListItem>
            ))}
          </List>
          <Divider className='bg-[rgba(55,58,65,1)]' />
          <div className='flex flex-col space-y-3 p-4'>
            <button
              className='cursor-pointer text-[rgba(247,247,247,1)] border border-[rgba(55,58,65,1)] shadow rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Login')}
            >
              Log in
            </button>
            <button
              className='cursor-pointer text-[rgba(247,247,247,1)] bg-[rgba(23,92,211,1)] shadow rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Signup')}
            >
              Join Us
            </button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
