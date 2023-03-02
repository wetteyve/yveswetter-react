import { useRef, useState } from 'react';

import Modal from '../modal/modal';

interface IProject {
  title: string;
  description: string;
  shortDescription: string;
  devTeamSize: number;
  thumbnails: string[];
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
        className='bg-[#000000cc] text-white mb-6 w-full rounded-lg p-5 text-center cursor-pointer transition-all ease-in duration-150 md:hover:scale-[1.01]'
        onClick={renderModal}
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

      <Modal show={showModal} handleClose={hideModal}>
        <div className='relative h-full'>
          <div className='max-h-full overflow-auto scrollable'>
            <div className='h-[1500px]'>
              <h1 className='r-text-xl font-semibold pb-6'>{project.title}</h1>
              <p className='r-text-m pb-6'>{project.description}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectItem;
