'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageTilesProps {
  rows?: number;
}

const tileImages = [
  { src: "/gallery/gallery-01.jpg", alt: "Elegant dashboard" },
  { src: "/gallery/gallery-02.jpg", alt: "Agency workspace" },
  { src: "/gallery/gallery-03.jpg", alt: "Creative board" },
  { src: "/gallery/gallery-04.jpg", alt: "Brand style guide" },
  { src: "/gallery/gallery-05.jpg", alt: "Product landing" },
  { src: "/gallery/gallery-06.jpg", alt: "Showcase mockup" },
  { src: "/gallery/gallery-07.jpg", alt: "Agency workspace" },
  { src: "/gallery/gallery-08.jpg", alt: "Creative board" },
  { src: "/gallery/gallery-09.jpg", alt: "Brand style guide" },
  { src: "/gallery/gallery-10.jpg", alt: "Product landing" },
  { src: "/gallery/gallery-11.jpg", alt: "Showcase mockup" },
];

export default function ImageTiles({ rows = 3 }: ImageTilesProps) {
  const columns = 4;
  const totalTiles = rows * columns;
  const tiles = Array.from({ length: totalTiles }).map((_, index) => {
    const image = tileImages[index % tileImages.length];
    return {
      ...image,
      id: `${image.src}-${index}`,
      isTall: (Math.floor(index / columns) + index) % 5 === 0,
    };
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let scrollTriggers: any[] = [];

    async function init() {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      rowRefs.current.forEach((rowRef, index) => {
        if (!rowRef) return;

        const isOdd = index % 2 !== 0;
        const moveDistance = 300;

        const animation = gsap.fromTo(
          rowRef,
          {
            x: 0,
          },
          {
            x: isOdd ? moveDistance : -moveDistance,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        scrollTriggers.push(animation.scrollTrigger);
      });
    }

    init();

    return () => {
      scrollTriggers.forEach((st) => st?.kill());
      scrollTriggers = [];
    };
  }, [rows]);

  return (
    <div ref={containerRef} className="w-full h-[80vh] max-[768px]:h-[40vh] max-[1024px]:h-[60vh] relative bg-white py-0 overflow-hidden">
      <div className="overlay-shadow absolute top-0 left-0 w-full h-[80vh] max-[768px]:h-[40vh] max-[1024px]:h-[60vh] shadow-[inset_0_0_100px_40px_rgba(0,0,0,0.75)] z-[10]"></div>
      <div className="relative top-[50%] left-[50%] z-[8] translate-x-[-50%] translate-y-[-50%] w-[110%] flex flex-col gap-8 max-[768px]:gap-2 max-[1024px]:gap-4 rotate-[20deg]">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const sliceStart = rowIndex * columns;
          const rowTiles = tiles.slice(sliceStart, sliceStart + columns);
        
          return (
            <div
              key={`image-row-${rowIndex}`}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
              className={`grid grid-cols-4 gap-6 max-[768px]:gap-2 max-[1024px]:gap-4 ${rowIndex%2 != 0 ? "pl-[10px] odd" : "even"}`}
            >
              {rowTiles.map((tile) => (
                <div
                  key={tile.id}
                className="group relative h-[275px] w-[440px] max-[768px]:h-[120px] max-[768px]:w-[200px] max-[1024px]:h-[180px] max-[1024px]:w-[300px] overflow-hidden rounded-[24px] bg-gray-100 shadow-[0_20px_45px_rgba(15,23,42,0.08)] max-w-full"
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700"
                    priority={rowIndex === 0}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}




