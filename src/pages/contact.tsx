import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import ContactForm from '../components/contact/contact-form';

const ContactContainer = () => {
  const title = 'Contact - Yves Wetter';
  const description = 'Get in contact with Yves Wetter.';
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
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
