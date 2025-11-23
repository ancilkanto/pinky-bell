'use client';

import Image from "next/image";

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
];

type ClientLogosGridProps = {
  columns?: number;
};

const Card = ({ logo }: { logo: ClientLogo }) => (
  <div className="flex items-center justify-center bg-white border border-gray-100 rounded-[20px] px-6 py-4 h-[120px] w-[200px] shadow-[0_15px_45px_rgba(18,25,51,0.05)]">
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
  const rows = CLIENT_LOGOS.reduce<ClientLogo[][]>((acc, logo, index) => {
    if (index % columns === 0) acc.push([]);
    acc[acc.length - 1].push(logo);
    return acc;
  }, []);

  return (
    <div className="flex flex-col gap-8 py-10">
      {rows.map((row, rowIndex) => {
        return (
          <div
            key={`row-${rowIndex}`}
            className={`flex flex-wrap gap-8 justify-center`}
          >
            {row.map((client) => (
              <Card key={client.id} logo={client} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

