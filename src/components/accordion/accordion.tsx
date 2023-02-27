import React, { useState } from 'react';

import { AccordionPanel } from './accordion-panel';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  onItemClick?: (index: number) => void;
};

export const Accordion = (props: AccordionProps) => {
  const [selectedItem, setSelectedItem] = useState<number>();

  const handleItemSelected = (index: number) => {
    props.onItemClick?.(index);
    setSelectedItem((currentIndex) => (currentIndex === index ? undefined : index));
  };

  return (
    <>
      {props.items.map((i, index) => {
        return (
          <div className='border-b border-gray-500' key={i.title}>
            <AccordionPanel
              title={i.title}
              index={index}
              open={index === selectedItem}
              content={i.content}
              onItemSelected={handleItemSelected}
            />
          </div>
        );
      })}
    </>
  );
};
