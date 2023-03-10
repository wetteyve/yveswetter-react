import React, { useEffect, useRef } from 'react';
import { TbX } from 'react-icons/tb';

type ModalProps = {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
};

const Modal = ({ handleClose, show, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className={`${showHideClassName} fadeInFromRight`} id='main-frame'>
      <div className='flex justify-center'>
        <section ref={modalRef} className='modal-main rounded-lg container h-[calc(100vh-120px)] p-5 pb-0' data-origin='right'>
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
