import React, { useEffect, useRef } from 'react';

/**
 * InteractiveGrainBackground
 * High-performance, physics-driven interactive grain and particle canvas.
 * - Dynamically moves with respect to cursor position (global field parallax + local repulsion & swirl)
 * - Excludes the Hero section: strictly clips to the curtain below the Hero section
 * - Inertial velocity sparks and luminous cursor aura
 * - Zero CPU waste: auto-pauses when tab is hidden or when scrolled above curtain
 */
export default function InteractiveGrainBackground({ curtainRef }) {
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

    // Pointer state
    let mouseX = -1000;
    let mouseY = -1000;
    let lastMouseX = -1000;
    let lastMouseY = -1000;
    let mouseSpeed = 0;
    let lerpMouseX = -1000;
    let lerpMouseY = -1000;
    let isPointerActive = false;

    // Field Parallax (Grains moving across canvas with respect to cursor)
    let fieldParallaxX = 0;
    let fieldParallaxY = 0;
    let targetParallaxX = 0;
    let targetParallaxY = 0;

    // Curtain scroll bounds for excluding Hero section
    let curtainTop = window.innerHeight;

    // Color palette: crisp starlight, soft lunar white, signature flame (#ff5500), golden tungsten (#fbbf24), cyber lime (#bef264), electric cyan (#38bdf8)
    const colorPalette = [
      'rgba(240, 240, 250, ',  // Crisp silver starlight (60%)
      'rgba(220, 225, 240, ',  // Soft lunar white
      'rgba(255, 85, 0, ',     // Signature flame orange
      'rgba(251, 191, 36, ',   // Golden tungsten
      'rgba(190, 242, 100, ',  // Cyber lime
      'rgba(56, 189, 248, '    // Atmospheric cyan
    ];

    let grains = [];
    const sparks = [];
    const maxSparks = 50;

    // Initialize grain grid
    const initGrains = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Density: ~1 grain per 1,500 sq px for crisp, clean, non-slop texture
      const area = width * height;
      const grainCount = Math.min(1200, Math.max(300, Math.floor(area / 1500)));

      grains = [];
      const cols = Math.ceil(Math.sqrt((grainCount * width) / height));
      const rows = Math.ceil(grainCount / cols);
      const cellW = width / cols;
      const cellH = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grains.length >= grainCount) break;
          const baseX = c * cellW + Math.random() * cellW;
          const baseY = r * cellH + Math.random() * cellH;

          const rand = Math.random();
          let color = colorPalette[0];
          if (rand > 0.88) color = colorPalette[2]; // Flame
          else if (rand > 0.78) color = colorPalette[3]; // Gold
          else if (rand > 0.68) color = colorPalette[4]; // Lime
          else if (rand > 0.58) color = colorPalette[5]; // Cyan
          else if (rand > 0.35) color = colorPalette[1]; // Lunar white

          grains.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            vx: 0,
            vy: 0,
            size: Math.random() * 0.95 + 0.65, // 0.65px - 1.6px
            baseAlpha: Math.random() * 0.22 + 0.12,
            alpha: Math.random() * 0.22 + 0.12,
            depth: Math.random() * 0.7 + 0.3, // Depth factor for 3D parallax
            color,
            phase: Math.random() * Math.PI * 2,
            phaseSpeed: Math.random() * 0.03 + 0.015
          });
        }
      }
    };

    initGrains();

    const handleResize = () => {
      initGrains();
    };
    window.addEventListener('resize', handleResize);

    // Update curtain bounds on scroll
    const updateCurtainPosition = () => {
      if (curtainRef && curtainRef.current) {
        const rect = curtainRef.current.getBoundingClientRect();
        curtainTop = Math.max(0, rect.top);
      } else {
        curtainTop = Math.max(0, window.innerHeight - window.scrollY);
      }

      // Apply hardware-accelerated clipPath directly to canvas so Hero section is 100% excluded
      if (canvas) {
        canvas.style.clipPath = `inset(${Math.floor(curtainTop)}px 0 0 0)`;
      }
    };

    window.addEventListener('scroll', updateCurtainPosition, { passive: true });
    updateCurtainPosition();

    // Pointer move listener: drives interactive movement with respect to cursor
    const handlePointerMove = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (!isPointerActive) {
        isPointerActive = true;
        lerpMouseX = clientX;
        lerpMouseY = clientY;
      }

      const dx = clientX - lastMouseX;
      const dy = clientY - lastMouseY;
      mouseSpeed = Math.sqrt(dx * dx + dy * dy);

      mouseX = clientX;
      mouseY = clientY;

      // Calculate global field parallax target based on cursor position relative to screen center
      targetParallaxX = ((clientX / width) - 0.5) * 45;
      targetParallaxY = ((clientY / height) - 0.5) * 45;

      // Spawn kinetic trailing sparks when cursor moves fast
      if (mouseSpeed > 4 && lastMouseX !== -1000 && clientY >= curtainTop - 50) {
        const spawnCount = Math.min(3, Math.max(1, Math.floor(mouseSpeed * 0.15)));
        for (let i = 0; i < spawnCount; i++) {
          if (sparks.length >= maxSparks) sparks.shift();
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2.0 + 0.4;
          const sparkColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

          sparks.push({
            x: clientX + (Math.random() - 0.5) * 8,
            y: clientY + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * speed + dx * 0.1,
            vy: Math.sin(angle) * speed + dy * 0.1,
            size: Math.random() * 1.4 + 0.7,
            alpha: 0.85,
            decay: Math.random() * 0.035 + 0.02,
            color: sparkColor
          });
        }
      }

      lastMouseX = clientX;
      lastMouseY = clientY;
    };

    const handlePointerLeave = () => {
      isPointerActive = false;
      mouseX = -1000;
      mouseY = -1000;
      lastMouseX = -1000;
      lastMouseY = -1000;
      targetParallaxX = 0;
      targetParallaxY = 0;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0]);
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handlePointerLeave, { passive: true });

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animId) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation loop
    let time = 0;
    const interactionRadius = 160;
    const interactionRadiusSq = interactionRadius * interactionRadius;

    const render = () => {
      if (!isTabVisible) {
        animId = null;
        return;
      }

      time += 0.02;

      // If curtain is completely offscreen (user fully on Hero section), skip drawing to save GPU
      if (curtainTop >= height - 2) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth lerp for global cursor parallax drift
      fieldParallaxX += (targetParallaxX - fieldParallaxX) * 0.06;
      fieldParallaxY += (targetParallaxY - fieldParallaxY) * 0.06;

      // Ambient cursor light aura beneath grains
      if (isPointerActive && mouseY >= curtainTop - 100) {
        lerpMouseX += (mouseX - lerpMouseX) * 0.12;
        lerpMouseY += (mouseY - lerpMouseY) * 0.12;

        const aura = ctx.createRadialGradient(
          lerpMouseX,
          lerpMouseY,
          0,
          lerpMouseX,
          lerpMouseY,
          200
        );
        aura.addColorStop(0, 'rgba(255, 85, 0, 0.065)');
        aura.addColorStop(0.5, 'rgba(190, 242, 100, 0.02)');
        aura.addColorStop(1, 'rgba(8, 7, 13, 0)');

        ctx.fillStyle = aura;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & render grains
      for (let i = 0; i < grains.length; i++) {
        const g = grains[i];

        // 1. Organic Brownian micro-flutter
        g.phase += g.phaseSpeed;
        const shimmer = Math.sin(g.phase + time) * 0.05;

        // Effective equilibrium position with cursor parallax
        const eqX = g.baseX + fieldParallaxX * g.depth;
        const eqY = g.baseY + fieldParallaxY * g.depth;

        // 2. Interactive Cursor Repulsion & Swirl
        if (isPointerActive) {
          const dx = g.x - mouseX;
          const dy = g.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < interactionRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / interactionRadius;

            // Push away
            const push = factor * factor * 4.8;
            const normX = dx / dist;
            const normY = dy / dist;

            // Fluid swirl
            const swirl = factor * 2.4;
            g.vx += normX * push - normY * swirl;
            g.vy += normY * push + normX * swirl;

            // Highlight grain near pointer
            const targetAlpha = Math.min(0.92, g.baseAlpha + factor * 0.68);
            g.alpha += (targetAlpha - g.alpha) * 0.3;
          } else {
            g.alpha += (g.baseAlpha + shimmer - g.alpha) * 0.05;
          }
        } else {
          g.alpha += (g.baseAlpha + shimmer - g.alpha) * 0.05;
        }

        // 3. Elastic Spring to Parallaxed Equilibrium
        const springX = (eqX - g.x) * 0.032;
        const springY = (eqY - g.y) * 0.032;
        g.vx += springX;
        g.vy += springY;

        // 4. Viscous Drag
        g.vx *= 0.88;
        g.vy *= 0.88;

        // 5. Update Position
        g.x += g.vx;
        g.y += g.vy;

        // 6. Draw Grain (Only if below or near curtainTop)
        if (g.y >= curtainTop - 20 && g.alpha > 0.03) {
          ctx.fillStyle = `${g.color}${Math.max(0, Math.min(1, g.alpha))})`;
          ctx.beginPath();
          ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render kinetic trailing sparks
      for (let j = sparks.length - 1; j >= 0; j--) {
        const s = sparks[j];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(j, 1);
          continue;
        }

        if (s.y >= curtainTop - 20) {
          ctx.fillStyle = `${s.color}${s.alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateCurtainPosition);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [curtainRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 w-full h-full select-none"
      style={{ willChange: 'clip-path' }}
    />
  );
}
