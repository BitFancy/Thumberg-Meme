import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Socials() {
  return (
    <AnimatedSection id='socials'>
      <div className='flex flex-col-reverse items-center md:flex-row justify-between gap-8 max-w-7xl mx-auto'>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <div className='w-64 md:w-80 lg:w-96 aspect-square relative'>
            <Image
              fill
              src={CONTRACT.logo6}
              alt='Logo'
              className='object-contain'
            />
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <h2 className='text-center md:text-left text-3xl lg:text-5xl font-extrabold mb-8 text-zinc-900'>
            Follow {CONTRACT.name} online
          </h2>
          <div className='flex items-center justify-center md:justify-start gap-4'>
            <Link href={CONTRACT.web}>
              <FaGlobe className='size-12 lg:size-16 transform hover:scale-110 transition duration-200 fill-blue-500' />
            </Link>
            {/* <Link href={CONTRACT.twitter}>
              <FaTwitter className='size-12 lg:size-16 transform hover:scale-110 transition duration-200 fill-blue-400' />
            </Link>
            <Link href={CONTRACT.discord}>
              <FaDiscord className='size-12 lg:size-16 transform hover:scale-110 transition duration-200 fill-purple-500' />
            </Link> */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
