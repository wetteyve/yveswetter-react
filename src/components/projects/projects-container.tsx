import React from "react";
import { Helmet } from "react-helmet";

const ProjectsContainer = () => {
  const title = "Porjects | Yves Wetter";
  const description = "Projects developed by Yves Wetter.";

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
      ProjectsContainer
    </div>
  );
};

export default ProjectsContainer;
