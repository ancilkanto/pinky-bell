'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function GetAQuote() {
  return (
    <div className="fixed bottom-[20px] right-[20px] z-[200] w-[140px] h-[140px] flex items-center justify-center max-[768px]:scale-50 origin-bottom-right">
      {/* Circular text */}
      <svg
        className="absolute w-full h-full rotate-360-animation"
        viewBox="0 0 140 140"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <path
            id="circle-path"
            d="M 70,70 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text
          className="pink-text uppercase tracking-widest fill-[#F8068E]" 
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '13px' }}
        >
          <textPath
            href="#circle-path"
            startOffset="0%"
          >
            GET A QUOTE • GET A QUOTE • GET A QUOTE •
          </textPath>
        </text>
      </svg>
      {/* Button */}
      <div className="relative w-[80px] h-[80px] highlight-bg rounded-[50%] shadow-[0_0_20px_rgba(0,0,0,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300">
        <Link href="/get-a-quote" className="text-[16px] font-medium flex items-center justify-center flex-row gap-2 w-full h-full">
          <Image src="/invoice.svg" alt="Get a Quote" width={64} height={70} className="w-[32px] h-auto" />
        </Link>
      </div>
    </div>
  );
}

