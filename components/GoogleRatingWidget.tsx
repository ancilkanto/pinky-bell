'use client';

import Image from 'next/image';

interface GoogleRatingWidgetProps {
  rating?: number;
  className?: string;
}

export default function GoogleRatingWidget({ 
  rating = 4.8, 
  className = '' 
}: GoogleRatingWidgetProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={`star-${i}`}
          src="/google-rating/star.svg"
          alt="Star"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      );
    }
    
    // Half star (if needed)
    if (hasHalfStar && fullStars < 5) {
      stars.push(
        <div key="half-star" className="relative w-4 h-4">
          <Image
            src="/google-rating/star.svg"
            alt="Half Star"
            width={16}
            height={16}
            className="w-4 h-4 opacity-50"
          />
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image
          key={`empty-star-${i}`}
          src="/google-rating/star.svg"
          alt="Empty Star"
          width={16}
          height={16}
          className="w-4 h-4 opacity-20"
        />
      );
    }
    
    return stars;
  };

  return (
    <a href="https://www.google.com/search?q=pinky+bell+oman+reviews" target="_blank" rel="noopener noreferrer">
      <div className={`google-rating-widget rounded-[20px] py-4 px-6 gap-4 border border-gray-400 inline-flex flex-row items-center justify-center max-[620px]:py-2 max-[620px]:px-4 max-[620px]:gap-2 ${className}`}>
        <div className="flex items-center gap-3">
          <Image
            src="/google-rating/google-logo.svg"
            alt="Google"
            width={43}
            height={44}
            className="w-[43] h-[44] max-[620px]:w-[30] max-[620px]:h-[30]"
          />          
        </div>
        
        <div className="flex flex-col items-left gap-2">
          <span className="text-lg font-bold text-gray-900 max-[620px]:text-sm">Google Reviews</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 max-[620px]:text-sm">{rating}</span>
            {renderStars()}
          </div>
        </div>        
      </div>
    </a>
  );
}
