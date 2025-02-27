'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import AnimatedSection from '@/components/AnimatedSection';
import CopyButton from '@/components/CopyButton';

import { CONTRACT } from '@/constant/contract';

export default function Hero() {
  return (
    <AnimatedSection className='min-h-screen flex flex-col justify-center items-center relative text-white text-center py-10'>
      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Column - Image */}
        <div className='w-full aspect-square relative max-w-md mx-auto group animate-pulse'>
          <div className='absolute -inset-4 bg-green-400 rounded-full opacity-30 blur-xl'></div>
          <Image
            fill
            className='rounded-full object-cover object-center transition-transform duration-700 group-hover:scale-105'
            src={CONTRACT.logo5}
            alt='THUMBerg Logo'
          />
          <div className='absolute -bottom-2 -right-2 bg-green-500 p-3 rounded-full shadow-lg'>
            <FaLeaf className='size-8 text-white' />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className='flex flex-col gap-8 items-center lg:items-start text-center lg:text-left'>
          <h1 className='text-4xl lg:text-6xl font-bold text-gray-900'>
            Greta THUMBerg
            <span className='block text-2xl lg:text-3xl mt-4 text-gray-900 relative bg-gray-100 p-4 rounded-lg shadow-md before:content-[""] before:absolute before:left-4 before:-bottom-3 before:w-4 before:h-4 before:bg-gray-100 before:rotate-45 before:shadow-md'>
              "BITCOINZ IS BADE FOR DA INVIRONMANT"
            </span>
          </h1>

          <p className='text-xl text-gray-600 leading-relaxed'>
            Greta Thinks Bitcoinz is Bade for da Invironmant. So we made
            GretaTHUMBerg to show Greta that Crypto can have a green thumb too.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
            <Link
              // href={`https://pancakeswap.finance/swap?outputCurrency=${CONTRACT.ca}`}
              href={`https://raydium.io/swap/?inputMint=sol&outputMint=${CONTRACT.ca}`}
              target='_blank'
              className='flex-1'
            >
              <button
                type='button'
                className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 text-lg transition-all shadow-lg hover:shadow-green-400/50 hover:-translate-y-1'
              >
                Buy Now
                <FiExternalLink className='size-6' />
              </button>
            </Link>

            <Link href='#about' className='flex-1'>
              <button
                type='button'
                className='w-full border-2 border-green-500 hover:bg-green-500 text-green-600 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-green-400/30 hover:-translate-y-1'
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Contract Address */}
          <div className='flex items-center gap-3 w-full max-w-md bg-black/10 backdrop-blur-sm rounded-lg p-3 shadow-inner'>
            <span className='text-sm font-medium text-gray-700'>CA:</span>
            <input
              type='text'
              className='flex-1 bg-transparent border-none text-sm font-mono text-gray-800'
              value={CONTRACT.ca}
              disabled
            />
            <CopyButton value={CONTRACT.ca} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
