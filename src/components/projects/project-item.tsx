import { useState } from 'react';

import Modal from '../modal/modal';

interface IProject {
  title: string;
  description: string;
  devTeamSize: number;
}

type ProjectItemProps = {
  project: IProject;
};
const ProjectItem = ({ project }: ProjectItemProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const hideModal = () => {
    setShowModal(false);
  };
  const renderModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <button className='bg-black text-white mb-6' type='button' onClick={renderModal}>
        {`About ${project.title}`}
      </button>

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
