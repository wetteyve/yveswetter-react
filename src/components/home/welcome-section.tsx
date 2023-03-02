import { useRef } from 'react';

import yves from '../../assets/yves.webp';
import { data } from '../../content/home-data';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';

const WelcomeSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(textRef, fadeInObserver);
  useIntersectionObserver(imageRef, fadeInObserver);

  return (
    data && (
      <>
        <div ref={textRef} className=' opacity-0'>
          <h1 className='r-text-xl font-semibold pb-6'>{data.welcomeHeading}</h1>
          <p className='r-text-m pb-6'>{data.welcomeText}</p>
        </div>
        <div ref={imageRef} data-origin='right' className='opacity-0 max-w-[300px] sm:max-w-[450px] md:max-w-[600px] mx-auto pb-12'>
          <img src={yves} alt='image yves wetter' className='rounded' />
        </div>
      </>
    )
  );
};

export default WelcomeSection;
