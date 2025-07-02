import { useState, useEffect } from 'react';

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
        <nav className="hidden md:flex items-center space-x-10 uppercase text-sm tracking-wider">
          <a href="#sobre" className={`transition-colors font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`}>Sobre</a>
          <a href="#atuacao" className={`transition-colors font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`}>Áreas de Atuação</a>
          <a href="#equipe" className={`transition-colors font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`}>Equipe</a>
          <a href="#blog" className={`transition-colors font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`}>Blog</a>
          <a href="#contato" className={`border px-6 py-2 transition-colors font-light ${isScrolled ? 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white' : 'border-white text-white hover:bg-white hover:text-gray-800'}`}>Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Menu"
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-500' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
            <nav className="flex flex-col space-y-5 uppercase text-sm tracking-wider">
              <a href="#sobre" className={`py-2 font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`} onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#atuacao" className={`py-2 font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`} onClick={() => setIsMenuOpen(false)}>Áreas de Atuação</a>
              <a href="#equipe" className={`py-2 font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`} onClick={() => setIsMenuOpen(false)}>Equipe</a>
              <a href="#blog" className={`py-2 font-light ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'}`} onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contato" className={`py-2 border text-center w-full font-light ${isScrolled ? 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white' : 'border-white text-white hover:bg-white hover:text-gray-800'}`} onClick={() => setIsMenuOpen(false)}>Contato</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;