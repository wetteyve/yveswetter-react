import Modal from '../modal/modal';
import { IProject } from './project-item';

type ProjectItemModalProps = {
  project: IProject;
  showModal: boolean;
  hideModal: () => void;
};

const ProjectItemModal = ({ project, showModal, hideModal }: ProjectItemModalProps) => {
  return (
    <Modal show={showModal} handleClose={hideModal}>
      <div className='relative h-full'>
        <div className='max-h-full overflow-auto scrollable'>
          <div className='flex flex-col items-start'>
            <div className='w-full flex justify-center'>
              <h1 className='r-text-xl font-semibold pb-6'>{project.title}</h1>
            </div>
            <div className='w-full aspect-video flex justify-center pb-6'>{project.heading}</div>
            <div className='flex md:flex-row flex-col md:justify-between w-full'>
              {project.technologies.map((g, i) => (
                <div key={i}>
                  <p className='r-text-m'>{g.groupTitle}</p>
                  <div className='flex flex-wrap'>
                    {g.logos.map((t, ii) => (
                      <div key={ii} className='w-16 overflow-hidden mr-[18px]'>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <p className='r-text-m'>{'Devteam Size'}</p>
                <div className='flex items-center md:h-[calc(100%-32px)] h-14'>
                  <span className='self-center r-text-l font-semibold mr-3'>{project.devTeamSize}</span>
                </div>
              </div>
            </div>
            <div>
              <p className='r-text-m mb-2'>{'About the Project'}</p>
              <div className='flex items-center md:h-[calc(100%-32px)] h-14'>
                <span className='r-text-s'>{project.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectItemModal;
