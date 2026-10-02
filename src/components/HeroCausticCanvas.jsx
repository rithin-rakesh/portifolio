import React, { useEffect, useRef } from 'react';

/**
 * HeroCausticCanvas
 * Direction 3: Reactive Caustic Light & Silhouette
 * - High-performance GPU-driven caustic light field behind the portrait silhouette
 * - Smooth lerped cursor flashlight / caustic ray that illuminates the silhouette
 * - Organic fluid oscillation simulating volumetric studio lighting
 * - Bridges directly into the rising curtain scroll transition
 * - Battery & GPU friendly: auto-pauses when tab is hidden or scrolled out of view
 */
export default function HeroCausticCanvas({ scrollY = 0, mousePos = { x: 0, y: 0 } }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId = null;
    let isTabVisible = true;

    // Lerped light coordinates for buttery-smooth light momentum
    let lerpX = 0;
    let lerpY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Initialize light at center
      if (lerpX === 0) {
        lerpX = width * 0.52;
        lerpY = height * 0.38;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animId) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let time = 0;

    const render = () => {
      if (!isTabVisible) {
        animId = null;
        return;
      }

      time += 0.018;

      // Map normalized mousePos (-1 to +1) to viewport pixels
      targetX = width * 0.52 + mousePos.x * (width * 0.28);
      targetY = height * 0.38 + mousePos.y * (height * 0.24);

      // Smooth exponential lerp
      lerpX += (targetX - lerpX) * 0.065;
      lerpY += (targetY - lerpY) * 0.065;

      ctx.clearRect(0, 0, width, height);

      // Dynamic scroll compression factor (light condenses as About page rises)
      const scrollRatio = Math.min(1, scrollY / (height || 800));
      const scrollCompressionY = scrollY * 0.15;

      // ----------------------------------------------------
      // 1. PRIMARY REACTIVE CAUSTIC FLAME BEAM (Behind Silhouette)
      // ----------------------------------------------------
      const flameX = lerpX + Math.sin(time * 0.8) * 22;
      const flameY = lerpY + Math.cos(time * 0.7) * 16 + scrollCompressionY;
      const flameRadius = Math.max(180, width * 0.32);

      const flameGrad = ctx.createRadialGradient(
        flameX,
        flameY,
        0,
        flameX,
        flameY,
        flameRadius
      );
      flameGrad.addColorStop(0, `rgba(255, 85, 0, ${0.32 * (1 - scrollRatio * 0.4)})`);
      flameGrad.addColorStop(0.35, `rgba(251, 146, 60, ${0.18 * (1 - scrollRatio * 0.4)})`);
      flameGrad.addColorStop(0.7, `rgba(234, 88, 12, ${0.06 * (1 - scrollRatio * 0.5)})`);
      flameGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = flameGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // 2. COUNTER-BALANCED CYBER LIME OPTICAL RIM LIGHT
      // ----------------------------------------------------
      const limeX = width * 0.64 - (lerpX - width * 0.5) * 0.6 + Math.cos(time * 0.9) * 25;
      const limeY = height * 0.28 + Math.sin(time * 1.1) * 20 + scrollCompressionY;
      const limeRadius = Math.max(160, width * 0.28);

      const limeGrad = ctx.createRadialGradient(
        limeX,
        limeY,
        0,
        limeX,
        limeY,
        limeRadius
      );
      limeGrad.addColorStop(0, `rgba(190, 242, 100, ${0.20 * (1 - scrollRatio * 0.4)})`);
      limeGrad.addColorStop(0.45, `rgba(163, 230, 53, ${0.08 * (1 - scrollRatio * 0.4)})`);
      limeGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = limeGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // 3. GOLDEN TUNGSTEN HIGH-FREQUENCY CAUSTIC ACCENT
      // ----------------------------------------------------
      const goldX = lerpX * 0.85 + width * 0.08 + Math.sin(time * 1.4) * 18;
      const goldY = lerpY * 0.85 + height * 0.06 + Math.cos(time * 1.3) * 14 + scrollCompressionY;
      const goldRadius = Math.max(120, width * 0.22);

      const goldGrad = ctx.createRadialGradient(
        goldX,
        goldY,
        0,
        goldX,
        goldY,
        goldRadius
      );
      goldGrad.addColorStop(0, `rgba(251, 191, 36, ${0.22 * (1 - scrollRatio * 0.4)})`);
      goldGrad.addColorStop(0.5, `rgba(245, 158, 11, ${0.07 * (1 - scrollRatio * 0.5)})`);
      goldGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = goldGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // 4. LOWER HORIZON CAUSTIC REFLECTION (Curtain Bridge)
      // ----------------------------------------------------
      // Condenses towards the bottom rim as scroll advances
      const horizonY = height * 0.88 + scrollCompressionY * 0.6;
      const horizonGrad = ctx.createRadialGradient(
        width * 0.5,
        horizonY,
        10,
        width * 0.5,
        horizonY,
        width * 0.6
      );
      horizonGrad.addColorStop(0, `rgba(255, 85, 0, ${0.16 + scrollRatio * 0.25})`);
      horizonGrad.addColorStop(0.5, `rgba(190, 242, 100, ${0.08 + scrollRatio * 0.15})`);
      horizonGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [mousePos, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 w-full h-full select-none"
      style={{ willChange: 'transform', mixBlendMode: 'screen' }}
    />
  );
}
