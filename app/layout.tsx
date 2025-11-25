import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Web Design Oman, Web Development Company | PinkyBell, Muscat",
  description: "PinkyBell is the most preferred web design &amp; Website development company in Oman. Located at Muscat we deliver works in Global Standards.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: '#FFFFFF' }}>
      <body
        className={`${quicksand.variable} ${inter.variable} antialiased overflow-x-hidden scroll-smooth w-[100vw]`}
        style={{ background: '#FFFFFF' }}
      >
        <Header />
        {children}
        <Footer currentLang="en" />
      </body>
    </html>
  );
}
