import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * Minimal, low-latency pointer dot with smooth hover reactions.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('[role="button"]') ||
        target.closest('[data-hoverable="true"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isVisible]);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`hidden md:block pointer-events-none fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-[#ff5500] shadow-[0_0_14px_#ff5500] transition-opacity duration-200 z-[9999] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovered
          ? 'scale-175 bg-white shadow-[0_0_18px_#ff5500] ring-2 ring-[#ff5500]/50'
          : 'scale-100'
      }`}
      style={{ willChange: 'transform' }}
    />
  );
}
