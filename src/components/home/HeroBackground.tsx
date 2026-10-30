"use client";

import React, { useEffect, useState } from "react";

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable mouse effect on devices that support hover and have a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to debounce updates and prevent layout thrashing
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        animationFrameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-16 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, var(--brand-purple) 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
          willChange: "transform",
        }}
      />
      <div
        className="hidden md:block absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob"
        style={{ backgroundColor: "var(--brand-cyan)" }}
      />
      <div
        className="hidden md:block absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-2000"
        style={{ backgroundColor: "var(--brand-yellow)" }}
      />
      <div
        className="hidden md:block absolute bottom-0 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-4000"
        style={{ backgroundColor: "var(--brand-purple)" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
        }}
      />
    </div>
  );
}
