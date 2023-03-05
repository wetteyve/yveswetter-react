import Image from 'next/image';
import { useEffect, useRef } from 'react';

import yves from '../../assets/yves.webp';
import { data } from '../../content/home-data';

type WelcomeSectionProps = {
  fadeInObserver: IntersectionObserver;
};

const WelcomeSection = ({ fadeInObserver }: WelcomeSectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInObserver.observe(textRef.current as Element);
    fadeInObserver.observe(imageRef.current as Element);
  }, []);

  return (
    data && (
      <>
        <div className='opacity-0' data-origin='top' ref={textRef}>
          <h1 className='r-text-xl font-semibold pb-6'>{data.welcomeHeading}</h1>
          <p className='r-text-m pb-6'>{data.welcomeText}</p>
        </div>
        <div className='opacity-0 max-w-[300px] sm:max-w-[450px] md:max-w-[600px] mx-auto pb-12' data-origin='bottom' ref={imageRef}>
          <Image src={yves} alt='image yves wetter' className='rounded' />
        </div>
      </>
    )
  );
};

export default WelcomeSection;
