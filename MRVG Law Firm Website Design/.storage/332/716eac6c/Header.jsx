import { useState, useEffect } from 'react';
import { FaBuilding, FaGavel, FaUsers, FaNewspaper, FaEnvelope } from 'react-icons/fa';

// Luxury minimalist header component
const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [isIconsOnly, setIsIconsOnly] = useState(false);
  
  useEffect(() => {
    if (isScrolled) {
      setAnimationClass('header-transition-in');
      setIsIconsOnly(true);
    } else {
      setAnimationClass('header-transition-out');
      setIsIconsOnly(false);
    }
  }, [isScrolled]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${animationClass} ${isScrolled ? 'bg-gray-900/70 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src={isScrolled ? "/assets/images/logo_cinza.png" : "/assets/images/logo_white.png"} 
              alt="MRVG Advogados" 
              className="transition-all duration-500 object-contain relative z-10" 
              style={{height: isScrolled ? '120px' : '160px', width: 'auto', maxWidth: 'none', marginLeft: '0', transform: isScrolled ? 'scale(0.9)' : 'scale(1)'}} 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${isIconsOnly ? 'space-x-8' : 'space-x-12'} uppercase text-xs tracking-widest transition-all duration-500`}>
          <a href="#sobre" className={`transition-all duration-300 ease-in-out font-medium relative group flex items-center ${isIconsOnly ? 'justify-center w-10 h-10 rounded-full hover:bg-opacity-20' : 'gap-2'} ${isScrolled ? (isIconsOnly ? 'bg-gray-200/40 text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:text-gray-900') : 'bg-white/10 text-white hover:text-white hover:bg-white/20'}`} title="Sobre">
            <FaBuilding className={`transition-all duration-300 ${isIconsOnly ? 'text-base' : 'text-sm'}`} />
            {!isIconsOnly && (
              <>
                Sobre
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </>
            )}
          </a>
          <a href="#atuacao" className={`transition-all duration-300 ease-in-out font-medium relative group flex items-center ${isIconsOnly ? 'justify-center w-10 h-10 rounded-full hover:bg-opacity-20' : 'gap-2'} ${isScrolled ? (isIconsOnly ? 'bg-gray-200/40 text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:text-gray-900') : 'bg-white/10 text-white hover:text-white hover:bg-white/20'}`} title="Áreas de Atuação">
            <FaGavel className={`transition-all duration-300 ${isIconsOnly ? 'text-base' : 'text-sm'}`} />
            {!isIconsOnly && (
              <>
                Áreas de Atuação
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </>
            )}
          </a>
          <a href="#equipe" className={`transition-all duration-300 ease-in-out font-medium relative group flex items-center ${isIconsOnly ? 'justify-center w-10 h-10 rounded-full hover:bg-opacity-20' : 'gap-2'} ${isScrolled ? (isIconsOnly ? 'bg-gray-200/40 text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:text-gray-900') : 'bg-white/10 text-white hover:text-white hover:bg-white/20'}`} title="Equipe">
            <FaUsers className={`transition-all duration-300 ${isIconsOnly ? 'text-base' : 'text-sm'}`} />
            {!isIconsOnly && (
              <>
                Equipe
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </>
            )}
          </a>
          <a href="#blog" className={`transition-all duration-300 ease-in-out font-medium relative group flex items-center ${isIconsOnly ? 'justify-center w-10 h-10 rounded-full hover:bg-opacity-20' : 'gap-2'} ${isScrolled ? (isIconsOnly ? 'bg-gray-200/40 text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:text-gray-900') : 'bg-white/10 text-white hover:text-white hover:bg-white/20'}`} title="Blog">
            <FaNewspaper className={`transition-all duration-300 ${isIconsOnly ? 'text-base' : 'text-sm'}`} />
            {!isIconsOnly && (
              <>
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </>
            )}
          </a>
          <a href="#contato" className={`transition-all duration-300 ease-in-out font-medium flex items-center ${isIconsOnly ? 'justify-center w-10 h-10 rounded-full' : 'border border-opacity-70 px-7 py-2 gap-2'} ${isScrolled ? (isIconsOnly ? 'bg-gray-200/40 text-gray-800 hover:bg-gray-200 border border-gray-300' : 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:bg-opacity-10') : (isIconsOnly ? 'bg-white/20 text-white hover:bg-white/30 border border-white/60' : 'border-white text-white hover:bg-white hover:bg-opacity-10')}`} title="Contato">
            <FaEnvelope className={`transition-all duration-300 ${isIconsOnly ? 'text-base' : 'text-sm'}`} />
            {!isIconsOnly && 'Contato'}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Menu"
        >
          <svg className={`w-5 h-5 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-xl shadow-lg">
          <div className="container mx-auto px-6 py-6 mt-48"> {/* Added margin-top to accommodate larger logo */}
            <nav className="flex flex-col space-y-8 uppercase text-xs tracking-widest">
              <a href="#sobre" className={`py-1 font-medium relative group flex items-center gap-3 ${isScrolled ? 'text-gray-200 hover:text-white' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                <FaBuilding className="text-base" />
                Sobre
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'}`}></span>
              </a>
              <a href="#atuacao" className={`py-1 font-medium relative group flex items-center gap-3 ${isScrolled ? 'text-gray-200 hover:text-white' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                <FaGavel className="text-base" />
                Áreas de Atuação
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'}`}></span>
              </a>
              <a href="#equipe" className={`py-1 font-medium relative group flex items-center gap-3 ${isScrolled ? 'text-gray-200 hover:text-white' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                <FaUsers className="text-base" />
                Equipe
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'}`}></span>
              </a>
              <a href="#blog" className={`py-1 font-medium relative group flex items-center gap-3 ${isScrolled ? 'text-gray-200 hover:text-white' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                <FaNewspaper className="text-base" />
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'}`}></span>
              </a>
              <a href="#contato" className={`mt-4 py-2 border border-opacity-70 text-center w-full font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? 'border-gray-200 text-gray-200 hover:bg-gray-200 hover:bg-opacity-10' : 'border-white text-white hover:bg-white hover:bg-opacity-10'}`} onClick={() => setIsMenuOpen(false)}>
                <FaEnvelope className="text-base" />
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;