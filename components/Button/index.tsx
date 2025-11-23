import React from "react";
import "./style.css";

interface ButtonProps {
  children: React.ReactNode;
  btnStyle?: string;
  className?: string;
  href?: string;
  newTab?: boolean;
}

export default function Button({ 
  children, 
  btnStyle, 
  className = '',
  href = '#',
  newTab = false,
}: ButtonProps) {
    let arrowIcon = '/arrow-right-white.svg';
    switch (btnStyle) {
        case 'highlight':
            arrowIcon = '/arrow-right-white.svg';
            break;
        case 'outline-white': 
            arrowIcon = '/arrow-right-white.svg';
            break;
        case 'outline-black':
            arrowIcon = '/arrow-right-black.svg';
            break;
        case 'outline-pink':
            arrowIcon = '/arrow-right-pink.svg';
            break;
        default:
            arrowIcon = '/arrow-right-white.svg';
            break;
    }
  

  return (
    <a 
      href={href}
      className={`pb-button ${btnStyle ? `btn-${btnStyle}` : ''} ${className}`}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
      <img src={arrowIcon} alt="Arrow Right" className="w-[16px] h-[12px]" />      
    </a>
  );
}

