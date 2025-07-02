import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-[Raleway] text-gray-800 bg-white min-h-screen">
      <Header isScrolled={isScrolled} />
      <AnniversaryBanner />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
      
      {/* Chat Bot Button */}
      <button
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all z-50"
        aria-label="Abrir assistente virtual"
      >
        {showChatBot ? (
          <i className="fas fa-times text-xl"></i>
        ) : (
          <i className="fas fa-comment text-xl"></i>
        )}
      </button>
      
      {/* Chat Bot Component */}
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
}

export default App;