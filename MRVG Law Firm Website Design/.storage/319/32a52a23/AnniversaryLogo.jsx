import React, { useEffect, useRef } from 'react';

const AnniversaryLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Subtle animation for logo on load
    if (logoRef.current) {
      logoRef.current.style.opacity = '0';
      logoRef.current.style.transform = 'translateY(20px) scale(1.2)';
      
      setTimeout(() => {
        logoRef.current.style.opacity = '1';
        logoRef.current.style.transform = 'translateY(0) scale(1.2)';
      }, 300);
    }
  }, []);
  
  return (
    <div className="relative pt-3 pb-2 px-4">
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center z-10">
          {/* Anniversary Logo using the provided artwork with enhanced styling */}
          <div className="relative mb-2">
            {/* Subtle gold halo effect behind the logo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-300/0 via-[#B0843B]/10 to-gray-300/0 rounded-full blur-xl"></div>
            
            <img 
              ref={logoRef}
              src="/assets/images/logo_15_sombra.png" 
              alt="MRVG 15 Anos" 
              className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-contain transition-all duration-700" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryLogo;