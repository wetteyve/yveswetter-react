import React, { useRef, useState } from 'react';

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
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleItemSelected = (index: number) => {
    props.onItemClick?.(index);
    setSelectedItem((currentIndex) => (currentIndex === index ? undefined : index));
  };

  const scrollIntoScreen = (panelIndex: number) => {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = accordionRef?.current?.getBoundingClientRect();
    const targetY = (elemRect?.top || 0) - bodyRect.top - 200 + panelIndex * 75;
    window.scroll(0, targetY);
  };

  return (
    <div ref={accordionRef}>
      {props.items.map((i, index) => {
        return (
          <div className='border-b border-gray-500' key={i.title} onClick={() => scrollIntoScreen(index)}>
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
    </div>
  );
};
