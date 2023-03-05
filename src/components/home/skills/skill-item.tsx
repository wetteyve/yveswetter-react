import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import { IS_IOS } from '../../../utils/detect-ios';

type SkillItemProps = {
  skillTitle: string;
  skillLogo: React.ReactNode;
  rotationObserver: IntersectionObserver;
};

const SkillItem = ({ skillTitle, skillLogo, rotationObserver }: SkillItemProps) => {
  const logoRef = useRef<HTMLDivElement>(null);

  //observe logos
  useEffect(() => {
    if (logoRef.current) rotationObserver?.observe(logoRef.current);
  }, [rotationObserver]);

  const rotate = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const element = document.getElementById(skillTitle);
    element?.classList.add('instant-animation');
    if (element?.classList.contains(!IS_IOS(window.navigator) ? 'rotate-logo-forward' : 'rotate-logo-forward-ios')) {
      element?.classList.remove(!IS_IOS(window.navigator) ? 'rotate-logo-forward' : 'rotate-logo-forward-ios');
      element?.classList.add(!IS_IOS(window.navigator) ? 'rotate-logo-backward' : 'rotate-logo-backward-ios');
    } else {
      element?.classList.remove(!IS_IOS(window.navigator) ? 'rotate-logo-backward' : 'rotate-logo-backward-ios');
      element?.classList.add(!IS_IOS(window.navigator) ? 'rotate-logo-forward' : 'rotate-logo-forward-ios');
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
