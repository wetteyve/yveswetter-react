import { useRef } from 'react';

import { data } from '../../content/home-data';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';

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
