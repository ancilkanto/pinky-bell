'use client';

import Image from "next/image";
import { forwardRef } from "react";
import type { CSSProperties, ForwardedRef } from "react";

type TestimonialItemProps = {
  quote: string;
  author: string;
  company?: string;
  image: string;
  style?: CSSProperties;
};

function TestimonialItem(
  { quote, author, company, image, style }: TestimonialItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      style={style}
      className="bg-[#EDEDED] relative rounded-[20px] py-12 px-8 min-h-[320px] flex flex-col justify-between h-full"
    >
      <div className="absolute top-[-30px] left-[50px] w-[70px] h-[57px] z-10 max-[768px]:top-[-10px] max-[768px]:left-[30px] max-[768px]:w-[50px] max-[768px]:h-[40px]">
        <Image
          src="/quote-pink.svg"
          alt="Quote Pink"
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
      <p
        className="text-[17px] leading-[27px] text-gray-600 font-normal"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {quote}
      </p>
      <div className="mt-[30px] flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={author}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div>
          <p
            className="gold-text text-[24px] font-semibold"
            style={{ fontFamily: "var(--font-quicksand)" }}
          >
            {author}
          </p>
          {company ? (
            <p
              className="text-[14px] text-gray-900"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {company}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(TestimonialItem);

