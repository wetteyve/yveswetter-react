import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import fingers from '../../assets/fingers.png';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';
import ScrollBar from '../scrollbar/scrollbar';
import ContactSection from './contact-section';
import ProjectsSection from './projects-section';
import SkillsSection from './skills/skills-section';
import WelcomeSection from './welcome-section';

const HomeContainer = () => {
  const welcomeRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const fingersRef = useRef<HTMLImageElement>(null);
  useIntersectionObserver(fingersRef, fadeInObserver);

  const [bodyHeight, setBodyHeight] = useState<number>();
  const resizeScrollbarObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      const bodyRect = entry.target.getBoundingClientRect();
      setBodyHeight(bodyRect.height);
    }
  });
  resizeScrollbarObserver.observe(document.body);

  const calcOffsetPercentage = (fullHeight: number, element: HTMLElement) => {
    return (100 / fullHeight) * (element.offsetTop + element.offsetHeight / 2);
  };
  const [dots, setDots] = useState<number[]>([0, 100]);
  useEffect(() => {
    if (bodyHeight && skillsRef.current && projectsRef.current && contactRef.current) {
      setDots([
        0,
        calcOffsetPercentage(bodyHeight, skillsRef.current),
        calcOffsetPercentage(bodyHeight, projectsRef.current),
        calcOffsetPercentage(bodyHeight, contactRef.current),
        100,
      ]);
    }
  }, [bodyHeight]);

  const title = 'Home | Yves Wetter';
  const description = 'Portfolio for web-projects by Yves Wetter. Here you find some information about the most recent projects.';

  return (
    <div className='z-10 bg-transparent'>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content='MakeThings, Makerspace, Kurs, Maschine, Arbeitsplatz, Freiraum, Space, Eventlocation' />
        <meta content={title} property='og:title' />
        <meta content={window.location.href} property='og:url' />
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Helmet>
      <section ref={welcomeRef}>
        <WelcomeSection />
      </section>
      <section ref={skillsRef}>
        <SkillsSection />
      </section>
      <section ref={projectsRef}>
        <ProjectsSection />
      </section>
      <section ref={contactRef}>
        <ContactSection />
      </section>
      <section className='scrollbar-dot'>
        <img ref={fingersRef} data-origin='bottom' className='mx-auto opacity-0' src={fingers} alt='thumbs-up' />
      </section>
      {bodyHeight && <ScrollBar dots={dots} height={bodyHeight} />}
    </div>
  );
};

export default HomeContainer;
