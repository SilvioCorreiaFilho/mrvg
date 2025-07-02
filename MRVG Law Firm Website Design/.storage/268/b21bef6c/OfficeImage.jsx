import React from 'react';

/**
 * OfficeImage Component
 * Creates a sophisticated law office visualization using CSS and HTML elements
 * with blue and gold color scheme to match MRVG's branding
 */
const OfficeImage = () => {
  return (
    <div className="w-full h-full relative">
      {/* Office Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Window View */}
        <div className="absolute top-5 left-5 right-5 h-1/3 bg-blue-200 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-blue-600 opacity-80"></div>
          {/* City Skyline */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2">
            <div className="absolute bottom-0 left-5 w-10 h-32 bg-gray-800 shadow-lg"></div>
            <div className="absolute bottom-0 left-20 w-16 h-48 bg-gray-900 shadow-lg"></div>
            <div className="absolute bottom-0 left-40 w-12 h-36 bg-gray-800 shadow-lg"></div>
            <div className="absolute bottom-0 left-56 w-20 h-64 bg-gray-900 shadow-lg"></div>
            <div className="absolute bottom-0 left-80 w-14 h-40 bg-gray-800 shadow-lg"></div>
            <div className="absolute bottom-0 right-10 w-16 h-56 bg-gray-900 shadow-lg"></div>
            <div className="absolute bottom-0 right-30 w-12 h-44 bg-gray-800 shadow-lg"></div>
            <div className="absolute bottom-0 right-48 w-18 h-60 bg-gray-900 shadow-lg"></div>
          </div>
          {/* Window Frame */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
            <div className="border-r border-gray-400 opacity-30"></div>
            <div className="border-r border-gray-400 opacity-30"></div>
          </div>
        </div>
        
        {/* Office Interior */}
        <div className="absolute top-[calc(33%+20px)] left-0 right-0 bottom-0 flex">
          {/* Left Side - Bookshelf */}
          <div className="w-1/4 h-full bg-[#2a323c] relative">
            {/* Bookshelves with law books */}
            <div className="absolute inset-2 grid grid-rows-5 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`shelf-${i}`} className="bg-[#1c2633] p-1 flex items-end">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div 
                      key={`book-${i}-${j}`}
                      className="h-[90%] w-full mx-[1px]"
                      style={{
                        backgroundColor: [
                          '#113366', '#223c59', '#0d294d', '#1e3f66', 
                          '#9a7d35', '#8a6f2f', '#776128', '#634f1d'
                        ][j % 8],
                      }}
                    ></div>
                  ))}
                  <div className="h-2 w-full absolute bottom-0 left-0 bg-[#3a4555]"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Center - Conference Table */}
          <div className="w-2/4 h-full relative flex items-center justify-center">
            {/* Conference Table */}
            <div className="w-4/5 h-1/3 relative">
              {/* Table Surface */}
              <div className="absolute inset-0 bg-[#3a2518] rounded-lg">
                <div className="absolute inset-2 bg-[#5c3c20] rounded-md opacity-80"></div>
                {/* Table Reflection */}
                <div className="absolute inset-6 bg-gradient-to-br from-[#8b5a2b] to-[#6b4423] opacity-30 rounded-md"></div>
              </div>
              
              {/* Chairs */}
              {Array.from({ length: 2 }).map((_, i) => (
                <div 
                  key={`chair-left-${i}`}
                  className="absolute w-12 h-16 bg-[#1e3f66] rounded-md top-[-20px] shadow-md"
                  style={{
                    left: `${i * 40 + 20}%`,
                    transform: 'translateY(-50%)',
                  }}
                >
                  <div className="absolute inset-1 top-6 bg-[#0d294d] rounded-sm"></div>
                </div>
              ))}
              
              {Array.from({ length: 2 }).map((_, i) => (
                <div 
                  key={`chair-right-${i}`}
                  className="absolute w-12 h-16 bg-[#1e3f66] rounded-md bottom-[-20px] shadow-md"
                  style={{
                    left: `${i * 40 + 20}%`,
                    transform: 'translateY(50%)',
                  }}
                >
                  <div className="absolute inset-1 top-6 bg-[#0d294d] rounded-sm"></div>
                </div>
              ))}
              
              {/* Documents on Table */}
              <div className="absolute top-[10%] left-[15%] w-16 h-12 bg-white shadow-sm transform rotate-6"></div>
              <div className="absolute top-[20%] left-[45%] w-18 h-14 bg-white shadow-sm transform -rotate-3"></div>
              <div className="absolute top-[15%] right-[20%] w-14 h-10 bg-white shadow-sm transform rotate-10"></div>
            </div>
            
            {/* MRVG Logo on Wall */}
            <div className="absolute top-5 w-1/2 h-16 flex items-center justify-center">
              <div className="text-[#9a7d35] font-bold text-xl">MRVG ADVOGADOS</div>
            </div>
          </div>
          
          {/* Right Side - Decorative Elements */}
          <div className="w-1/4 h-full relative bg-[#2a323c]">
            {/* Decorative Items */}
            <div className="absolute left-5 right-5 top-10 h-2/5 bg-[#1c2633] rounded-md shadow-lg">
              {/* Law Scale */}
              <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-4/5 h-4/5">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-[#9a7d35]"></div>
                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-[#9a7d35]"></div>
                <div className="absolute top-[10%] left-[10%] w-8 h-8 rounded-full bg-[#9a7d35]"></div>
                <div className="absolute top-[10%] right-[10%] w-8 h-8 rounded-full bg-[#9a7d35]"></div>
              </div>
            </div>
            
            {/* Certificate Frame */}
            <div className="absolute bottom-10 left-5 right-5 h-1/3 bg-[#9a7d35] p-1 rounded-sm">
              <div className="absolute inset-1 bg-white"></div>
              <div className="absolute inset-3 flex items-center justify-center">
                <div className="h-1/3 w-2/3 border-4 border-[#9a7d35] rounded-sm relative">
                  <div className="absolute inset-2 bg-[#f0f0f0]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-[#3a3a3c]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#303234] via-[#3e3e42] to-[#303234] opacity-30"></div>
        </div>
        
        {/* Subtle Lighting Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0d294d] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1/3 h-1/4 bg-white opacity-10 blur-xl rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default OfficeImage;
