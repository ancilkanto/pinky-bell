'use client';

import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TestimonialItem from "./TestimonialItem";

export type TestimonialSliderControls = {
  goPrev: () => void;
  goNext: () => void;
  isBeginning: boolean;
  isEnd: boolean;
};

type TestimonialSliderProps = {
  onControlsChange?: (controls: TestimonialSliderControls) => void;
};

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company?: string;
  image: string;
};

const testimonialData: Testimonial[] = [
  {
    id: "ttc",
    quote:
      "Our decision to work with Pinkybell was based on strong recommendations, and we couldn't be happier. Their commitment to excellence and the seamless upgrade of our  website make them our top recommendation for anyone seeking web development services. We look forward to many more successful projects with Pinkybell as our trusted partner in achieving digital excellence.",
    author: "Rajashekar Duduka",
    company: "Technical Trading Company LLC",    
    image: "/testimonials/ttc.png",    
  },
  {
    id: "ajith",
    quote:
      "I have been very impressed with the website design and responsiveness of Pinky Bell team. I would like to say that you set a benchmark in customer support.",
    author: "Ajith Cecil",
    company: "Bahwan Exel LLC",
    image: "/testimonials/ajith.png",    
  },
  {
    id: "ahmed",
    quote:
      "Pinky bell is one of good company designing Home Page & providing Web hosting”. It’s recommended.",
    author: "Ahmed Mohammed Al Kindi",
    company: "Oman Foods Investments Holding Co SAOC (OFIC)",
    image: "/testimonials/ahmed.png",    
  },
  {
    id: "sandeep",
    quote:
      "Pinkybell has delivered website projects for us and they are our number one chosen provider for web solutions. They never let us down, and provide excellent service and value. I would highly recommend them to others without hesitation.",
    author: "Sandeep Ghai",
    company: "Precision Tune Auto Care",
    image: "/testimonials/sandeep.jpg",    
  },
];

export default function TestimonialSlider({
  onControlsChange,
}: TestimonialSliderProps) {
  const testimonials = useMemo(() => testimonialData, []);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const updateNavState = (swiper: SwiperInstance) => {
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  const measureHeights = useCallback(() => {
    const maxHeight = cardRefs.current.reduce((max, card) => {
      const height = card?.getBoundingClientRect().height ?? 0;
      return height > max ? height : max;
    }, 0);
    if (maxHeight) {
      setCardHeight((prev) => (prev === maxHeight ? prev : maxHeight));
    }
  }, []);

  useLayoutEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [measureHeights]);

  const handleSwiperInit = (swiper: SwiperInstance) => {
    swiperRef.current = swiper;
    updateNavState(swiper);
    measureHeights();
  };

  const handleSlideChange = (swiper: SwiperInstance) => {
    updateNavState(swiper);
  };

  const goPrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);
  const goNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  useLayoutEffect(() => {
    if (!onControlsChange) return;
    onControlsChange({
      goPrev,
      goNext,
      isBeginning: navState.isBeginning,
      isEnd: navState.isEnd,
    });
  }, [goPrev, goNext, navState, onControlsChange]);

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2">
      <div
        className="pr-6 md:pr-10"
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 1380px) / 2))",
          paddingRight: "max(1.5rem, calc((100vw - 1380px) / 2))",
        }}
      >
        <Swiper
          spaceBetween={32}
          slidesPerView={1.05}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2.25 },
            1536: { slidesPerView: 2.5 },
          }}
          className="!overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              <TestimonialItem
                {...testimonial}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={cardHeight ? { height: cardHeight } : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

