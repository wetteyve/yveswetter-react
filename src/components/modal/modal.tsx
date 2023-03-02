import './modal.css';

import React, { useRef } from 'react';
import { TbX } from 'react-icons/tb';

import { modalObserver, useIntersectionObserver } from '../../utils/intersection-observer';

type ModalProps = {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
};

const Modal = ({ handleClose, show, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(modalRef, modalObserver);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={`${showHideClassName}`}>
      <div className='flex justify-center'>
        <section
          ref={modalRef}
          className='modal-main opacity-0 rounded-lg shadow-xl container h-[calc(100vh-249px)] w-[calc(100%-40px)] m-5 p-5'
          data-origin='right'
        >
          {children}
          <button className={`fixed top-3 right-3 rounded-full p-1 text-white bg-black`} onClick={handleClose}>
            <TbX size={16} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
