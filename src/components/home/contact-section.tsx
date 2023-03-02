import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import contactAnimation from '../../assets/contact-lottie.json';
import { data } from '../../content/home-data';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';

const ContactSection = () => {
  const history = useHistory();
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(contactSectionRef, fadeInObserver);

  return (
    <div ref={contactSectionRef} data-origin='bottom' className='pb-12 opacity-0'>
      <h1 className='r-text-xl font-semibold pb-6'>{data.contactHeading}</h1>
      <p className='r-text-m pb-6'>{data.contactIntroduction}</p>
      <div
        onClick={() => history.push('/contact')}
        className='cursor-pointer transition-all ease-in duration-150 hover:scale-105 max-w-[600px] mx-auto shadow-2xl rounded-lg bg-white'
      >
        <Lottie animationData={contactAnimation} loop={true} className='aspect-square' />
      </div>
    </div>
  );
};

export default ContactSection;
