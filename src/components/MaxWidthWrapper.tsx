import Image from 'next/image';

import { cn } from '@/lib/utils';

interface MaxWidthWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  bgAlt?: string;
}

export default function MaxWidthWrapper({
  children,
  className,
  bgImage = '/shiba.jpg',
  bgAlt = 'Background',
  ...props
}: MaxWidthWrapperProps) {
  return (
    <div className='relative' {...props}>
      <div className='absolute inset-0 -z-10 opacity-30'>
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          className='object-cover blur-sm'
          priority
        />
      </div>
      <div
        className={cn(
          'mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20 relative',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
