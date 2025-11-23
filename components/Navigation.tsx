import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-2 p-2 main-navigation" style={{ border: '1px solid #FFBEE3', borderRadius: '30px' }}>
      <a href="#" className="flex items-center gap-2 text-[18px] text-gray-700 hover:text-black transition-colors active-menu-item" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>
        <Image src="/menu-icons/home.svg" alt="" width={15} height={15} className="h-[15px] w-auto" priority />
        Home
      </a>
      <a href="#" className="flex items-center gap-2 text-[18px] text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>
        <Image src="/menu-icons/about.svg" alt="" width={15} height={15} className="h-[15px] w-auto" priority />
        About us
      </a>
      <a href="#" className="flex items-center gap-2 text-[18px] text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>
        <Image src="/menu-icons/services.svg" alt="" width={15} height={15} className="h-[15px] w-auto" priority />
        Services
      </a>
      <a href="#" className="flex items-center gap-2 text-[18px] text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>
        <Image src="/menu-icons/contact.svg" alt="" width={15} height={15} className="h-[15px] w-auto" priority />
        Contact
      </a>
    </nav>
  );
}

