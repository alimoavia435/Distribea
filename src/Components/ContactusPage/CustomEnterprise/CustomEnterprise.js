'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const cardsData = [
  {
    title: 'Exclusive Catalogue',
    description:
      'Access a unique and curated music collection available only to Custom & Enterprise clients. Stand out with tracks you won’t find anywhere else.',
    image: '/Images/contactus/cd1.webp'
  },
  {
    title: 'Restricted Access',
    description:
      'Enjoy a premium, invitation-only experience with exclusive tools and content, designed for professionals and businesses.',
     image: '/Images/contactus/cd2.webp'
  },
  {
    title: 'High Volume Capacity',
    description:
      'Manage and distribute large volumes of tracks effortlessly, tailored for growing businesses and enterprise needs.',
     image: '/Images/contactus/cd3.webp'
  },
]

const CustomEnterprise = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  // This hook builds a single ScrollTrigger-driven timeline that:
  // 1) Pins the section while the user scrolls
  // 2) Progresses through a sequence where each card takes a "focus" turn
  // 3) Uses directional snapping to settle on clean steps as you scroll
  useGSAP(
    () => {
      const cards = cardsRef.current

      // Initial state for all cards (lightly visible behind, no full transparency)
      gsap.set(cards, { autoAlpha: 1, opacity: 0.4, scale: 0.94, y: 60 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', // start when section top hits viewport top
          // Total scroll distance scales with number of cards
          // ~650px per card gives each step room to animate and snap cleanly
          end: () => `+=${cards.length * 650}`,
          pin: true, // keep the section fixed while scrolling through the sequence
          scrub: 0.3, // tie timeline progress to scroll position with slight smoothing
          anticipatePin: 1, // reduces pin-jump by anticipating layout changes
          // Snap to our labeled steps in scroll direction to avoid bouncing back
          snap: {
            // Use labels we add per card; only snap forward when scrolling down
            snapTo: 'labelsDirectional',
            duration: 50, // quick settle into place
            ease: 'power1.inOut'
          }
        }
      })

      cards.forEach((card, index) => {
        // Label each step for directional snapping to target
        tl.addLabel(`step-${index}`)

        // Bring current card to focus: full opacity/scale, move into place
        tl.to(card, { opacity: 1, scale: 1, y: 0, duration: 0.55 }, '>')
          // Ensure focused card sits above others (stacking context)
          .set(card, { zIndex: 100 + index }, '<')

        // Gently push previous cards to the back and keep them partially visible
        if (index > 0) {
          tl.to(
            cards.slice(0, index),
            {
              opacity: 0.45,
              scale: 0.92,
              y: -16,
              duration: 0.45,
              stagger: 0.02,
              ease: 'power2.inOut'
            },
            '<0.1' // overlap slightly with current focus animation
          )
            // Move previous further down the stacking order
            .set(cards.slice(0, index), { zIndex: 10 }, '<')
        }

        // Ensure upcoming cards are ready behind (visible but dim)
        if (index < cards.length - 1) {
          tl.set(cards.slice(index + 1), {
            opacity: 0.35,
            scale: 0.94,
            y: 60,
            zIndex: 1
          })
        }

        // A short pause after each step makes snapping land more reliably
        tl.to({}, { duration: 0.25 })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className='relative w-full bg-[#05070B] text-white overflow-hidden'
    >
      <div className='px-5 sm:px-6 md:px-8 pt-[70px] sm:pt-[120px] md:pt-[160px]'>
        <h2
          className='text-center text-[28px] sm:text-[30px] md:text-[36px] tracking-[-0.02em] text-[#f9f9f9]'
          style={{ fontFamily: 'Space Grotesk_Medium' }}
        >
          Custom & Enterprise Benefits
        </h2>

        {/* Stack container */}
        <div className='relative  h-[280px] sm:h-[420px] md:h-[360px]'>
          {cardsData.map((card, i) => (
            <div
              key={card.title}
              ref={el => (cardsRef.current[i] = el)}
              className='absolute inset-0 flex items-center justify-center pointer-events-none'
            >
              <div
                className='w-full max-w-[508px] rounded-[30px] p-[20px] md:p-[33px]  bg-gradient-to-br from-[#0E1116] to-[#0B1B34]'
                style={{ willChange: 'transform, opacity' }}
              >
                <div className='flex flex-col items-start gap-[50] md:gap-[80px]'>
                  <h3
                    className='text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] tex-[#f7f7f7]'
                    style={{ fontFamily: 'Space Grotesk_Medium' }}
                  >
                    {card.title}
                  </h3>
                  <div className='flex items-center gap-[15] sm:gap-[32px]'>
                    <Image
                      src={card.image}
                      alt=''
                      width={80}
                      height={80}
                      className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[8px]'
                    />
                    <p
                      className='text-[12px] sm:text-[13px] md:text-[14px] leading-[140%] text-[#94979C]'
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomEnterprise
