import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with true mouse pointer
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId = null;

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
        target.closest('[data-card="true"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp loop for the outer follower ring
    const render = () => {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Outer Precision Follower Ring */}
      <div
        ref={ringRef}
        className={`hidden md:block pointer-events-none fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border transition-[border-color,background-color,transform] duration-200 pointer-events-none z-[9998] ${
          !isVisible ? 'opacity-0' : isHovered ? 'scale-150 border-[#bef264]/60 bg-[#bef264]/5 shadow-[0_0_15px_rgba(190,242,100,0.2)]' : 'scale-100 border-[#ff5500]/40 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Core Precision Focal Dot */}
      <div
        ref={dotRef}
        className={`hidden md:block pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full transition-[background-color,transform] duration-150 pointer-events-none z-[9999] ${
          !isVisible ? 'opacity-0' : isHovered ? 'bg-[#bef264] scale-90 shadow-[0_0_8px_#bef264]' : 'bg-[#ff5500] scale-100 shadow-[0_0_8px_#ff5500]'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
