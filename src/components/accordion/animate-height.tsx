import { useCallback, useEffect, useRef, useState } from 'react';

type AnimateHeightProps = {
  children?: React.ReactNode;
  open: boolean;
  contentClassName?: string;
};

const AnimateHeight = (props: AnimateHeightProps) => {
  const ref = useRef<HTMLDivElement>();
  const [height, setHeight] = useState<number>(0);

  const handleHeight = useCallback(() => {
    if (props.open) setHeight(ref.current?.clientHeight || 0);
    else setHeight(0);
  }, [props.open]);

  useEffect(() => {
    window.addEventListener('resize', handleHeight);

    return () => {
      window.removeEventListener('resize', handleHeight);
    };
  }, [handleHeight]);

  useEffect(() => {
    handleHeight();
  }, [props.open, handleHeight]);

  return (
    <div
      className='overflow-hidden transition-all duration-75'
      style={{
        height: height,
      }}
    >
      <div ref={ref as any} className={props.contentClassName}>
        {props.children}
      </div>
    </div>
  );
};

export default AnimateHeight;
