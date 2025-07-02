import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="bg-gray-800 py-4 px-4 md:px-10 text-center relative">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-600 opacity-30"></div>
        
        <div className="relative z-10 flex items-center justify-center">
          {/* Anniversary artwork banner */}
          <div className="max-w-xs md:max-w-sm">
            <img 
              src="/assets/images/anniversary_logo.png" 
              alt="MRVG 15 Anos" 
              className="h-24 md:h-32 w-auto object-contain mx-auto" 
              style={{marginTop: '8px', marginBottom: '8px'}} 
            />
          </div>
        </div>
        
        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 opacity-30"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;