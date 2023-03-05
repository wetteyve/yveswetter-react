import { IS_IOS } from '@/utils/detect-ios';
import { useEffect, useRef, useState } from 'react';

import { data } from '../../../content/home-data';
import { Accordion, AccordionItem } from '../../accordion/accordion';
import SkillItem from './skill-item';

const SkillsSection = () => {
  const skillsSection = useRef<HTMLDivElement>(null);
  const [rotationObserver, setRotationObserver] = useState<IntersectionObserver>();

  //setup intersection observer
  useEffect(() => {
    setRotationObserver(
      new IntersectionObserver(
        (entries) => {
          entries
            .filter((e) => e.isIntersecting)
            .forEach((entry, index) => {
              if (!(entry.target instanceof HTMLElement) && !(entry.target instanceof SVGElement)) return;
              if (!entry.target.style.animationDelay) entry.target.style.animationDelay = `${150 * index}ms`;
              entry.target.classList.add(IS_IOS(window.navigator) ? 'rotate-logo-forward-ios' : 'rotate-logo-forward');
              rotationObserver?.unobserve(entry.target);
            });
        },
        {
          threshold: 0.3,
        }
      )
    );
  }, []);

  const items =
    data.skills.map((s: any) => {
      return {
        title: s.title,
        content: (
          <div className='flex flex-wrap justify-evenly md:justify-start'>
            {s.items.map((e: any, i: number) => (
              <SkillItem
                key={`${i}-${s.title}`}
                skillTitle={e.title}
                skillLogo={e.logo}
                rotationObserver={rotationObserver as IntersectionObserver}
              />
            ))}
          </div>
        ),
      } as AccordionItem;
    }) || [];

  return (
    <div ref={skillsSection} data-origin='bottom' className='pb-12  '>
      <h1 className='r-text-xl font-semibold pb-6'>{data.skillsHeading}</h1>
      <p className='r-text-m pb-6'>{data.skillsIntroduction}</p>
      <div className='pb-6'>{rotationObserver && <Accordion items={items} />}</div>
    </div>
  );
};

export default SkillsSection;
