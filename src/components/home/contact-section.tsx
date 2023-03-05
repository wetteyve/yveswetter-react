import Lottie from 'lottie-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import contactAnimation from '../../assets/contact-lottie.json';
import { data } from '../../content/home-data';

const ContactSection = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contactSectionRef} data-origin='bottom' className='pb-12  '>
      <h1 className='r-text-xl font-semibold pb-6'>{data.contactHeading}</h1>
      <p className='r-text-m pb-6'>{data.contactIntroduction}</p>
      <Link href={'/contact'}>
        <div className='cursor-pointer transition-all ease-in duration-150 hover:scale-105 max-w-[600px] mx-auto shadow-2xl rounded-lg bg-white'>
          <Lottie animationData={contactAnimation} loop={true} className='aspect-square' />
        </div>
      </Link>
    </div>
  );
};

export default ContactSection;
