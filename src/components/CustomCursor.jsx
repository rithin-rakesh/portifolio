import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = -100;
    let mouseY = -100;
    let lastMouseX = -100;
    let lastMouseY = -100;

    // Grains Array
    const grains = [];
    const maxGrains = 90;

    // Color Palette: Warm amber, golden tungsten, soft cyan
    const colors = [
      'rgba(255, 95, 20, ',
      'rgba(245, 158, 11, ',
      'rgba(255, 125, 40, ',
      'rgba(6, 182, 212, ',
      'rgba(255, 210, 120, '
    ];

    // Background ambient floating grains (only in background layer)
    const ambientGrains = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.3 + 0.08,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const createGrain = (x, y, speed) => {
      const count = Math.min(3, Math.max(1, Math.floor(speed * 0.3)));
      for (let i = 0; i < count; i++) {
        if (grains.length >= maxGrains) grains.shift();
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 1.5 + 0.3;
        grains.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 0.25,
          size: Math.random() * 2.0 + 0.8,
          alpha: 0.9,
          decay: Math.random() * 0.025 + 0.018,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Check if mouse is currently inside a box/card/element
      const isInsideBox = e.target && e.target.closest && e.target.closest(
        '.rounded-3xl, .rounded-2xl, .rounded-xl, .glass-panel, [data-card="true"], img, button, a, [role="dialog"], input'
      );

      // Only generate interactive grains when moving in the portfolio background!
      if (!isInsideBox && lastMouseX !== -100) {
        createGrain(mouseX, mouseY, speed);
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;

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
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animId = null;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update ambient floating background grains
      for (let i = 0; i < ambientGrains.length; i++) {
        const ag = ambientGrains[i];
        ag.x += ag.vx;
        ag.y += ag.vy;

        if (ag.x < 0) ag.x = width;
        if (ag.x > width) ag.x = 0;
        if (ag.y < 0) ag.y = height;
        if (ag.y > height) ag.y = 0;

        ctx.fillStyle = `${ag.color}${ag.alpha})`;
        ctx.beginPath();
        ctx.arc(ag.x, ag.y, ag.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render & update interactive mouse trailing grains (strictly background)
      for (let i = grains.length - 1; i >= 0; i--) {
        const g = grains[i];
        g.x += g.vx;
        g.y += g.vy;
        g.alpha -= g.decay;

        if (g.alpha <= 0) {
          grains.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${g.color}${g.alpha})`;
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Background Interactive Grain Particle Canvas: z-0 (Strictly behind cards, hero, and project boxes) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 w-full h-full"
      />

      {/* Interactive Core Pointer Dot: z-[9999] */}
      <div
        ref={dotRef}
        className={`hidden md:block pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2.5 h-2.5 rounded-full bg-[#ff5500] shadow-[0_0_12px_#ff5500] transition-transform duration-75 pointer-events-none z-[9999] ${
          isHovered ? 'scale-150 bg-white shadow-[0_0_16px_#ff5500]' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
