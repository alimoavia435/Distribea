import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
const Faqs = () => {
  const router = useRouter()
  const [openIndex, setOpenIndex] = React.useState(0)

  const faqs = [
    {
      q: 'Is there a free trial available?',
      a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      q: 'Can I change my plan later?',
      a: 'Yes, you can upgrade, downgrade, or cancel at any time.',
      a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      q: 'What is your cancellation policy?',
      a: 'You can cancel anytime from your account billing settings.'
    },
    {
      q: 'Can other info be added to an invoice?',
      a: 'Yes, you can add company details, VAT, and more to invoices.'
    },
    {
      q: 'How does billing work?',
      a: 'Billing occurs monthly or annually depending on your subscription.'
    },
    {
      q: 'How do I change my account email?',
      a: 'Update your email from account settings; we will verify the new email.'
    }
  ]

  const toggle = idx => {
    setOpenIndex(prev => (prev === idx ? -1 : idx))
  }

  return (
    <section className='mx-auto max-w-[768px] px-5 sm:px-6 pt-[50px] md:pt-[72px] pb-[60px] md:pb-[96px] text-white'>
      <header className='text-center'>
        <h2
          className='text-[#F9F9F9] text-[30px] md:text-[40px] xl:text-[48px] tracking-[-2px]'
          style={{ fontFamily: 'Space Grotesk_Medium' }}
        >
          Frequently asked questions
        </h2>
        <p
          className='mt-3 text-[16px] sm:text-[20px] text-[#FAFAFA99]'
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Everything you need to know about the product and billing.
        </p>
      </header>

      <div className='mt-10 sm:mt-12 divide-y divide-[#1F2937] border-t border-b border-[#1F2937]'>
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className='py-4 sm:py-5'>
              <button
                type='button'
                onClick={() => toggle(idx)}
                className='w-full flex items-center justify-between gap-4 text-left'
                aria-expanded={isOpen}
              >
                <span
                  className='text-[16px] sm:text-[18px] md:text-[24px] text-[#F9F9F9E5]'
                  style={{
                    fontFamily: isOpen ? 'Space Grotesk_Bold' : 'Space Grotesk'
                  }}
                >
                  {item.q}
                </span>
                <span
                  className='flex h-6 w-6 items-center justify-center rounded-full border border-[#374151] text-[#D1D5DB]'
                  aria-hidden='true'
                >
                  {isOpen ? (
                    // minus icon
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5 12H19'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
                  ) : (
                    // plus icon
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 5V19'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                      <path
                        d='M5 12H19'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen && (
                <p
                  className='mt-3 text-[14px] sm:text-[16px] leading-[1.6] text-[#FAFAFA99] pr-7'
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className='mt-14 sm:mt-16 flex flex-col items-center text-center'>
        <div className='flex'>
          <Image
            src='/Images/pricing/av1.svg'
            alt=''
            height={48}
            width={48}
            className='mr-[-20px]'
          />
          <Image
            src='/Images/pricing/av2.svg'
            alt=''
            height={56}
            width={56}
            className='relative'
          />
          <Image
            src='/Images/pricing/av3.svg'
            alt=''
            height={48}
            width={48}
            className='ml-[-20px]'
          />
        </div>

        <h3
          className='mt-6 text-[18px] sm:text-[24px] text-[#F9F9F9]'
          style={{ fontFamily: 'Space Grotesk_Bold' }}
        >
          Still have questions?
        </h3>
        <p
          className='mt-2 text-[14px] sm:text-[16px] text-[#CECFD2]'
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <a
          className='cursor-pointer mt-6 inline-flex items-center justify-center rounded-full border border-[#374151] px-5 py-2.5 text-[13px] sm:text-[14px] text-white hover:bg-white/5 transition-colors'
          style={{ fontFamily: 'Space Grotesk_Medium' }}
          onClick={() => router.push('/Contact')}
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  )
}

export default Faqs
