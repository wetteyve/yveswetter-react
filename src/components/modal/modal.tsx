import './modal.css';

import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (show) {
      document.body.classList.add('disable-scroll');
    }
    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [show]);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={`${showHideClassName}`} id='main-frame'>
      <div className='flex justify-center'>
        <section
          ref={modalRef}
          className='modal-main opacity-0 rounded-lg shadow-xl container h-[calc(100vh-100px)] p-5'
          data-origin='right'
        >
          {children}
          <button className={`fixed top-5 right-5 rounded-full p-1 text-white bg-black`} onClick={handleClose}>
            <TbX size={16} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
