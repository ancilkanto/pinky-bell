import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n/translations';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'black' | 'minimalDark';
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  className?: string;
  flipIconOnRTL?: boolean;
  currentLang?: Locale;
}

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  icon,
  iconPosition = 'left',
  iconSize = 14,
  className = '',
  flipIconOnRTL = false,
  currentLang = 'en'
}: ButtonProps) {
  const isRTL = currentLang === 'ar';
  const baseStyles = 'rounded-[50px] transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase tracking-[2px] text-[14px] font-medium';
  
  const variantStyles = {
    primary: 'px-6 py-3 bg-gradient-to-r from-[#7F54A4] via-[#D62A7B] to-[#F47B39] text-white hover:shadow-lg hover:scale-105',
    minimalDark: 'py-3 bg-transparent text-gray-900 hover:text-gray-700 minimal-button',
    secondary: 'px-6 py-3 bg-gray-800 text-white hover:bg-gray-700',
    outline: 'px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
    black: 'px-6 py-3 bg-black text-white hover:shadow-lg hover:scale-105',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <Image src={icon} alt="" width={iconSize} height={iconSize} className={`w-auto h-auto ${flipIconOnRTL && isRTL ? 'scale-x-[-1]' : ''}`} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Image src={icon} alt="" width={iconSize} height={iconSize} className={`w-auto h-auto ${flipIconOnRTL && isRTL ? 'scale-x-[-1]' : ''}`} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}

