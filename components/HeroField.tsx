"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  warm: boolean;
};

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.5, y: 0.5 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let nodes: NodePoint[] = [];

    const seeded = (index: number) => {
      const value = Math.sin(index * 9187.31) * 43758.5453;
      return value - Math.floor(value);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.min(52, Math.floor(width / 28)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: seeded(index * 5 + 1) * width,
        y: seeded(index * 5 + 2) * height,
        vx: (seeded(index * 5 + 3) - 0.5) * 0.12,
        vy: (seeded(index * 5 + 4) - 0.5) * 0.12,
        radius: 1 + seeded(index * 5 + 5) * 1.6,
        warm: index % 13 === 0,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let first = 0; first < nodes.length; first += 1) {
        const point = nodes[first];
        if (!reducedMotion) {
          point.x += point.vx + (pointer.x - 0.5) * 0.012;
          point.y += point.vy + (pointer.y - 0.5) * 0.012;
        }

        if (point.x < -20) point.x = width + 20;
        if (point.x > width + 20) point.x = -20;
        if (point.y < -20) point.y = height + 20;
        if (point.y > height + 20) point.y = -20;

        for (let second = first + 1; second < nodes.length; second += 1) {
          const other = nodes[second];
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 155) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(160, 195, 236, ${0.13 * (1 - distance / 155)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = point.warm ? "rgba(255, 122, 23, 0.72)" : "rgba(218, 219, 223, 0.5)";
        context.fill();
      }

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth;
      pointer.y = event.clientY / window.innerHeight;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-field" aria-hidden="true" />;
}
