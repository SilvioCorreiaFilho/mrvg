import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Calculate dynamic styles based on scroll position - enhanced for more dramatic effect
  const heroHeight = Math.max(65, 100 - scrollPosition * 0.15); // More dramatic reduction (100vh to min 65vh)
  const backgroundOpacity = Math.max(0.3, 0.5 - scrollPosition * 0.002); // Increased transparency (from 0.6 to 0.5)
  const contentScale = Math.max(0.9, 1 - scrollPosition * 0.0005); // Subtle scale effect on content
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Enhanced dynamic styles for better visual impact
  const heroStyles = {
    height: `${heroHeight}vh`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url('/assets/images/hero-new.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 0.4s ease-out',
    filter: 'contrast(1.05)', // Slightly increased contrast
  };
  
  const contentStyles = {
    transform: `scale(${contentScale})`,
    transition: 'transform 0.4s ease-out',
  };
  
  return (
    <section 
      className="relative flex items-center justify-center"
      style={heroStyles}
    >
      {/* Subtle overlay for added contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-amber-600/10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-10 z-10 text-center md:text-left">
        {/* Content with scale animation */}
        <div className="max-w-2xl" style={contentStyles}>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Playfair_Display] font-bold text-white mb-4 drop-shadow-lg leading-tight">
            Tradição, excelência e <span className="text-[#d6ad6b] drop-shadow-md">resultados</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl drop-shadow-md">
            Soluções jurídicas personalizadas para casos de alta complexidade e repercussão nacional
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#contato"
              className="bg-white text-gray-800 hover:bg-gray-100 px-10 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-10 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Conheça o Escritório
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative curved shape at the bottom with shadow */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden drop-shadow-sm">
        <svg className="relative block w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 45.7C96 41.3 192 32.7 288 37.3C384 41.3 480 58.7 576 58.7C672 58.7 768 41.3 864 37.3C960 32.7 1056 41.3 1152 41.3C1248 41.3 1344 32.7 1392 28.3L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white">
            <animate attributeName="d" values="M0 50L48 45.7C96 41.3 192 32.7 288 37.3C384 41.3 480 58.7 576 58.7C672 58.7 768 41.3 864 37.3C960 32.7 1056 41.3 1152 41.3C1248 41.3 1344 32.7 1392 28.3L1440 25V100H0V50Z;M0 60L48 56.7C96 52.3 192 43.7 288 48.3C384 52.3 480 68.7 576 68.7C672 68.7 768 52.3 864 48.3C960 43.7 1056 52.3 1152 52.3C1248 52.3 1344 43.7 1392 39.3L1440 35V100H0V60Z;M0 50L48 45.7C96 41.3 192 32.7 288 37.3C384 41.3 480 58.7 576 58.7C672 58.7 768 41.3 864 37.3C960 32.7 1056 41.3 1152 41.3C1248 41.3 1344 32.7 1392 28.3L1440 25V100H0V50Z" dur="15s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;