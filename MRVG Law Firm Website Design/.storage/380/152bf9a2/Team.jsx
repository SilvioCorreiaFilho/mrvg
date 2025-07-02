import React from 'react';

const Team = () => {
  const partners = [
    {
      id: 1,
      name: "Marcos von Glehn Herkenhoff",
      position: "Sócio",
      image: "/assets/images/team/marcos.jpeg",
      specialty: "Direito Civil",
      email: "marcos@mrvg.adv.br",
      phone: "+55 (61) 3039-3117",
      address: "SHIS QI 15, conjunto 04, casa 17 Lago Sul, Brasília-DF, CEP 71635-240",
      website: "www.mrvg.adv.br"
    },
    {
      id: 2,
      name: "Leonardo Ramos Gonçalves",
      position: "Sócio",
      image: "/assets/images/team/leonardo.jpeg",
      specialty: "Direito Trabalhista",
      email: "leonardo@mrvg.adv.br",
      phone: "+55 (61) 3039-3117",
      address: "SHIS QI 15, conjunto 04, casa 17 Lago Sul, Brasília-DF, CEP 71635-240",
      website: "www.mrvg.adv.br"
    },
    {
      id: 3,
      name: "Luís Henrique A. S. Machado",
      position: "Sócio",
      image: "/assets/images/team/Luis.jpeg",
      specialty: "Direito Penal",
      email: "luis@mrvg.adv.br",
      phone: "+55 (61) 3039-3117",
      address: "SHIS QI 15, conjunto 04, casa 17 Lago Sul, Brasília-DF, CEP 71635-240",
      website: "www.mrvg.adv.br"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
          <p className="mt-5 text-xl text-gray-600">
            Conheça os sócios do escritório MRVG Advogados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-102">
              <div className="h-72 overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 15%',
                    filter: 'contrast(1.05) brightness(1.02)',
                    maxHeight: '100%'
                  }}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{partner.name}</h3>
                <p className="text-gray-600 text-base mb-1">{partner.position}</p>
                <p className="text-gray-600 text-sm italic mb-3">{partner.specialty}</p>
                
                <div className="space-y-1 flex flex-col items-center justify-center">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-gray-600 mr-2"></i>
                    <p className="text-gray-700 text-sm">{partner.email}</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-globe text-gray-600 mr-2"></i>
                    <p className="text-gray-700 text-sm">{partner.website}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <a href={`mailto:${partner.email}`} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm">
                    <i className="fas fa-envelope mr-2"></i>Contato
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;