'use client';

import { ReactNode, useEffect, useRef } from "react";

interface IntermidiateParallaxSectionProps {
  imageUrl: string;
  speed?: number;
  className?: string;
  children?: ReactNode;
  overlayOpacity?: number;
}

export default function IntermidiateParallaxSection({
  imageUrl,
  speed = 0.25,
  className = "",
  children,
  overlayOpacity = 0.25,
}: IntermidiateParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;
    let parallaxEnabled = false;

    const resetTransform = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
      }
    };

    const updateParallax = () => {
      if (!parallaxEnabled || !containerRef.current || !backgroundRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
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

    const enableParallax = () => {
      if (parallaxEnabled) return;
      parallaxEnabled = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      updateParallax();
    };

    const disableParallax = () => {
      if (!parallaxEnabled) return;
      parallaxEnabled = false;
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      resetTransform();
    };

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        disableParallax();
        resetTransform();
      } else {
        enableParallax();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden intermidiate-parallax-section ${className}`}    
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


