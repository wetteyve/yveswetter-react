import Lottie from 'lottie-react';
import Link from 'next/link';
import { useRef } from 'react';

import projectsAnimation from '../../assets/rocket-lottie.json';
import { data } from '../../content/home-data';

const ProjectsSection = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={projectsSectionRef} data-origin='bottom' className='pb-12  '>
      <h1 className='r-text-xl font-semibold pb-6'>{data.projectsHeading}</h1>
      <p className='r-text-m pb-6'>{data.projectsIntroduction}</p>
      <Link href={'/projects'}>
        <div className='cursor-pointer transition-all ease-in duration-150 hover:scale-105 max-w-[600px] mx-auto shadow-2xl rounded-lg bg-white'>
          <Lottie animationData={projectsAnimation} loop={true} className='aspect-square' />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsSection;
