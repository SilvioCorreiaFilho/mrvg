import React from 'react';

const AnniversaryLogo = () => {
  return (
    <div className="relative pt-3 pb-2 px-4">
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center z-10">
          {/* Main Logo */}
          <div className="relative mb-2">
            <img 
              src="/assets/images/newLogo.svg" 
              alt="MRVG" 
              className="h-24 md:h-28 w-auto object-contain" 
            />
            
            {/* Elegant Anniversary Badge - Refined version */}
            <div className="absolute -right-4 -top-4 flex items-center justify-center">
              <div className="relative">
                {/* Subtle border ring */}
                <div className="absolute inset-0 w-[68px] h-[68px] rounded-full border border-gray-800 opacity-10"></div>
                
                {/* Main badge */}
                <div className="bg-gray-800 text-white w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold leading-none">15</div>
                    <div className="text-[10px] uppercase tracking-wider font-light">anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle divider */}
          <div className="w-full h-[1px] bg-gray-800 opacity-20 mt-2"></div>
          
          {/* Understated commemorative text */}
          <div className="text-xs text-center text-gray-500 mt-2 tracking-wide font-light">
            EXCELÊNCIA JURÍDICA DESDE 2009
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryLogo;