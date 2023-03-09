import ContactSection from '@/components/home/contact-section';
import ProjectsSection from '@/components/home/projects-section';
import SkillsSection from '@/components/home/skills/skills-section';
import WelcomeSection from '@/components/home/welcome-section';
import ScrollBar from '@/components/scrollbar/scrollbar';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import fingers from '../assets/fingers.png';

const HomeContainer = () => {
  const title = 'Home | Yves Wetter';
  const description = 'Portfolio website of Swiss based fullstack web developer Yves Wetter.';
  const keywords =
    'yves, wetter, yveswetter, web, fullstack, software, development, engineer, website, webseite, nextjs, react, frontend, backend, devops, portfolio, projects, contact, message, mail, schweiz, switzerland, ch';
  const [location, setLocation] = useState<string>();
  const [bodyHeight, setBodyHeight] = useState<number>();
  const [resizeScrollbarObserver, setResizeScrollbarObserver] = useState<ResizeObserver>();
  const [fadeInObserver, setFadeInObserver] = useState<IntersectionObserver>();
  const [dots, setDots] = useState<number[]>([0, 100]);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const fingersRef = useRef<HTMLImageElement>(null);

  //client sided elements setup
  useEffect(() => {
    window.scrollTo({ behavior: 'auto', top: 0 });
    setLocation(window.location.href);
    setResizeScrollbarObserver(
      new ResizeObserver((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          const bodyRect = entry.target.getBoundingClientRect();
          setBodyHeight(bodyRect.height);
        }
      })
    );
    setFadeInObserver(
      new IntersectionObserver(
        (entries) => {
          entries
            .filter((e) => e.isIntersecting)
            .forEach((entry, index) => {
              if (!(entry.target instanceof HTMLElement) && !(entry.target instanceof SVGElement)) return;

              const origin = entry.target.getAttribute('data-origin') || 'left';
              if (!entry.target.style.animationDelay) entry.target.style.animationDelay = `${800 * index}ms`;
              switch (origin) {
                case 'left':
                  entry.target.classList.add('fadeInFromLeft');
                  break;
                case 'right':
                  entry.target.classList.add('fadeInFromRight');
                  break;
                case 'top':
                  entry.target.classList.add('fadeInFromTop');
                  break;
                case 'bottom':
                  entry.target.classList.add('fadeInFromBottom');
                  break;
                default:
                  entry.target.classList.add('fadeInFromLeft');
                  break;
              }
              fadeInObserver?.unobserve(entry.target);
            });
        },
        {
          threshold: 0.3,
        }
      )
    );
  }, []);

  const calcOffsetPercentage = (fullHeight: number, element: HTMLElement) => {
    return (100 / fullHeight) * (element.offsetTop + element.offsetHeight / 2);
  };

  //setup resize observer
  useEffect(() => {
    resizeScrollbarObserver?.observe(document.body);
  }, [resizeScrollbarObserver]);

  //setup intersection observer
  useEffect(() => {
    if (skillsRef && projectsRef && contactRef && fingersRef) {
      fadeInObserver?.observe(skillsRef.current as Element);
      fadeInObserver?.observe(projectsRef.current as Element);
      fadeInObserver?.observe(contactRef.current as Element);
      fadeInObserver?.observe(fingersRef.current as Element);
    }
  }, [fadeInObserver]);

  //calc scrollbar dots on height change
  useEffect(() => {
    if (bodyHeight) {
      const dotsY: number[] = [];
      document.querySelectorAll('#scrollbar-dot').forEach((e) => {
        dotsY.push(calcOffsetPercentage(bodyHeight, e as HTMLElement));
      });
      setDots([0, ...dotsY, 100]);
    }
  }, [bodyHeight]);

  return (
    <div className='z-10'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta content={title} property='og:title' />
        {location && <meta content={location} property='og:url' />}
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Head>
      <section>{fadeInObserver && <WelcomeSection fadeInObserver={fadeInObserver} />}</section>
      <section id='scrollbar-dot' data-origin='bottom' ref={skillsRef} className='opacity-0'>
        <SkillsSection />
      </section>
      <section id='scrollbar-dot' data-origin='bottom' ref={projectsRef} className='opacity-0'>
        <ProjectsSection />
      </section>
      <section id='scrollbar-dot' data-origin='bottom' ref={contactRef} className='opacity-0'>
        <ContactSection />
      </section>
      <section>
        <Image className='mx-auto opacity-0' src={fingers} alt='thumbs-up' data-origin='bottom' ref={fingersRef} />
      </section>
      {bodyHeight && (
        <section>
          <ScrollBar dots={dots} height={bodyHeight} />
        </section>
      )}
    </div>
  );
};

export default HomeContainer;
