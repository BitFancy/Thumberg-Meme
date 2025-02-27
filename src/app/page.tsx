import About from '@/components/About';
import Hero from '@/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Partners from '@/components/Partners';
import Socials from '@/components/Socials';
import Tokenomics from '@/components/Tokenomics';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Hero />
        <About />
        <Tokenomics />
        <Partners />
        <Socials />
      </MaxWidthWrapper>
    </>
  );
}
