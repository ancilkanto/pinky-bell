'use client';

import { ReactNode, useEffect, useRef } from "react";

interface IntermidiateParallaxSectionProps {
  imageUrl: string;
  height?: number;
  speed?: number;
  className?: string;
  children?: ReactNode;
  overlayOpacity?: number;
}

export default function IntermidiateParallaxSection({
  imageUrl,
  height = 660,
  speed = 0.25,
  className = "",
  children,
  overlayOpacity = 0.25,
}: IntermidiateParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;

    const updateParallax = () => {
      if (!containerRef.current || !backgroundRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const distanceFromCenter = rect.top + (rect.height/2) - viewportHeight / 2;
      const translateY = -distanceFromCenter * speed;
      const clampedTranslateY = Math.max(
        -rect.height * 0.4,
        Math.min(rect.height * 0.4, translateY),
      );

      backgroundRef.current.style.transform = `translate3d(0, ${clampedTranslateY}px, 0) scale(1.1)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden intermidiate-parallax-section ${className}`}
      style={{ minHeight: `${height}px` }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-[9] will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          transform: "translate3d(0, 0, 0) scale(1.1)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)",
          opacity: overlayOpacity,
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        {children}
      </div>
    </section>
  );
}


