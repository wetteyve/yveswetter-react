import { useRef } from 'react';
import { Helmet } from 'react-helmet';

import fingers from '../../assets/fingers.png';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';
import ScrollBar from '../scrollbar/scrollbar';
import SkillsSection from './skills/skills-section';
import WelcomeSection from './welcome-section';

const HomeContainer = () => {
  const welcomeRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const fingersRef = useRef<HTMLImageElement>(null);
  useIntersectionObserver(fingersRef, fadeInObserver);
  const test = [0, 60, 80, 100];

  const title = 'Home | Yves Wetter';
  const description = 'Portfolio for web-projects by Yves Wetter. Here you find some information about the most recent projects.';

  return (
    <div className='z-10'>
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
      <section>
        <img ref={fingersRef} data-origin='bottom' className='mx-auto opacity-0' src={fingers} alt='thumbs-up' />
      </section>
      <ScrollBar dots={test} />
    </div>
  );
};

export default HomeContainer;
