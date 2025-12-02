"use client";
import React, { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]); // Store particles here
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track Mouse
    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        addParticle(e.clientX, e.clientY);
      }
    };

    const addParticle = (x, y) => {
      particlesRef.current.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 1, // Slight upward float
        life: 1.0,
        size: Math.random() * 20 + 10,
        color: Math.random() > 0.5 ? "168, 85, 247" : "59, 130, 246", // Purple/Blue
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < particlesRef.current.length; i++) {
        let p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.3; // Expand
        p.life -= 0.02;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();

        let gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(${p.color}, ${p.life * 0.3})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
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
