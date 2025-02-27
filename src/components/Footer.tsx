import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import { CONTRACT } from '@/constant/contract';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-4 text-center mt-10'>
      <MaxWidthWrapper>
        <p className='text-sm text-white'>
          Copyright {CONTRACT.name} © {new Date().getFullYear()}. All rights
          reserved
        </p>
      </MaxWidthWrapper>
    </footer>
  );
}
