import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import data from '../content/impressum-data.json';

const ImpressumContainer = () => {
  const impressumRef = useRef<HTMLDivElement>(null);

  const title = 'Impressum | Yves Wetter';
  const description = 'Impressum yveswetter.ch';
  const keywords =
    'yves, wetter, yveswetter, web, fullstack, software, development, engineer, website, webseite, nextjs, react, frontend, backend, devops, portfolio, projects, contact, message, mail, schweiz, switzerland, ch';
  const [location, setLocation] = useState<string>();

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta content={title} property='og:title' />
        {location && <meta content={location} property='og:url' />}
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Head>
      <div ref={impressumRef} className='fadeInFromBottom'>
        <h1 className='r-text-xl font-semibold pb-6'>{data.title}</h1>
        <div className='grid grid-cols-2'>
          <span>{'Name'}</span>
          <span>{data.fullName}</span>
          <span>{'Country'}</span>
          <span>{data.country}</span>
          <span>{'Email'}</span>
          <span>{data.email}</span>
          <span>{`Copyright © ${new Date().getFullYear()} by Yves Wetter`}</span>
          <span>{data.disclaimer}</span>
        </div>
      </div>
    </div>
  );
};

export default ImpressumContainer;
