'use client';

import { ReactNode } from "react";
import Button from "@/components/Button";

interface ServiceItemProps {
  title: string;
  subTitle: string;
  url: string;
  keywords?: string[];
  className?: string;
  children?: ReactNode;
  imageUrl?: string;
}

export default function ServiceItem({
  title,
  subTitle,
  url,
  keywords = [],
  className = '',
  children,
  imageUrl,
}: ServiceItemProps) {
  return (
    <div
      className={`group relative pb-[25vh] transition-all duration-300 ${className}`}
      data-service-title={title}
      data-service-image={imageUrl}
    >
      <div className="relative z-10">
        <h3 className="text-[26px] font-quicksand font-semibold pink-text leading-[36px] mb-[30px]">
          {subTitle}
        </h3>
        {children && (
          <p
            className="text-[17px] leading-[27px] text-gray-600 font-normal"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {children}
          </p>
        )}
        {keywords.length > 0 && (
          <ul className="service-keywords-list mt-5 flex flex-wrap">
            {keywords.map((keyword) => (
              <li
                key={keyword}
                className="text-[18px] font-regular text-gray-400"
                style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
              >
                {keyword}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 inline-flex items-center font-medium tracking-wide">
          <Button btnStyle="highlight" href={url} newTab={false}>
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
}


