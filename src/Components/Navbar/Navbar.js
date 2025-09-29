import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()
  const toggleDrawer = open => () => {
    setDrawerOpen(open)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = ['Home', 'Get Started', 'Features', 'Pricing', 'About']

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
              src='/Images/logo.svg'
              alt='logo'
              width={150}
              height={40}
              className='max-[768px]:w-[120px] cursor-pointer'
              priority
            />
          </div>

          {/* Center - Nav links (Desktop only) */}
          <div className='hidden md:flex max-[1000px]:space-x-[18px] space-x-[24px]  text-[rgba(247,247,247,1)]'>
            {navLinks.map(link => (
              link === 'Features' ? (
                <select
                  key={link}
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
                  key={link}
                  className='max-[1000px]:text-[14px] text-[16px] font-[500] capitalize cursor-pointer'
                  style={{
                    fontFamily: 'Space Grotesk_Medium',
                    textTransform: 'capitalize'
                  }}
                  onClick={() => {
                    if (link === 'Home') scrollToSection('hero')
                    else if (link === 'Get Started') scrollToSection('essential-features')
                    else if (link === 'Pricing') scrollToSection('pricing')
                    else if (link === 'About') scrollToSection('card-categories')
                  }}
                >
                  {link}
                </button>
              )
            ))}
          </div>

          {/* Right - Buttons (Desktop) */}
          <div className='hidden md:flex space-x-[12px]'>
            <button
              className='cursor-pointer text-white border border-[rgba(55,58,65,1)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-full px-[16px] py-[10px] max-[1000px]:text-[14px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Login')}
            >
              Log in
            </button>
            <button
              className='cursor-pointer bg-[var(--Colors-Blue-700,rgba(23,92,211,1))] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
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
              <img src='/Images/menu.svg' alt='menu' />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className='w-64 bg-black h-full text-white flex flex-col'>
          <List>
            {navLinks?.map(text => (
              <ListItem key={text}>
                {text === 'Features' ? (
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
                    onClick={() => {
                      if (text === 'Home') scrollToSection('hero')
                      else if (text === 'Get Started') scrollToSection('essential-features')
                      else if (text === 'Pricing') scrollToSection('pricing')
                      else if (text === 'About') scrollToSection('card-categories')
                      setDrawerOpen(false)
                    }}
                  >
                    {text}
                  </p>
                )}
              </ListItem>
            ))}
          </List>
          <Divider className='bg-[rgba(55,58,65,1)]' />
          <div className='flex flex-col space-y-3 p-4'>
            <button
              className='cursor-pointer text-[rgba(247,247,247,1)] border border-[rgba(55,58,65,1)] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
              style={{ fontFamily: 'Space Grotesk_Bold' }}
              onClick={() => router.push('/Login')}
            >
              Log in
            </button>
            <button
              className='cursor-pointer text-[rgba(247,247,247,1)] bg-[var(--Colors-Blue-700,rgba(23,92,211,1))] shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs)] rounded-full px-[16px] py-[10px] text-[15px] font-[700]'
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
