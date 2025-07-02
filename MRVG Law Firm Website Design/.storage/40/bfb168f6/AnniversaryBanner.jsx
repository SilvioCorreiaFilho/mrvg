import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="bg-gray-800 py-4 px-4 md:px-10 text-center relative">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-600 opacity-30"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:space-x-6">
          {/* Main content */}
          <div className="flex items-center">
            <div className="text-4xl font-serif font-bold text-white mr-3">15</div>
            <div className="h-12 w-px bg-gray-600 opacity-40 mx-3"></div>
            <div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Anos de</div>
              <div className="text-white text-lg font-light">Excelência Jurídica</div>
            </div>
          </div>
          
          {/* Only for medium screens and above */}
          <div className="hidden md:block h-12 w-px bg-gray-600 opacity-20 mx-4"></div>
          
          {/* Only for medium screens and above */}
          <div className="hidden md:block text-left">
            <p className="text-gray-300 text-sm">Tradição e compromisso desde 2009</p>
          </div>
        </div>
        
        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 opacity-30"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;