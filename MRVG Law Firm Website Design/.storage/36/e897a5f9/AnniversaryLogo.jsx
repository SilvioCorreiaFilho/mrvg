import React from 'react';

const AnniversaryLogo = () => {
  const laurelColor = '#d4af37'; // Gold color for anniversary
  
  return (
    <div className="relative pt-6 pb-2 px-4">
      {/* 15th Anniversary Logo with enhanced celebratory elements */}
      <div className="flex items-center justify-center">
        {/* Anniversary Circle */}
        <div className="absolute w-[250px] h-[250px] rounded-full border-2 border-dashed border-amber-300 opacity-50"></div>
        <div className="absolute w-[280px] h-[280px] rounded-full border border-amber-200 opacity-30"></div>
        
        <div className="relative flex flex-col items-center z-10">
          {/* Celebration Crown - top decoration */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-8">
            <div className="absolute left-0 w-full flex justify-center">
              <div className="w-1 h-8 bg-amber-300 mx-0.5 transform rotate-[-15deg]"></div>
              <div className="w-1 h-10 bg-amber-400 mx-0.5"></div>
              <div className="w-1 h-12 bg-amber-500 mx-0.5"></div>
              <div className="w-1 h-14 bg-amber-600 mx-0.5"></div>
              <div className="w-1 h-16 bg-amber-700 mx-0.5"></div>
              <div className="w-1 h-14 bg-amber-600 mx-0.5"></div>
              <div className="w-1 h-12 bg-amber-500 mx-0.5"></div>
              <div className="w-1 h-10 bg-amber-400 mx-0.5"></div>
              <div className="w-1 h-8 bg-amber-300 mx-0.5 transform rotate-[15deg]"></div>
            </div>
          </div>
          
          {/* Main Logo */}
          <div className="relative mb-2">
            <img 
              src="/assets/images/newLogo.svg" 
              alt="MRVG" 
              className="h-24 md:h-28 w-auto object-contain brightness-[1.4] filter" 
              style={{maxWidth: '220px'}}
            />
            
            {/* Anniversary Badge */}
            <div className="absolute -top-8 -right-10 bg-gradient-to-br from-amber-300 to-amber-600 text-white p-4 rounded-full shadow-lg transform rotate-12">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">15</div>
                </div>
                <svg viewBox="0 0 100 100" width="70" height="70">
                  <path 
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text fontSize="14">
                    <textPath xlinkHref="#circle" startOffset="0%">
                      ★ ANOS DE EXCELÊNCIA ★
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="w-full h-[3px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 mt-2"></div>
          
          {/* Anniversary Laurel - Left Side */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-20 h-40">
            <div className="relative w-full h-full">
              {/* Left laurel leaves */}
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`left-${i}`}
                  className="absolute left-0"
                  style={{
                    top: `${10 + i * 5}%`,
                    transform: `rotate(${140 + i * 5}deg)`,
                    transformOrigin: 'right center'
                  }}
                >
                  <div 
                    className="h-16 w-1.5"
                    style={{ 
                      background: `linear-gradient(to right, ${laurelColor}, transparent)`,
                      borderRadius: '100% 0 0 100%'
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Anniversary Laurel - Right Side */}
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-20 h-40">
            <div className="relative w-full h-full">
              {/* Right laurel leaves */}
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`right-${i}`}
                  className="absolute right-0"
                  style={{
                    top: `${10 + i * 5}%`,
                    transform: `rotate(${220 - i * 5}deg)`,
                    transformOrigin: 'left center'
                  }}
                >
                  <div 
                    className="h-16 w-1.5"
                    style={{
                      background: `linear-gradient(to left, ${laurelColor}, transparent)`,
                      borderRadius: '0 100% 100% 0'
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Commemorative Text */}
          <div className="text-sm text-center text-amber-200 mt-4 tracking-widest font-bold">
            EXCELÊNCIA JURÍDICA DESDE 2009
          </div>
          
          {/* Bottom stars */}
          <div className="flex justify-center mt-2 space-x-3">
            <span className="text-amber-400 text-lg">★</span>
            <span className="text-amber-500 text-lg">★</span>
            <span className="text-amber-400 text-lg">★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryLogo;