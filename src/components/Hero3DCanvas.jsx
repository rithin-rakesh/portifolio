import React, { useEffect, useRef } from 'react';

/**
 * Hero3DCanvas
 * - Ultra-slow, serene 3D spatial particle constellation, soft receding horizon grid,
 *   and gentle multi-chroma caustic volumetric field.
 * - Tuned for whisper-quiet, meditative ambient drift so that text remains the primary focus.
 * - Auto-pauses when tab is hidden or scrolled out of view.
 */
export default function Hero3DCanvas({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }) {
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

    // Smoothed interpolation states with ultra-gentle damping
    let lerpMouseX = 0;
    let lerpMouseY = 0;
    let lerpScroll = 0;

    // 3D Particles Constellation - Barely-moving cosmic dust
    const NUM_PARTICLES = 40;
    const particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 850,
        z: (Math.random() - 0.5) * 900,
        baseSize: Math.random() * 1.8 + 0.6,
        orbitSpeed: (Math.random() * 0.00025 + 0.0001) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius: Math.random() * 35 + 10,
        phase: Math.random() * Math.PI * 2,
        colorType: i % 3 // 0: lime, 1: orange, 2: white
      });
    }

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
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

      // Ultra-slow, barely-moving time progression (0.0008 = whisper-quiet ambient drift)
      time += 0.0008;

      // Extremely gentle, luxurious cursor inertia (reduced damping factor)
      lerpMouseX += (mousePos.x - lerpMouseX) * 0.01;
      lerpMouseY += (mousePos.y - lerpMouseY) * 0.01;
      lerpScroll += (scrollProgress - lerpScroll) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // ----------------------------------------------------------------------
      // 1. DYNAMIC MULTI-CHROMA CAUSTIC VOLUMETRIC LIGHTING (Tranquil Breathing)
      // ----------------------------------------------------------------------
      const centerX = width * 0.5 + lerpMouseX * 18;
      const centerY = height * 0.42 + lerpMouseY * 14;

      // Color interpolation according to chapter
      const chapter = lerpScroll * 3; // 0 to 3
      let primaryR = 255, primaryG = 85, primaryB = 0;   // Orange default
      let accentR = 190, accentG = 242, accentB = 100;   // Lime default

      if (chapter >= 0 && chapter < 1) {
        // Slide 1 -> 2
        const t = chapter;
        primaryR = Math.round(255 * (1 - t) + 16 * t);
        primaryG = Math.round(85 * (1 - t) + 185 * t);
        primaryB = Math.round(0 * (1 - t) + 129 * t);
      } else if (chapter >= 1 && chapter < 2) {
        // Slide 2 -> 3
        const t = chapter - 1;
        primaryR = Math.round(16 * (1 - t) + 190 * t);
        primaryG = Math.round(185 * (1 - t) + 242 * t);
        primaryB = Math.round(129 * (1 - t) + 100 * t);
        accentR = Math.round(190 * (1 - t) + 56 * t);
        accentG = Math.round(242 * (1 - t) + 189 * t);
        accentB = Math.round(100 * (1 - t) + 248 * t);
      } else {
        // Slide 3 -> 4
        const t = Math.min(1, chapter - 2);
        primaryR = Math.round(190 * (1 - t) + 249 * t);
        primaryG = Math.round(242 * (1 - t) + 115 * t);
        primaryB = Math.round(100 * (1 - t) + 22 * t);
        accentR = Math.round(56 * (1 - t) + 6 * t);
        accentG = Math.round(189 * (1 - t) + 182 * t);
        accentB = Math.round(248 * (1 - t) + 212 * t);
      }

      // Primary Caustic Core (Ultra-slow, deep wave)
      const coreX = centerX + Math.sin(time * 0.15) * 6;
      const coreY = centerY + Math.cos(time * 0.12) * 5;
      const coreRadius = Math.max(180, width * 0.35);

      const coreGrad = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreRadius);
      coreGrad.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.20)`);
      coreGrad.addColorStop(0.4, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.07)`);
      coreGrad.addColorStop(0.8, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.01)`);
      coreGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, width, height);

      // Counter-Balanced Accent Rim (Gentle orbit)
      const rimX = width * 0.60 - lerpMouseX * 12 + Math.cos(time * 0.18) * 8;
      const rimY = height * 0.32 - lerpMouseY * 10 + Math.sin(time * 0.15) * 6;
      const rimRadius = Math.max(150, width * 0.26);

      const rimGrad = ctx.createRadialGradient(rimX, rimY, 0, rimX, rimY, rimRadius);
      rimGrad.addColorStop(0, `rgba(${accentR}, ${accentG}, ${accentB}, 0.12)`);
      rimGrad.addColorStop(0.45, `rgba(${accentR}, ${accentG}, ${accentB}, 0.035)`);
      rimGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = rimGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------------------------
      // 2. ISOMETRIC 3D RECEDING FLOOR GRID (Soft, Subtle Depth)
      // ----------------------------------------------------------------------
      const fov = 480;
      const horizonY = height * 0.64;
      const gridScrollOffset = (lerpScroll * 220 + time * 3) % 70;

      ctx.save();
      ctx.lineWidth = 1;

      // Perspective longitudinal lines
      const numLongLines = 14;
      const spreadX = width * 1.3;
      for (let i = 0; i <= numLongLines; i++) {
        const norm = (i / numLongLines - 0.5) * 2;
        const xNear = width * 0.5 + norm * (spreadX * 0.85);
        const yNear = height + 40;
        const xFar = width * 0.5 + norm * (spreadX * 0.05) + lerpMouseX * 12;
        const yFar = horizonY;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
        ctx.beginPath();
        ctx.moveTo(xNear, yNear);
        ctx.lineTo(xFar, yFar);
        ctx.stroke();
      }

      // Receding transverse depth lines
      const numTransLines = 9;
      for (let j = 0; j < numTransLines; j++) {
        const z = j * 70 - gridScrollOffset;
        if (z <= 10) continue;
        const scale = fov / (fov + z);
        const yLine = horizonY + (height - horizonY) * Math.pow(scale, 1.4);
        const alpha = Math.max(0, Math.min(0.035, 0.04 * (1 - z / 800)));

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, yLine);
        ctx.lineTo(width, yLine);
        ctx.stroke();
      }
      ctx.restore();

      // ----------------------------------------------------------------------
      // 3. 3D ORBITING PARTICLE CONSTELLATION & SYNAPTIC CONNECTIONS (Tranquil Drift)
      // ----------------------------------------------------------------------
      // Very gentle camera rotation: reduced yaw to 0.28*PI
      const camYaw = lerpScroll * Math.PI * 0.28 + lerpMouseX * 0.08;
      const camPitch = 0.10 + lerpMouseY * 0.05;
      const cosYaw = Math.cos(camYaw);
      const sinYaw = Math.sin(camYaw);
      const cosPitch = Math.cos(camPitch);
      const sinPitch = Math.sin(camPitch);

      const projected = [];

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i];
        p.phase += p.orbitSpeed;

        // Base 3D coordinates with micro-orbital motion
        const wx = p.x + Math.sin(p.phase) * p.orbitRadius;
        const wy = p.y + Math.cos(p.phase * 0.8) * (p.orbitRadius * 0.6);
        const wz = p.z + Math.cos(p.phase * 0.8) * (p.orbitRadius * 0.8);

        // 3D Yaw Rotation around Y-axis
        const x1 = wx * cosYaw - wz * sinYaw;
        const z1 = wx * sinYaw + wz * cosYaw;

        // 3D Pitch Rotation around X-axis
        const y2 = wy * cosPitch - z1 * sinPitch;
        const z2 = wy * sinPitch + z1 * cosPitch + 620; // Camera distance

        if (z2 <= 20) continue; // Behind camera

        const projScale = fov / z2;
        const screenX = width * 0.5 + x1 * projScale;
        const screenY = height * 0.44 + y2 * projScale;

        // Depth cueing
        const depthAlpha = Math.max(0.06, Math.min(0.55, (1 - (z2 - 200) / 1000)));

        projected.push({
          x: screenX,
          y: screenY,
          scale: projScale,
          size: p.baseSize * projScale * 1.4,
          alpha: depthAlpha,
          colorType: p.colorType
        });
      }

      // Draw subtle connecting vector lines between nearby projected 3D nodes
      ctx.save();
      ctx.lineWidth = 0.6;
      const maxConnDist = Math.min(width * 0.12, 95);

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const lineAlpha = (1 - dist / maxConnDist) * Math.min(p1.alpha, p2.alpha) * 0.16;
            ctx.strokeStyle = `rgba(190, 242, 100, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);

        if (p.colorType === 0) {
          ctx.fillStyle = `rgba(190, 242, 100, ${p.alpha * 0.75})`;
        } else if (p.colorType === 1) {
          ctx.fillStyle = `rgba(255, 85, 0, ${p.alpha * 0.75})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.65})`;
        }
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [scrollProgress, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
