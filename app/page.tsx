'use client';

import { useState } from "react";
import HeroAnimation from "@/components/HeroAnimation";
import Image from "next/image";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import IntermidiateParallaxSection from "@/components/IntermidiateParallaxSection";
import ServicesSection from "@/components/ServicesSection";
import ImageTiles from "@/components/ImageTiles";
import TestimonialSlider, {
  TestimonialSliderControls,
} from "@/components/TestimonialSlider";
import ClientLogosGrid from "@/components/ClientLogosGrid";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  const [sliderControls, setSliderControls] =
    useState<TestimonialSliderControls | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <HeroAnimation />
      <div className="about-section w-full bg-[#f5f5f5] py-[120px]">
        <div className="max-w-[1380px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-7">
              <div className="collage-wrapper pr-[55px]">
                <div className="grid grid-cols-12 gap-[50px]">
                  <div className="col-span-4">
                    <div className="flex flex-col items-end gap-[30px]">
                      <div className="relative w-[168px] h-[208px] overflow-hidden self-end rounded-lg">
                        <Image
                          src="/about-collage-1.jpg"
                          alt="About 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-full h-[238px] overflow-hidden self-end rounded-lg">
                        <Image
                          src="/about-collage-2.jpg"
                          alt="About 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div className="flex flex-col items-start gap-[30px]">
                      <div className="relative w-full h-[476px] overflow-x-hidden self-start rounded-[20px]">
                        <VideoPlayer videoUrl="/about-pinkybell-alt.mp4" controls={false} autoPlay={true} loop={true} muted={true} poster="/about-video-poster.jpg"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <SectionTitle
                subTitle="Who We Are"
                title="About the Company"
              />
              <p className="mt-[30px] text-[17px] leading-[27px] text-gray-500 font-normal" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                PINKY BELL is a web designing company based in Oman and we give immense importance to the User Interface (UI) and User Experience (UX) while creating websites and host them on the most reliable servers. PINKY BELL is a web designing company based in Oman and we give immense importance to the User Interface and User Experience while creating websites and host them on the most reliable servers.
              </p>
              <div className="mt-[30px]">
                <Button btnStyle="outline-pink" href="#about" newTab={false}>
                  Discover More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intermidiate-section w-full bg-white">
        <IntermidiateParallaxSection
        imageUrl="/intermidiate-bg.jpg"
        height={660}
        className="w-full"
      >
          
        </IntermidiateParallaxSection>
      </div>
      <ServicesSection />
      <div className="image-tile-section w-full bg-white">
        <ImageTiles rows={5}  />
      </div>
      <div className="testimonial-section w-full bg-white py-[120px]">
        <div className="max-w-[1380px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-6 text-left">
              <SectionTitle
                subTitle="Testimonials"
                title="Our Happy Customers"
              />
            </div>
            <div className="col-span-6 text-right">
              <div className="testimonial-navigation flex gap-4 justify-end">
                <button
                  aria-label="Previous testimonial"
                  onClick={sliderControls?.goPrev}
                  disabled={
                    sliderControls ? sliderControls.isBeginning : true
                  }
                  className={`w-[50px] h-[50px] rounded-full border border-[#AC8A2B] flex items-center justify-center transition ${
                    sliderControls?.isBeginning ?? true
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-800 hover:text-white hover:bg-[#AC8A2B] cursor-pointer"
                  }`}
                >
                  <Image src="/arrow-left-gold.svg" alt="Previous testimonial" width={10} height={20} className="w-[10px] h-[20px]" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={sliderControls?.goNext}
                  disabled={sliderControls ? sliderControls.isEnd : true}
                  className={`w-[50px] h-[50px] rounded-full border border-[#AC8A2B] flex items-center justify-center transition ${
                    sliderControls?.isEnd ?? true
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-800 hover:text-white hover:bg-[#AC8A2B] cursor-pointer"
                  }`}
                >
                  <Image src="/arrow-right-gold.svg" alt="Next testimonial" width={10} height={20} className="w-[10px] h-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden pt-[35px]">
          <TestimonialSlider onControlsChange={setSliderControls} />
        </div>
      </div>
      <div className="clients-section pb-[120px] pt-[50px]">
        <div className="max-w-[1380px] mx-auto w-full">
          <div className="text-center">
            <SectionTitle
              subTitle=""
              title="Our Valuable Clients"
            />
            <div className="client-logos-grid-wrapper">
              <ClientLogosGrid columns={5} />
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}
