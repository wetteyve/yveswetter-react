import { useRef } from 'react';

import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';
import { data } from './data';

const ProjectsSection = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(projectsSectionRef, fadeInObserver);

  return (
    <div ref={projectsSectionRef} data-origin='bottom' className='pb-12 opacity-0'>
      <h1 className='r-text-xl font-semibold pb-6'>{data.projectsHeading}</h1>
      <p className='r-text-m pb-6'>{data.projectsIntroduction}</p>
    </div>
  );
};

export default ProjectsSection;
