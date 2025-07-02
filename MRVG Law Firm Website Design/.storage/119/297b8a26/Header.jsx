import { useState, useEffect } from 'react';

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
              src="/assets/images/logo_cinza.png" 
              alt="MRVG Advogados" 
              className="transition-all object-contain relative z-10" 
              style={{height: '180px', width: 'auto', maxWidth: 'none', marginLeft: '20px'}} 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className={`transition-colors ${isScrolled ? 'text-gray-100 hover:text-white' : 'text-gray-200 hover:text-white'}`}>Sobre</a>
          <a href="#atuacao" className={`transition-colors ${isScrolled ? 'text-gray-100 hover:text-white' : 'text-gray-200 hover:text-white'}`}>Áreas de Atuação</a>
          <a href="#equipe" className={`transition-colors ${isScrolled ? 'text-gray-100 hover:text-white' : 'text-gray-200 hover:text-white'}`}>Equipe</a>
          <a href="#blog" className={`transition-colors ${isScrolled ? 'text-gray-100 hover:text-white' : 'text-gray-200 hover:text-white'}`}>Blog</a>
          <a href="#contato" className={`border-2 px-4 py-2 rounded transition-colors ${isScrolled ? 'border-gray-300 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-700' : 'border-white text-white hover:bg-white hover:text-gray-800'}`}>Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Menu"
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-100' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
            <nav className="flex flex-col space-y-3">
              <a href="#sobre" className="text-gray-200 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#atuacao" className="text-gray-200 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Áreas de Atuação</a>
              <a href="#equipe" className="text-gray-200 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Equipe</a>
              <a href="#blog" className="text-gray-200 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contato" className="text-gray-200 hover:text-white py-2 border border-gray-300 text-center rounded hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;