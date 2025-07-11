import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Calculate dynamic styles based on scroll position
  const heroHeight = Math.max(70, 100 - scrollPosition * 0.1); // Reduce from 100vh to min 70vh
  const backgroundOpacity = Math.max(0.4, 0.6 - scrollPosition * 0.0015); // Reduce opacity (increase transparency)
  
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
  
  // Dynamic styles for smooth transitions
  const heroStyles = {
    height: `${heroHeight}vh`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url('/assets/images/hero-new.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'height 0.3s ease-out, background-image 0.3s ease-out',
  };
  
  return (
    <section 
      className="relative flex items-center justify-center"
      style={heroStyles}
    >
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        {/* Content starts directly - Anniversary logo is now in the header */}
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-[Playfair_Display] font-bold text-white mb-4">
            Tradição, excelência e resultados
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Soluções jurídicas personalizadas para casos de alta complexidade e repercussão nacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contato"
              className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg font-medium rounded transition-colors"
            >
              Conheça o Escritório
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 45.7C96 41.3 192 32.7 288 37.3C384 41.3 480 58.7 576 58.7C672 58.7 768 41.3 864 37.3C960 32.7 1056 41.3 1152 41.3C1248 41.3 1344 32.7 1392 28.3L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
