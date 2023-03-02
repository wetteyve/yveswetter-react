import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { data } from '../../content/projects-data';
import ProjectItem from './project-item';

const ProjectsContainer = () => {
  const title = 'Projects | Yves Wetter';
  const description = 'Projects developed by Yves Wetter.';
  const [showModal, setShowModal] = useState<boolean>(false);

  const hideModal = () => {
    setShowModal(false);
  };
  const renderModal = () => {
    setShowModal(true);
  };

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
      <div>
        {data.projects.map((p, i) => (
          <ProjectItem project={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
