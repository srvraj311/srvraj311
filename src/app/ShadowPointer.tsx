import React, { useRef, useEffect } from 'react';

interface ShadowProps {}

const ShadowPointer: React.FC<ShadowProps> = () => {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      shadowRef.current!.style.transform = `translate(${pageX}px, ${pageY}px)`;
      shadowRef.current!.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      shadowRef.current!.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={shadowRef} className="shadow"></div>;
};

export default ShadowPointer;
