import { useRef, useState } from 'react';

import ProjectItemModal from './project-item-modal';

export interface IProject {
  title: string;
  description: string;
  shortDescription: string;
  devTeamSize: number;
  thumbnails: string[];
  heading: React.ReactNode;
  technologies: { groupTitle: string; logos: React.ReactNode[] }[];
}

type ProjectItemProps = {
  project: IProject;
};
const ProjectItem = ({ project }: ProjectItemProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const hideModal = () => {
    document.getElementById('app')?.classList.remove('bg-[#00000066]');
    setShowModal(false);
  };
  const renderModal = () => {
    setShowModal(true);
    document.getElementById('app')?.classList.add('bg-[#00000066]');
  };
  return (
    <div>
      <div
        onClick={renderModal}
        className='bg-[#000000cc] text-white mb-6 w-full rounded-lg p-5 text-center cursor-pointer transition-all ease-in duration-150 md:hover:scale-[1.01]'
      >
        <div className='flex flex-col items-center'>
          {project.thumbnails.map((t, i) => (
            <div key={i} className='max-w-[600px]'>
              <img src={t} alt={`logo_${project.title}`} className='rounded pb-4' key={i} />
            </div>
          ))}
        </div>
        <p className='r-text-m pb-3'>{project.shortDescription}</p>
        <h1 className='r-text-xl font-semibold'>{project.title}</h1>
      </div>
      <ProjectItemModal project={project} showModal={showModal} hideModal={hideModal} />
    </div>
  );
};

export default ProjectItem;
