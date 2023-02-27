import './skills-animation.css';

import { useRef } from 'react';

import { fadeInObserver, useIntersectionObserver } from '../../../utils/intersection-observer';
import { Accordion, AccordionItem } from '../../accordion/accordion';
import data from '../data.json';
import SkillItem from './skill-item';

const SkillsSection = () => {
  const skillsSection = useRef<HTMLDivElement>(null);
  useIntersectionObserver(skillsSection, fadeInObserver);

  const items =
    data.skills.map((s) => {
      return {
        title: s.title,
        content: (
          <div className='flex flex-wrap bg-white'>
            {s.items.map((e, i) => (
              <SkillItem key={`${i}-${s.title}`} skillTitle={e.title} skillLevel={e.level as any} />
            ))}
          </div>
        ),
      } as AccordionItem;
    }) || [];

  return (
    <div ref={skillsSection} data-origin='bottom' className='pb-12 opacity-0'>
      <h1 className='r-text-xl font-semibold pb-6'>{data.skillsHeading}</h1>
      <p className='r-text-m pb-12'>{data.skillsIntroduction}</p>
      <div className='pb-6'>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default SkillsSection;
