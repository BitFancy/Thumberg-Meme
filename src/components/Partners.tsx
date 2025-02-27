import Image from 'next/image';
import Link from 'next/link';
import { FaHandshake } from 'react-icons/fa';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Partners() {
  return (
    <AnimatedSection id='partners'>
      <div className='container mx-auto px-4'>
        {/* Header with decorative elements */}
        <div className='flex flex-col items-center mb-16 relative'>
          <div className='opacity-10'>
            <FaHandshake className='text-green-950 text-9xl' />
          </div>

          <h2 className='text-4xl md:text-5xl font-bold m-6 text-center relative z-10'>
            <span className='bg-clip-text bg-green-950'>Our Partners</span>
          </h2>
        </div>

        {/* Partner Cards - Modern, Clean Layout */}
        <div className='flex flex-wrap items-center justify-center gap-6 max-w-6xl mx-auto'>
          {CONTRACT.partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target='_blank'
              className='group'
            >
              <div className='bg-white/30 rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100'>
                {/* Partner Logo Area */}
                <div className='p-4 bg-gray-50/30 flex items-center justify-center h-32 relative'>
                  <div className='relative w-20 h-20 transition-transform duration-300 group-hover:scale-110'>
                    <Image
                      fill
                      src={partner.imgUrl}
                      alt={partner.name}
                      className='object-contain'
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <h3 className='font-semibold text-lg text-center text-gray-800 mb-1'>
                  {partner.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
