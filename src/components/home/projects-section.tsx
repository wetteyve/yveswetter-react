import Lottie from 'lottie-react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import projectsAnimation from '../../assets/rocket-lottie.json';
import { data } from '../../content/home-data';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';

const ProjectsSection = () => {
  const history = useHistory();
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(projectsSectionRef, fadeInObserver);

  return (
    <div ref={projectsSectionRef} data-origin='bottom' className='pb-12 opacity-0'>
      <h1 className='r-text-xl font-semibold pb-6'>{data.projectsHeading}</h1>
      <p className='r-text-m pb-6'>{data.projectsIntroduction}</p>
      <div
        onClick={() => history.push('/projects')}
        className='cursor-pointer transition-all ease-in duration-150 hover:scale-105 max-w-[600px] mx-auto shadow-2xl rounded-lg bg-white'
      >
        <Lottie animationData={projectsAnimation} loop={true} className='aspect-square' />
      </div>
    </div>
  );
};

export default ProjectsSection;
