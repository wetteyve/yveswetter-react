import './animate-3d.css';

import { useRef } from 'react';

import { rotationObserver, useIntersectionObserver } from '../../../utils/intersection-observer';

type SkillItemProps = {
  skillTitle: string;
  skillLogo?: React.ReactNode;
};

const SkillItem = ({ skillTitle, skillLogo }: SkillItemProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(logoRef, rotationObserver);

  const rotate = () => {
    const element = document.getElementById(skillTitle);
    if (element?.classList.contains('rotate-logo-forward')) {
      element?.classList.remove('rotate-logo-forward');
      element?.classList.add('rotate-logo-backward');
    } else {
      element?.classList.remove('rotate-logo-backward');
      element?.classList.add('rotate-logo-forward');
    }
  };

  return (
    <div className='flex flex-col items-center mr-10 pb-6'>
      <div>
        <h4 className='pb-2'>{skillTitle}</h4>
      </div>
      <div ref={logoRef} id={skillTitle} className='h-max' onClick={rotate}>
        {skillLogo}
      </div>
    </div>
  );
};

export default SkillItem;
