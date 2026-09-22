"use client";
import React, { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const lastMousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Handle Responsive Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Subtle refined tech colors for micro data dust
    const colors = [
      { r: 255, g: 255, b: 255 }, // Crisp white
      { r: 56, g: 189, b: 248 },  // Electric cyan
      { r: 96, g: 165, b: 250 },  // Soft blue
      { r: 168, g: 85, b: 247 },  // Subtle purple
      { r: 52, g: 211, b: 153 },  // Emerald accent
    ];

    // Spawn Micro-Particle
    const spawnParticle = (x, y) => {
      if (particlesRef.current.length > 70) return; // Strict cap for lightness & zero clutter

      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.7 + 0.2;

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.2, // Subtle upward drift
        radius: Math.random() * 1.2 + 0.8, // Ultra-fine 0.8px - 2.0px
        color,
        life: 1.0,
        decay: Math.random() * 0.025 + 0.02, // Dissolves quickly (0.7s - 1s)
        twinkleSpeed: Math.random() * 0.15 + 0.05,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    };

    // Mouse Tracking
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      lastMousePos.current = { x: e.clientX, y: e.clientY };

      // Spawn a controlled, minimal number of particles per movement
      const count = Math.min(3, Math.floor(dist / 14) + 1);
      for (let i = 0; i < count; i++) {
        spawnParticle(e.clientX, e.clientY);
      }
    };

    // Render Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.twinklePhase += p.twinkleSpeed;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          i--;
          continue;
        }

        // Twinkle factor
        const twinkle = (Math.sin(p.twinklePhase) + 1) * 0.25 + 0.5;
        const alpha = Math.max(0, p.life * twinkle * 0.85);

        ctx.save();

        // Delicate micro outer halo
        const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
        haloGrad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.4})`);
        haloGrad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Crisp central stardust point
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
