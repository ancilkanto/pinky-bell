'use client';

import Image from "next/image";
import Button from "./Button";

type ClientLogo = {
  id: string;
  name: string;
  logo: string;
};

const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: "muscat-steel",
    name: "Muscat Steel",
    logo: "/clients/muscat-steel.png",
  },
  { id: "panel-tech", name: "Panel Tech", logo: "/clients/panel-tech.png" },
  { id: "seven-sea", name: "Seven Sea", logo: "/clients/seven-sea.png" },
  { id: "transom", name: "Transom", logo: "/clients/transom-logo.png" },
  { id: "fcc", name: "FCC", logo: "/clients/fcc-logo.png" },
  { id: "iso", name: "ISO", logo: "/clients/iso.jpg" },
  {
    id: "sharqiyah",
    name: "Sharqiyah Desalination",
    logo: "/clients/Sharqiyah-Desalination.jpg",
  },
  { id: "benaa", name: "Benaa Oman", logo: "/clients/benaaoman.png" },
  { id: "eye", name: "Eye Log", logo: "/clients/eye-log.jpg" },
  { id: "al-quram", name: "Al Quram", logo: "/clients/al-quram-logo.png" },
  { id: "alshakima", name: "Al Shakima", logo: "/clients/alshakima-logo.jpg" },
  { id: "athyab", name: "Athyab", logo: "/clients/athyab-logo.png" },
  { id: "cakereels", name: "Cake Reels", logo: "/clients/cakereels-logo.png" },
  { id: "eraya", name: "Eraya", logo: "/clients/eraya-logo.jpg" },
  { id: "fastco", name: "Fastco", logo: "/clients/fastco.png" },
  { id: "khimji", name: "Khimji", logo: "/clients/khimji-logo.jpg" },
  { id: "munanoor", name: "Munanoor", logo: "/clients/munanoor-logo.jpg" },
  { id: "newworld", name: "New World", logo: "/clients/newworld-logo-1.png" },
  { id: "ourplanet", name: "Our Planet", logo: "/clients/ourplanet.png" },
];

type ClientLogosGridProps = {
  columns?: number;
};

const Card = ({ logo }: { logo: ClientLogo }) => (
  <div className="client-logo-card flex items-center justify-center bg-white border border-gray-100 rounded-[20px] px-6 py-4 h-[120px] w-[200px] shadow-[0_15px_45px_rgba(18,25,51,0.05)]">
    <div className="relative w-full h-full">
      <Image
        src={logo.logo}
        alt={logo.name}
        fill
        sizes="150px"
        className="object-contain"
      />
    </div>
  </div>
);

export default function ClientLogosGrid({ columns = 5 }: ClientLogosGridProps) {
  return (
    <>
      <style>{`
        .client-logos-grid {
          --columns: ${columns};
          --grid-gap: 2.5rem;
          grid-template-columns: repeat(var(--columns), minmax(150px, 200px));
          gap: var(--grid-gap);
          justify-content: center;
        }
        @media (max-width: 1280px) {
          .client-logos-grid {
            --columns: 4;
          }
        }
        @media (max-width: 1024px) {
          .client-logos-grid {
            --columns: 3;
          }
        }
        @media (max-width: 768px) {
          .client-logos-grid {
            --columns: 2;
            --grid-gap: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .client-logos-grid {
            --columns: 2;
            --grid-gap: 1rem;
          }
        }
        @media (max-width: 400px) {
          .client-logos-grid {
            --columns: 1;
            --grid-gap: 1rem;
          }
          .client-logos-grid .client-logo-card {
            display: none;
          }
          .client-logos-grid .client-logo-card:nth-child(-n+3) {
            display: flex;
          }
        }
        
      `}</style>
      <div className="client-logos-grid grid py-10 max-[768px]:py-4 justify-center w-full overflow-x-hidden">
        {CLIENT_LOGOS.map((client) => (
          <Card key={client.id} logo={client} />
        ))}
        <div className="flex justify-center items-center">
          <div className="text-center">
            <Button btnStyle="outline-pink-small" href="#about" newTab={false}>
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

