import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="bg-gray-800 py-3 md:py-4 px-4 md:px-10 text-center relative">
        {/* Subtle top border with gold accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-600 via-[#B0843B]/70 to-gray-600 opacity-60"></div>
        
        <div className="relative z-10 flex items-center justify-center">
          {/* Anniversary artwork banner */}
          <div className="max-w-xs md:max-w-sm">
            <img 
              src="/assets/images/logo_15_sombra.png" 
              alt="MRVG 15 Anos" 
              className="h-20 md:h-28 w-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
        
        {/* Subtle bottom border with gold accent */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-600 via-[#B0843B]/70 to-gray-600 opacity-60"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;