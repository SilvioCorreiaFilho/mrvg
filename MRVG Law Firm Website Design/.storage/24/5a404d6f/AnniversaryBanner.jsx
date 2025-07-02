import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Anniversary Banner - Elegant design with silver/gray and white colors */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-6 px-4 md:px-10 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gray-600 opacity-5"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[100px] bg-white opacity-5 rotate-45"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] h-[100px] bg-white opacity-5 -rotate-45"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <div className="text-5xl font-bold text-white mr-3">15</div>
            <div className="h-16 w-px bg-gray-400"></div>
            <div className="ml-3">
              <div className="text-white text-sm uppercase tracking-widest">Anos de</div>
              <div className="text-white text-xl font-light">Excelência Jurídica</div>
            </div>
          </div>
          
          <div className="h-px md:h-16 w-full md:w-px bg-gray-400 opacity-30"></div>
          
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm mt-1">Celebrando uma trajetória de compromisso e resultados</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-white to-gray-500"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;