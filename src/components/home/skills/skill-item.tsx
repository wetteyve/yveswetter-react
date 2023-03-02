import './animate-3d.css';

import { BaseSyntheticEvent, useRef } from 'react';

import { IS_IOS } from '../../../utils/detect-ios';
import { rotationObserver, useIntersectionObserver } from '../../../utils/intersection-observer';

type SkillItemProps = {
  skillTitle: string;
  skillLogo?: React.ReactNode;
};

const SkillItem = ({ skillTitle, skillLogo }: SkillItemProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(logoRef, rotationObserver);

  const rotate = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const element = document.getElementById(skillTitle);
    if (element?.classList.contains(!IS_IOS ? 'rotate-logo-forward' : 'rotate-logo-forward-ios')) {
      element?.classList.remove(!IS_IOS ? 'rotate-logo-forward' : 'rotate-logo-forward-ios');
      element?.classList.add(!IS_IOS ? 'rotate-logo-backward' : 'rotate-logo-backward-ios');
    } else {
      element?.classList.remove(!IS_IOS ? 'rotate-logo-backward' : 'rotate-logo-backward-ios');
      element?.classList.add(!IS_IOS ? 'rotate-logo-forward' : 'rotate-logo-forward-ios');
    }
  };

  return (
    <div className='flex flex-col items-center mr-10 pb-6 max-w-[130px] justify-end'>
      <div>
        <h4 className='pb-2'>{skillTitle}</h4>
      </div>
      <div ref={logoRef} id={skillTitle} className='h-max' onClick={(e) => rotate(e)}>
        {skillLogo}
      </div>
    </div>
  );
};

export default SkillItem;
