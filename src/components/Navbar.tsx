'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import { CONTRACT } from '@/constant/contract';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling with offset
  interface ScrollElementEvent extends React.MouseEvent<HTMLAnchorElement> {
    preventDefault: () => void;
  }

  const handleScroll = (e: ScrollElementEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Get the navbar height (14 * 4 = 56px) plus some extra padding (24px)
      const offset = 80;
      const elementPosition: number = element.getBoundingClientRect().top;
      const offsetPosition: number =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

  // Add scroll padding to account for fixed navbar
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = '80px';
    return () => {
      document.documentElement.style.scrollPaddingTop = '0';
    };
  }, []);

  return (
    <nav className='sticky inset-x-0 top-0 z-[100] h-14 w-full bg-white/95 md:bg-white/75 backdrop-blur-lg'>
      <MaxWidthWrapper>
        <div className='flex w-full h-14 justify-between md:justify-center items-center space-x-4'>
          <Link
            href='/'
            className='font-semibold bg-text-gradient-1 bg-clip-text text-transparent flex-1'
          >
            {CONTRACT.name}
          </Link>

          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FiX className='size-6' />
              ) : (
                <FiMenu className='size-6' />
              )}
            </button>
          </div>

          <a
            href='#about'
            onClick={(e) => handleScroll(e, 'about')}
            className='hidden md:block flex-1 cursor-pointer'
          >
            About
          </a>
          <a
            href='#tokenomics'
            onClick={(e) => handleScroll(e, 'tokenomics')}
            className='hidden md:block flex-1 cursor-pointer'
          >
            Tokenomics
          </a>
          <a
            href='#partners'
            onClick={(e) => handleScroll(e, 'partners')}
            className='hidden md:block flex-1 cursor-pointer'
          >
            Partners
          </a>
          <a
            href='#socials'
            onClick={(e) => handleScroll(e, 'socials')}
            className='hidden md:block flex-1 cursor-pointer'
          >
            Socials
          </a>
          <Link
            href={CONTRACT.telegram}
            target='_blank'
            className='hidden md:block flex-1'
          >
            <button
              type='button'
              className='w-full border border-black rounded-full p-2 focus:outline-none focus:ring-4 focus:ring-white text-sm md:hover:-translate-y-0.5'
            >
              <div className='flex items-center justify-center gap-x-2'>
                <FaTelegram className='size-6' /> Telegram
              </div>
            </button>
          </Link>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <div className='absolute inset-x-0 flex flex-col space-y-2 bg-white/95 backdrop-blur-lg text-xs px-4 pb-4'>
              <a href='#about' onClick={(e) => handleScroll(e, 'about')}>
                About
              </a>
              <a
                href='#tokenomics'
                onClick={(e) => handleScroll(e, 'tokenomics')}
              >
                Tokenomics
              </a>
              <a href='#partners' onClick={(e) => handleScroll(e, 'partners')}>
                Partners
              </a>
              <a href='#socials' onClick={(e) => handleScroll(e, 'socials')}>
                Socials
              </a>
              <Link href={CONTRACT.telegram} target='_blank'>
                <button
                  type='button'
                  className='border border-black rounded-full p-1 focus:outline-none focus:ring-4 focus:ring-white text-sm'
                >
                  <div className='flex items-center justify-center gap-x-1'>
                    <FaTelegram className='size-4' /> Telegram
                  </div>
                </button>
              </Link>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
}
