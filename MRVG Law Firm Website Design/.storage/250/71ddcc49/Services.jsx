import LegalThemeImage from './LegalThemeImage';

const Services = () => {
  const services = [
    {
      title: "Direito Civil",
      icon: "fas fa-balance-scale",
      description: "Atuação especializada em disputas contratuais de alto impacto, responsabilidade civil, direito de família e sucessões, com foco em casos complexos e de grande valor.",
      items: [
        "Contratos empresariais complexos",
        "Responsabilidade civil",
        "Direito imobiliário",
        "Direito de família e sucessões"
      ]
    },
    {
      title: "Direito Penal",
      icon: "fas fa-gavel",
      description: "Defesa criminal estratégica em crimes econômicos, financeiros e tributários, com ênfase em casos de grande repercussão e atuação junto aos Tribunais Superiores.",
      items: [
        "Crimes econômicos e financeiros",
        "Crimes tributários",
        "Compliance criminal",
        "Habeas corpus e recursos criminais"
      ]
    },
    {
      title: "Direito Trabalhista",
      icon: "fas fa-briefcase",
      description: "Soluções jurídicas para relações de trabalho corporativas, negociações sindicais e defesa em processos trabalhistas, utilizando abordagens inovadoras e preventivas.",
      items: [
        "Contencioso trabalhista estratégico",
        "Negociações coletivas",
        "Due diligence trabalhista",
        "Compliance trabalhista"
      ]
    }
  ];

  return (
    <section id="atuacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Áreas de Atuação</span>
          <h2 className="text-4xl font-[Playfair_Display] font-bold text-gray-800 mt-2 mb-4">
            Especialistas em casos complexos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nossa equipe jurídica atua em áreas estratégicas do Direito, com foco em soluções personalizadas e resultados concretos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-[Playfair_Display] font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contato" className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium rounded transition-colors">
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;