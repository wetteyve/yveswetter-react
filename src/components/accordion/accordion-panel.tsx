import { KeyboardEvent } from 'react';
import { TbMinus, TbPlus } from 'react-icons/tb';

import { KEYS } from '../../utils/keys.utils';
import AnimateHeight from './animate-height';

type AccordionItemProps = {
  index: number;
  title: string;
  open: boolean;
  content: React.ReactNode;
  onItemSelected: (index: number) => void;
};

export const AccordionPanel = (props: AccordionItemProps) => {
  const handleClick = () => {
    props.onItemSelected(props.index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === KEYS.ENTER || e.key === KEYS.SPACEBAR) {
      props.onItemSelected(props.index);
    }
  };

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`flex cursor-pointer items-center justify-between outline-none transition-all duration-300 hover:bg-primary-light ${
          props.open ? 'py-8' : 'py-6'
        }`}
      >
        <h3 className='r-text-m block overflow-hidden text-ellipsis whitespace-nowrap'>{props.title}</h3>
        {props.open ? <TbMinus size={24} /> : <TbPlus size={24} />}
      </div>
      <AnimateHeight open={props.open} contentClassName=''>
        {props.content}
      </AnimateHeight>
    </>
  );
};
