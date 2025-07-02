import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/office-img.jpg" 
                  alt="Escritório MRVG Advogados" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  style={{
                    filter: 'contrast(1.1) saturate(1.05)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-amber-500/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-xl rounded-lg hidden md:block">
                <p className="text-gray-800 font-[Playfair_Display] text-lg font-medium italic">
                  "Transformamos desafios jurídicos em vitórias para nossos clientes"
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Quem Somos</span>
            <h2 className="text-4xl font-[Playfair_Display] font-bold text-gray-800 mt-2 mb-6">
              Excelência jurídica com foco em resultados
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Localizado no coração de Brasília/DF, no prestigiado Lago Sul, o <strong>Machado Ramos & Von Glehn Advogados</strong> é sua referência estratégica junto aos Tribunais Superiores. Nossa posição privilegiada, próxima ao STF, STJ e demais cortes superiores, nos permite oferecer uma atuação ágil e decisiva em casos de alta complexidade.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Trabalhamos com um modelo de atendimento exclusivo, onde cada cliente recebe atenção personalizada dos sócios, garantindo o mais alto padrão de serviço jurídico. Nossa equipe é formada por profissionais com sólida formação acadêmica e vasta experiência prática.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Expertise</h3>
                  <p className="text-sm text-gray-600">Profunda experiência em casos de alta complexidade</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Agilidade</h3>
                  <p className="text-sm text-gray-600">Respostas rápidas e estratégias eficientes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Atendimento</h3>
                  <p className="text-sm text-gray-600">Relacionamento próximo e personalizado</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Inovação</h3>
                  <p className="text-sm text-gray-600">Tecnologia avançada aplicada ao direito</p>
                </div>
              </div>
            </div>
            
            <a href="#contato" className="inline-block bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded transition-colors font-medium">
              Converse com nossos advogados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;