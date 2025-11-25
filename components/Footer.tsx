'use client';

import Link from 'next/link';
import { Locale, translations } from '@/i18n/translations';
import Button from './Button';
import Image from 'next/image';
import FooterContactInfo from './FooterContactInfo';
import GoogleRatingWidget from './GoogleRatingWidget';
import { useEffect, useRef, useState } from 'react';
import { getLocalePath } from '@/utils/locale';
import GetAQuote from './GetAQuote';

export default function Footer({ currentLang }: { currentLang: Locale }) {
  const t = translations[currentLang];
  const currentYear = new Date().getFullYear();
  const ctaRef = useRef<HTMLDivElement>(null);
  const [adjusterHeight, setAdjusterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ctaRef.current) {
        const ctaHeight = ctaRef.current.offsetHeight;
        setAdjusterHeight(ctaHeight / 2);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (ctaRef.current) {
      resizeObserver.observe(ctaRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <footer className="bg-[#EDEDED] text-gray-800">
        {/* Top Bar CTA */}
        <div className="footer-top-bar-adjuster bg-white" style={{ height: `${adjusterHeight}px` }}>
            {/* Do Not Remove This Div */}
        </div>
        <div ref={ctaRef} className="mx-auto max-w-[1380px] highlight-bg py-12 rounded-[20px] footer-top-bar-cta py-[70px] px-[70px] px-0 max-[1400px]:px-[50px] max-[1400px]:py-[50px] max-[1400px]:max-w-[1300px] max-[1310px]:max-w-[1200px] max-[1220px]:max-w-[1000px] max-[1080px]:max-w-[800px] max-[768px]:max-w-[600px] max-[620px]:max-w-[480px] max-[620px]:px-[30px] max-[520px]:max-w-[calc(100vw-20px)]" style={{ marginTop: `${adjusterHeight * -1}px` }}>
            <div className="grid grid-cols-12 gap-8 align-items-center max-[768px]:grid-cols-1 max-[768px]:gap-4">
                <div className="col-span-7 max-[768px]:col-span-12">
                    <h3 className="text-white text-[36px] font-regular line-height-[36px] leading-tight pb-6 max-w-[650px] max-[1440px]:text-[30px] max-[1440px]:max-w-[550px] max-[620px]:text-[24px] max-[620px]:max-w-[450px]" style={{ fontFamily: "var(--font-quicksand), sans-serif" }}>
                        We value personal connection and are here to answer any questions or listen to your thoughts.                 
                    </h3>
                    <div className="flex items-top gap-4 max-w-[430px] mt-2 items-start">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="flex-shrink-0" />
                        <p className="text-white text-[17px] font-medium leading-[27px]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            You’ll find us on <a href="https://wa.me/96892222222" target="_blank" className="text-white underline transition-colors duration-300">WhatsApp</a> where we respond to every message personally. 
                        </p>
                    </div>
                </div>
                <div className={`col-span-5 flex items-center justify-end border-[rgba(255,255,255,0.5)] max-[768px]:border-0 pl-8 max-[768px]:col-span-12 max-[768px]:pl-0 max-[768px]:items-start ${currentLang === 'ar' ? 'border-r-1' : 'border-l-1'}`}>
                    <div className="flex flex-col items-right justify-end max-[768px]:justify-start max-[768px]:w-full">
                        <div className="flex items-top gap-4 max-w-[430px] mb-6 max-[768px]:mb-0">
                            <Image src="/phone-line.svg" alt="Phone" width={33} height={25} className="flex-shrink-0" />
                            <p className="text-light text-[20px] font-medium leading-tight">
                                <a href="tel:+96895219875" className="text-white transition-colors duration-300">+968 9521 9875 (OM)</a>
                            </p>
                        </div>
                        <div className="flex items-right justify-end max-[768px]:justify-start max-[768px]:pt-6">
                            <Button href="tel:+96895219875" btnStyle="outline-white">
                              Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-[1380px] py-16 px-0 max-[1400px]:px-8 max-[768px]:px-10">
            <div className="grid grid-cols-12 gap-8 max-[768px]:grid-cols-1 max-[768px]:gap-4">
                {/* About Section */}
                <div className="col-span-3 h-full flex flex-col gap-10 max-[1180px]:col-span-4 max-[768px]:col-span-12 max-[768px]:gap-4 max-[768px]:flex-row max-[768px]:justify-between max-[768px]:border-b-1 max-[768px]:border-pink-300 max-[768px]:pb-8 max-[520px]:flex-col max-[520px]:justify-center">
                    <div className="align-start w-full max-[768px]:w-1/2 max-[520px]:w-full max-[520px]:flex max-[520px]:justify-center ">
                        <Link href="/" className="">
                            <Image
                                src="/logo-large.png"
                                alt="PinkyBell Logo"
                                width={130}
                                height={95}
                                className="w-[173px] h-auto max-[768px]:w-[100px] max-[768px]:h-auto"
                                style={{ maxWidth: "173px" }}
                            />
                        </Link>
                    </div>
                    <div className="google-rating-widget-wrapper align-end w-full max-[768px]:flex max-[768px]:justify-end max-[768px]:items-end max-[768px]:w-1/2 max-[520px]:w-full max-[520px]:justify-center">
                        <GoogleRatingWidget rating={4.9} />
                    </div>
                </div>
                <div className="col-span-3 max-[1180px]:col-span-4 max-[768px]:col-span-12  max-[768px]:border-b-1 max-[768px]:border-pink-300 max-[768px]:pb-8">
                    {/* Contact Us */}
                    <div className="column-1 our-brands grid-cols-4 max-[768px]:grid-cols-1 max-[768px]:gap-4">
                        <h3 className="text-[24px] font-bold gold-text pb-2 max-[768px]:pt-2" style={{ fontFamily: "var(--font-quicksand), sans-serif" }}>
                            Contact Us
                        </h3>
                        <div className="footer-info-wrapper py-4">
                            <FooterContactInfo icon="/location.svg" iconAlign="top" className="pb-6">
                                <p>
                                    PB 1178, PC 114, Regus
                                    <br/>
                                    Business Centre 2nd Floor,
                                    <br/>
                                    Polyglot Complex, Wattayah, 
                                    <br/>
                                    Muscat, 114 Oman
                                </p>
                            </FooterContactInfo>
                            <FooterContactInfo icon="/mail.svg" iconAlign="center" className="pb-6">
                                <p>
                                    <a href="mailto:info@pinkybellgroup.com" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">info@pinkybellgroup.com</a>
                                </p>
                            </FooterContactInfo>
                            <FooterContactInfo icon="/phone.svg" iconAlign="center" className="pb-10">
                                <p>
                                    <a href="tel:+96895219875" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">+968 9521 9875</a>
                                </p>
                            </FooterContactInfo>
                            <Button href="https://www.google.com/maps/place/PinkyBell+IT+Solutions/@23.5966333,58.3820163,17z/data=!3m1!4b1!4m6!3m5!1s0x3e8f51a490f94813:0x583371120478c230!8m2!3d23.5966333!4d58.384205!16s%2Fg%2F11c48q5xzn?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D" btnStyle="outline-pink" newTab={true}>
                                Get Directions
                            </Button>
                        </div>                        
                    </div>
                </div>
                <div className="col-span-2 max-[768px]:col-span-12  max-[768px]:border-b-1 max-[768px]:border-pink-300 max-[768px]:pb-8">
                    {/* Quick Links */}
                    <div className="column-1 quick-links grid-cols-4 max-[768px]:pt-2">
                        <h3 className="text-[24px] font-bold gold-text pb-2" style={{ fontFamily: "var(--font-quicksand), sans-serif" }}>
                            Quick Links
                        </h3>
                        <ul className="py-4">
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    About Us
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Services
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Portfolio
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Careers
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Clients
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Testimonials
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Customer Care
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="/" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-4 max-[768px]:col-span-12 max-[768px]:pt-2">
                    {/* Our Services */}
                    <div className="our-services grid-cols-4">
                        <h3 className="text-[24px] font-bold gold-text pb-2" style={{ fontFamily: "var(--font-quicksand), sans-serif" }}>
                            Our Services
                        </h3>
                        <div className="flex flex-column gap-6">
                            <ul className="pt-4 w-1/2">
                                <li className="py-2">
                                    <Link href="/web-designing" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Web Designing
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/web-email-hosting" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Web & Email Hosting
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/seo" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Search Engine Optimization (SEO)
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/content-writing" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Content Writing
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/e-commerce-development" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                    E-Commerce Development
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/content-writing" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Content Writing
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/payment-gateway-integration" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Payment Gateway Integration
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/wordpress-development" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        WordPress Development
                                    </Link>
                                </li>
                                
                            </ul>
                            <ul className="pt-4 w-1/2">
                                <li className="py-2">
                                    <Link href="/woocommerce-development" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        WooCommerce Development
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/shipping-and-erp-integration" className="text-gray-700 text-[16px] font-medium transition-colors duration-300 hover:text-pink-500">
                                        Shipping and ERP Integration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Bottom Bar */}
        <div className="py-6 bg-white relative z-[210]">
            <div className="mx-auto max-w-[1380px] px-0 max-[1400px]:px-8 max-[768px]:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-800 text-sm">
                    © {currentYear} pinkybellgroup.com All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-800 max-[768px]:pt-4">
                        <Link href="https://www.facebook.com/pinkybell" target="_blank" aria-label="Facebook" className="transition-transform duration-300 hover:scale-110">
                            <Image src="/social-icons/facebook.svg" alt="Facebook" width={26} height={20} className="w-auto h-[20px]" />
                        </Link>
                        <Link href="https://www.instagram.com/pinkybell" target="_blank" aria-label="Instagram" className="transition-transform duration-300 hover:scale-110">
                            <Image src="/social-icons/insta.svg" alt="Instagram" width={26} height={20} className="w-auto h-[20px]" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/pinkybell" target="_blank" aria-label="LinkedIn" className="transition-transform duration-300 hover:scale-110">
                            <Image src="/social-icons/linkedin.svg" alt="LinkedIn" width={26} height={20} className="w-auto h-[20px]" />
                        </Link>
                        <Link href="https://twitter.com/pinkybell" target="_blank" aria-label="Twitter/X" className="transition-transform duration-300 hover:scale-110">
                            <Image src="/social-icons/x-twitter.svg" alt="Twitter" width={26} height={20} className="w-auto h-[20px]" />
                        </Link>
                        <Link href="https://www.youtube.com/@pinkybell" target="_blank" aria-label="YouTube" className="transition-transform duration-300 hover:scale-110">
                            <Image src="/social-icons/youtube.svg" alt="YouTube" width={26} height={20} className="w-auto h-[20px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <GetAQuote />
    </footer>
  );
}

