'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import ServiceItem from "@/components/ServiceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const servicesData = [
  {
    title: "Web Designing",
    subTitle: "Impact-Driven Website Design Services",
    url: "/services/web-designing",
    imageUrl: "/services/web-designing.jpg",
    keywords: ["UI/UX", "Product Websites", "Corporate Sites"],
    description:
      "Pinky Bell has immense expertise in providing extremely reliable hosting services for all sorts of websites and we could also comprehensively monitor your email platforms which will ensure seamless online communication to and from your business enterprise. We understand the need of ensuring continuous functioning of corporate email systems, since majority of business talks happen through emails, and deal with email systems responsibly. We ensure security and hassle free delivery of emails.",
  },
  {
    title: "Web & Email Hosting",
    subTitle: "Impact-Driven Hosting Services",
    url: "/services/web-hosting",
    imageUrl: "/services/web-hosting.jpg",
    keywords: ["Managed Hosting", "Email Security", "Migration"],
    description:
      "Pinky Bell has immense expertise in providing extremely reliable hosting services for all sorts of websites and we could also comprehensively monitor your email platforms which will ensure seamless online communication to and from your business enterprise. We understand the need of ensuring continuous functioning of corporate email systems, since majority of business talks happen through emails, and deal with email systems responsibly. We ensure security and hassle free delivery of emails.",
  },
  {
    title: "Ecommerce Experience Design",
    subTitle: "Conversion-Led Ecommerce Services",
    url: "/services/ecommerce-experience",
    imageUrl: "/services/ecommerce.jpg",
    keywords: ["Shopify", "WooCommerce", "Product Strategy"],
    description:
      "We craft ecommerce journeys that highlight products beautifully while optimising flows for higher conversion and average order value. From product storytelling to checkout UX, every touchpoint is engineered to feel intuitive, secure, and delightful.",
  },
  {
    title: "Search Engine Optimization",
    subTitle: "Conversion-Led SEO Services",
    url: "/services/ecommerce-experience",
    imageUrl: "/services/seo.jpg",
    keywords: ["Shopify", "WooCommerce", "Product Strategy"],
    description:
      "We craft ecommerce journeys that highlight products beautifully while optimising flows for higher conversion and average order value. From product storytelling to checkout UX, every touchpoint is engineered to feel intuitive, secure, and delightful.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const leftBlockRef = useRef<HTMLDivElement | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    let scrollTriggerInstance: any = null;
    let resizeHandler: (() => void) | null = null;

    async function init() {
      if (window.innerWidth < 768) {
        return;
      }
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !leftColumnRef.current || !leftBlockRef.current) return;

      const syncWidth = () => {
        if (!leftColumnRef.current || !leftBlockRef.current) return;
        const columnWidth = leftColumnRef.current.getBoundingClientRect().width;
        leftBlockRef.current.style.width = `${columnWidth}px`;
      };

      syncWidth();

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => sectionRef.current!.offsetTop - 120,
        end: () =>
          sectionRef.current!.offsetTop +
          sectionRef.current!.offsetHeight -
          (window.innerHeight - 60) ,
        pin: leftBlockRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        onRefreshInit: syncWidth,
      });

      resizeHandler = () => {
        syncWidth();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", resizeHandler);
    }

    init();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.35;
      let candidate = 0;

      serviceRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        if (rect.top <= threshold) {
          candidate = index;
        }
      });

      setActiveIndex((prev) => (prev === candidate ? prev : candidate));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="bg-white py-[120px] max-[768px]:py-[100px] w-full" ref={sectionRef}>
      <div className="max-w-[1380px] mx-auto w-full px-0 max-[1400px]:px-8 max-[768px]:px-10">
        <div className="services-section grid grid-cols-12 gap-10 max-[1024px]:gap-0 items-start relative">
          <div className="col-span-6 max-[768px]:col-span-12 ">
            <div ref={leftColumnRef} className="relative min-h-full">
              <div ref={leftBlockRef} className="services-left-block text-left pr-[95px]">
                <SectionTitle
                  subTitle="We Do"
                  title={
                    isMobile
                      ? "Design, Development & Marketing"
                      : servicesData[activeIndex]?.title ?? "Design, Development & Marketing"
                  }
                />
                <div className="service-image-wrapper overflow-hidden rounded-[20px] max-[768px]:hidden">
                  <Swiper
                    modules={[EffectFade]}
                    effect="fade"
                    allowTouchMove={false}
                    speed={700}
                    loop={false}
                    className="service-image-slider"
                    onSwiper={(instance: any) => {
                      swiperRef.current = instance;
                    }}
                  >
                    {servicesData.map((service) => (
                      <SwiperSlide key={service.imageUrl}>
                        <div className="relative h-[422px] w-full">
                          <Image
                            src={service.imageUrl}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 590px"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 max-[768px]:col-span-12">
            <div className="services-list-wrapper grid gap-6 pt-[120px] max-[768px]:pt-[0px]">
              {servicesData.map((service, index) => (
                <div
                  key={service.title}
                  ref={(el) => {
                    serviceRefs.current[index] = el;
                  }}
                >
                  <ServiceItem
                    subTitle={service.subTitle}
                    title={service.title}
                    url={service.url}
                    keywords={service.keywords}
                    imageUrl={service.imageUrl}
                    className={`transition-opacity duration-1000 ${
                      index === activeIndex ? "opacity-100" : "opacity-20"
                    } ${index === servicesData.length - 1 ? "max-[768px]:pb-0" : "max-[768px]:pb-[20px]"}`}
                  >
                    {service.description}
                  </ServiceItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

