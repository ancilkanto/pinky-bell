'use client';

import Image from 'next/image';

type FooterContactInfoProps = {
  icon: string;
  children: React.ReactNode;
  iconAlign?: 'top' | 'center' | 'bottom';
  className?: string;
};

export default function FooterContactInfo({
  icon,
  children,
  iconAlign = 'center',
  className = '',
}: FooterContactInfoProps) {
  return (
    <div className={`flex gap-4 items-start ${className}`}>
      <Image src={icon} alt="" width={25} height={25} className="w-[25px] h-auto" style={{ alignSelf: iconAlign === 'top' ? 'flex-start' : iconAlign === 'bottom' ? 'flex-end' : 'center' }} />
      <div className="text-gray-700 text-[16px] font-medium leading-[26px]">{children}</div>
    </div>
  );
}

