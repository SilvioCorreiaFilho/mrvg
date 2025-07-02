import React from 'react';

const AnniversaryLogo = () => {
  return (
    <div className="relative pt-3 pb-2 px-4">
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center z-10">
          {/* Anniversary Logo using the provided artwork */}
          <div className="relative mb-2">
            <img 
              src="/assets/images/anniversary_logo.png" 
              alt="MRVG 15 Anos" 
              className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-contain" 
              style={{transform: 'scale(1.3)'}} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryLogo;