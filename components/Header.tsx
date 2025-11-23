import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-[100]">
      <div className="max-w-[1380px] mx-auto w-full relative flex items-center justify-between py-6">
        {/* Part 1: Logo */}
        <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/pb-logo.png"
            alt="PinkyBell Logo"
            width={130}
            height={95}
            className="h-[95px] w-auto"
            style={{ maxHeight: "95px" }}
            priority
          />
        </a>
        </div>

        {/* Part 2: Main Navigation - Centered on screen */}
        <div className="fixed left-1/2 transform -translate-x-1/2">
          <Navigation />
        </div>

        {/* Part 3: Hamburger Icon */}
        <div className="flex items-center">
          <button className="cursor-pointer flex flex-col gap-1.5 p-0" aria-label="Menu">
            <img src="/hamburger-icon.svg" alt="Open menu" className="w-[40px] h-[25px]" />
          </button>
        </div>
      </div>
    </header>
  );
}

