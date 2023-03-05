import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import ProjectItem from '../components/projects/project-item';
import { data } from '../content/projects-data';

const ProjectsContainer = () => {
  const title = 'Projects | Yves Wetter';
  const description = 'Projects developed by Yves Wetter.';
  const keywords =
    'yves, wetter, yveswetter, web, fullstack, software, development, engineer, website, webseite, nextjs, react, frontend, backend, devops, portfolio, projects, contact, message, mail, schweiz, switzerland, ch';
  const [location, setLocation] = useState<string>();

  useEffect(() => {
    window.scrollTo({ behavior: 'auto', top: 0 });
    setLocation(window.location.href);
    document.getElementById('projects-container')?.classList.add('fadeInFromBottom');

    return () => {
      document.getElementById('app')?.classList.remove('bg-[#00000066]');
    };
  }, []);

  return (
    <div className='opacity-0' id='projects-container'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta content={title} property='og:title' /> {location && <meta content={location} property='og:url' />}
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
        {data.projects.map((p, i) => (
          <ProjectItem project={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
