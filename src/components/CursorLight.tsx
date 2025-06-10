'use client'
import { useEffect, useRef } from 'react';

const CursorLight = () => {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const handleMouseMove = (e:any) => {
        if (lightRef.current) {
          lightRef.current.style.transform = `translate(${e.clientX - 240}px, ${e.clientY - 240}px)`; // 30rem = 480px / 2
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={lightRef}
      className="hidden md:block pointer-events-none fixed top-0 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-green-300 via-blue-500 to-purple-500 opacity-10 blur-3xl z-0"
    ></div>
  );
};

export default CursorLight;
