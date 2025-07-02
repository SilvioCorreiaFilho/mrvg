import { useState, useEffect } from 'react';
import { FaBuilding, FaGavel, FaUsers, FaNewspaper, FaEnvelope } from 'react-icons/fa';

// Luxury minimalist header component
const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  
  useEffect(() => {
    if (isScrolled) {
      setAnimationClass('header-transition-in');
    } else {
      setAnimationClass('header-transition-out');
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
              style={{height: '220px', width: 'auto', maxWidth: 'none', marginLeft: '20px'}} 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 uppercase text-xs tracking-widest">
          <a href="#sobre" className={`transition-all duration-300 ease-in-out font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`}>
            Sobre
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
          </a>
          <a href="#atuacao" className={`transition-all duration-300 ease-in-out font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`}>
            Áreas de Atuação
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
          </a>
          <a href="#equipe" className={`transition-all duration-300 ease-in-out font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`}>
            Equipe
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
          </a>
          <a href="#blog" className={`transition-all duration-300 ease-in-out font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`}>
            Blog
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
          </a>
          <a href="#contato" className={`border border-opacity-70 px-7 py-2 transition-all duration-300 ease-in-out font-light ${isScrolled ? 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:bg-opacity-10' : 'border-white text-white hover:bg-white hover:bg-opacity-10'}`}>
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Menu"
        >
          <svg className={`w-5 h-5 ${isScrolled ? 'text-gray-600' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
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
              <a href="#sobre" className={`py-1 font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                Sobre
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
              </a>
              <a href="#atuacao" className={`py-1 font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                Áreas de Atuação
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
              </a>
              <a href="#equipe" className={`py-1 font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                Equipe
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
              </a>
              <a href="#blog" className={`py-1 font-light relative group ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}></span>
              </a>
              <a href="#contato" className={`mt-4 py-2 border border-opacity-70 text-center w-full font-light transition-all duration-300 ${isScrolled ? 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:bg-opacity-10' : 'border-white text-white hover:bg-white hover:bg-opacity-10'}`} onClick={() => setIsMenuOpen(false)}>
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