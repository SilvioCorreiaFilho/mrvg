import React from 'react';

const AnniversaryLogo = () => {
  return (
    <div className="relative">
      {/* 15th Anniversary Logo */}
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* Main Logo */}
          <div className="relative">
            <img 
              src="/assets/images/newLogo.svg" 
              alt="MRVG" 
              className="h-24 md:h-28 w-auto object-contain brightness-[1.4] filter" 
              style={{maxWidth: '220px'}}
            />
            <div className="absolute -top-4 -right-6 text-sm bg-white text-gray-800 px-2 py-1 rounded-sm transform rotate-12 font-bold">
              <span>15 ANOS</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="w-full h-[3px] bg-gradient-to-r from-gray-300 via-white to-gray-300 mt-2"></div>
          
          {/* Removed ADVOGADOS text as requested */}
          
          {/* Anniversary Laurel */}
          <div className="absolute -left-12 -top-4 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 rotate-[140deg]">
                <div className="h-20 w-[3px] bg-gradient-to-b from-gray-300 to-transparent rounded-full"></div>
              </div>
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 rotate-[160deg]">
                <div className="h-16 w-[2px] bg-gradient-to-b from-gray-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-12 -top-4 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-[220deg]">
                <div className="h-20 w-[3px] bg-gradient-to-b from-gray-300 to-transparent rounded-full"></div>
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-[200deg]">
                <div className="h-16 w-[2px] bg-gradient-to-b from-gray-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Commemorative Text */}
          <div className="text-sm text-center text-gray-300 mt-4 tracking-widest">
            EXCELÊNCIA JURÍDICA DESDE 2009
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryLogo;