import { useRef } from 'react';
import { Helmet } from 'react-helmet';

import data from '../../content/impressum-data.json';
import { fadeInObserver, useIntersectionObserver } from '../../utils/intersection-observer';

const ImpressumContainer = () => {
  const impressumRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(impressumRef, fadeInObserver);

  const title = 'Impressum | Yves Wetter';
  const description = 'Impressum yveswetter.ch';

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content='MakeThings, Makerspace, Kurs, Maschine, Arbeitsplatz, Freiraum, Space, Eventlocation' />
        <meta content={title} property='og:title' />
        <meta content={window.location.href} property='og:url' />
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Helmet>
      <div ref={impressumRef} data-origin='bottom' className='opacity-0'>
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
