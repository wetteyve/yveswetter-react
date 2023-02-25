import React from "react";
import { Helmet } from "react-helmet";

const ContactContainer = () => {
  const title = "Contact - Yves Wetter";
  const description = "Get in contact with Yves Wetter.";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="MakeThings, Makerspace, Kurs, Maschine, Arbeitsplatz, Freiraum, Space, Eventlocation"
        />
        <meta content={title} property="og:title" />
        <meta content={window.location.href} property="og:url" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
      </Helmet>
      ContactContainer
    </div>
  );
};

export default ContactContainer;
