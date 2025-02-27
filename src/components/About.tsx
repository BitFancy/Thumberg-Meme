import Image from 'next/image';
import { FaBolt, FaEarthAmericas,FaLeaf, FaLock } from 'react-icons/fa6';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function About() {
  return (
    <AnimatedSection
      id='about'
      className='shadow-2xl py-20 bg-gradient-to-b from-white/30 to-green-50/35 rounded-3xl mx-4 my-8'
    >
      <div className='flex flex-col items-center justify-center mx-5 lg:mx-20 gap-10'>
        <h1 className='text-4xl lg:text-5xl font-extrabold text-center text-zinc-900 relative'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400'>
            WTF is {CONTRACT.name}
          </span>{' '}
          <span className='text-zinc-800'>(${CONTRACT.symbol})? </span>
          <span className='inline-block animate-spin-slow'>🌍</span>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-400 rounded-full'></div>
        </h1>

        <div className='hero flex flex-col-reverse justify-between lg:flex-row items-center gap-12 mx-5 lg:mx-10'>
          <div className='main-head text-zinc-900 w-full lg:w-2/3 flex flex-col gap-8'>
            <section className='about-section p-6 bg-white rounded-2xl shadow-lg border border-green-100'>
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <FaBolt className='text-green-500' />
                Built on Solana; This coin is fast and secure!
              </h2>
              <p className='text-zinc-600 text-lg leading-relaxed'>
                ${CONTRACT.symbol} Token is built on the SOLANA ($SOL) Network;
                using{' '}
                <span className='font-bold text-green-600'>
                  99.9% less power
                </span>{' '}
                than BITCOIN network. ${CONTRACT.symbol} is Sustainable, $
                {CONTRACT.symbol} is tradeable. ${CONTRACT.symbol} is clean air
                and clean water. ${CONTRACT.symbol} is the future of all coins
                based on Thumbs!
              </p>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 bg-white rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center'>
                <FaLeaf className='text-green-500 text-3xl mb-2' />
                <h3 className='font-bold mb-1'>Eco-Friendly</h3>
                <p className='text-sm text-zinc-600'>
                  Minimal environmental impact
                </p>
              </div>

              <div className='p-4 bg-white rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center'>
                <FaLock className='text-green-500 text-3xl mb-2' />
                <h3 className='font-bold mb-1'>Secure</h3>
                <p className='text-sm text-zinc-600'>
                  Built on Solana's secure network
                </p>
              </div>

              <div className='p-4 bg-white rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center'>
                <FaEarthAmericas className='text-green-500 text-3xl mb-2' />
                <h3 className='font-bold mb-1'>Sustainable</h3>
                <p className='text-sm text-zinc-600'>
                  For a greener blockchain future
                </p>
              </div>
            </div>
          </div>

          <div className='w-[250px] sm:w-[300px] lg:w-1/3 aspect-square mt-8 lg:mt-0 relative group'>
            {/* Glow effect */}
            <div className='absolute inset-0 bg-green-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity'></div>

            {/* Rotating border */}
            <div className='absolute inset-2 rounded-full border-4 border-dashed border-green-400 animate-spin-slow'></div>

            {/* Main image */}
            <Image
              fill
              className='rounded-full object-contain transition-transform duration-700 group-hover:scale-105 animate-bounce'
              src={CONTRACT.logo5}
              alt='Greta Thumb Logo'
              priority
            />

            {/* Token badge - fixed to be on top with higher z-index */}
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold py-2 px-6 rounded-full shadow-lg border border-green-200 text-sm z-20'>
              ${CONTRACT.symbol}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
