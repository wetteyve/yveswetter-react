import React from 'react';
import { Helmet } from 'react-helmet';

import ContactForm from './contact-form';

const ContactContainer = () => {
  const title = 'Contact - Yves Wetter';
  const description = 'Get in contact with Yves Wetter.';
  const keywords =
    'yves, wetter, yveswetter, web, fullstack, software, development, engineer, website, webseite, nextjs, react, frontend, backend, devops, portfolio, projects, contact, message, mail, schweiz, switzerland, ch';

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta content={title} property='og:title' />
        <meta content={window.location.href} property='og:url' />
        <meta content={description} property='og:description' />
        <meta content='website' property='og:type' />
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
