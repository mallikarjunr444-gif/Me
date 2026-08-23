import React, { useRef, useEffect } from 'react';

export function HeroCanvas({ riveState = 'idle' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, radius: 180 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);

    // Dynamic count based on state
    const particleCount = riveState === 'sync' ? 85 : riveState === 'hyper' ? 100 : 55;
    const particles = [];

    const baseSpeed = riveState === 'hyper' ? 2.5 : riveState === 'scan' ? 1.5 : 0.8;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        radius: Math.random() * 2.5 + 1.2,
        color:
          riveState === 'hyper'
            ? '#fbbf24'
            : riveState === 'scan'
            ? '#34d399'
            : Math.random() > 0.4
            ? '#38bdf8'
            : '#a855f7',
      });
    }

    let scanY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Scanline overlay if state === 'scan'
      if (riveState === 'scan') {
        scanY = (scanY + 3) % height;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#34d399';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const push = riveState === 'hyper' ? 2.5 : 1.2;
          p.x += (dx / dist) * force * push;
          p.y += (dy / dist) * force * push;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (riveState === 'hyper' || riveState === 'sync') {
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        const maxDist = riveState === 'sync' ? 140 : 110;
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 1 - distNodes / maxDist;
            const strokeColor =
              riveState === 'hyper'
                ? `rgba(251, 191, 36, ${alpha * 0.35})`
                : riveState === 'scan'
                ? `rgba(52, 211, 153, ${alpha * 0.35})`
                : `rgba(56, 189, 248, ${alpha * 0.25})`;
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [riveState]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-65"
    />
  );
}
