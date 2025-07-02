import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Anniversary Banner - Elegant design with golden accents for celebration */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 px-4 md:px-10 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-700 opacity-5"></div>
          
          {/* Gold accents */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"></div>
          
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[100px] bg-amber-400 opacity-5 rotate-45"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] h-[100px] bg-amber-400 opacity-5 -rotate-45"></div>
          
          {/* Celebration sparks */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-10 bg-amber-400 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Decorative stars */}
          <span className="absolute -top-2 left-1/4 text-amber-300 text-lg">★</span>
          <span className="absolute -bottom-2 right-1/4 text-amber-300 text-lg">★</span>
          
          {/* Main content */}
          <div className="flex items-center">
            <div className="text-6xl font-bold text-amber-400 mr-3 drop-shadow-lg">15</div>
            <div className="h-16 w-px bg-amber-500 opacity-70"></div>
            <div className="ml-3">
              <div className="text-amber-200 text-sm uppercase tracking-widest font-bold">Anos de</div>
              <div className="text-amber-300 text-xl font-light">Excelência Jurídica</div>
            </div>
          </div>
          
          <div className="h-px md:h-16 w-full md:w-px bg-amber-500 opacity-30"></div>
          
          <div className="text-center md:text-left">
            <p className="text-amber-100 text-sm mt-1">Celebrando uma trajetória de compromisso e resultados</p>
          </div>
        </div>

        {/* Bottom border with animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-700"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;