import React, { useEffect, useRef, useState } from 'react';

const ScrollBar = (props: { dots?: number[]; height: number }) => {
  const sliderRef = useRef<HTMLSpanElement>(null);
  const trackMouse = (event: MouseEvent) => {
    event.preventDefault();
    const scrollbarbox = document.getElementById('scroll-bar')?.getBoundingClientRect();
    if (!scrollbarbox) return;
    handleScroll((event.clientY - scrollbarbox.top) / scrollbarbox.height);
  };

  const handleScroll = (percentage: number, smooth?: boolean) => {
    window.scrollTo({
      top: (document.body.offsetHeight - window.innerHeight) * percentage,
      behavior: (smooth && 'smooth') || 'auto',
    });
  };

  useEffect(() => {
    const docHeight = document.body.offsetHeight;
    let scrollBefore = 0;
    let directionBefore = false;

    const scrollHandler = () => {
      const sliderPos = (100 * window.scrollY) / (docHeight - window.innerHeight);
      const direction = sliderPos > scrollBefore;
      const el = document.getElementById('scroll-dot');
      const elInner = document.getElementById('scroll-inner-dot');
      const borderRadius = (1 - (-(Math.pow(sliderPos, 2) / 2500) + sliderPos / 25)) * 50;

      if (elInner && el && props.dots) {
        const nearestDot = Math.min(...props.dots.map((el) => Math.abs(el - sliderPos)));
        if (nearestDot < 10) {
          el.style.width = `${(20 - nearestDot) * 1.5}px`;
          el.style.height = `${(20 - nearestDot) * 1.5}px`;
          elInner.style.width = `${(10 - nearestDot) * 9}%`;
          elInner.style.height = `${(10 - nearestDot) * 9}%`;
        }
      }
      if (el) {
        el.style.top = `${sliderPos}%`;
        el.style.transitionProperty = (direction === directionBefore && 'border-radius') || '';
        el.style.borderTopLeftRadius = `${sliderPos > scrollBefore ? borderRadius : 50}%`;
        el.style.borderBottomRightRadius = `${sliderPos < scrollBefore ? borderRadius : 50}%`;
      }
      scrollBefore = sliderPos;
      directionBefore = direction;
    };

    setTimeout(() => {
      scrollHandler();
    }, 100);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      document;
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [props.dots, sliderRef]);

  return (
    <div className='relative hidden md:block'>
      <span className='fixed top-[10vh] 2xl:right-4 right-0 w-12 h-[75vh] bg-transparent'>
        <span id='scroll-bar' className='relative h-full w-1 block bg-gradient-to-b opacity-60 from-stone-300 to-black mx-auto'></span>
        <span
          id='scroll-dot'
          onDrag={(evt) => evt.preventDefault()}
          onMouseDown={() => {
            window.addEventListener('mousemove', trackMouse);
            window.addEventListener('mouseup', () => {
              window.removeEventListener('mousemove', trackMouse);
            });
          }}
          className='!bg-black absolute cursor-grab mx-auto rotate-45 flex justify-center items-center w-4 p-1 h-4 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-[50%]'
        >
          <span
            ref={sliderRef}
            id='scroll-inner-dot'
            onDrag={(evt) => evt.preventDefault()}
            className='relative m-auto block w-[90%]  h-[90%] rounded-full bg-white'
          ></span>
        </span>
        {props.dots &&
          props.dots.map((el, idx) => (
            <span
              onClick={() => handleScroll(el / 100, true)}
              key={`dot-${idx}`}
              style={{
                top: `${el}%`,
              }}
              className={`absolute cursor-pointer w-4 h-4 bg-[#000000] rounded-full  left-1/2 -translate-x-1/2 -translate-y-1/2`}
            ></span>
          ))}
      </span>
    </div>
  );
};

export default ScrollBar;
