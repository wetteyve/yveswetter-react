import { useRef } from 'react';

import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';
import { data } from './data';

const ContactSection = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(contactSectionRef, fadeInObserver);

  return (
    <div ref={contactSectionRef} data-origin='bottom' className='pb-12 opacity-0'>
      <h1 className='r-text-xl font-semibold pb-6'>{data.contactHeading}</h1>
      <p className='r-text-m pb-6'>{data.contactIntroduction}</p>
    </div>
  );
};

export default ContactSection;
