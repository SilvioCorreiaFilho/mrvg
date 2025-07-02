const Blog = () => {
  // Import blog data from utils
  const posts = [
    {
      id: 1,
      title: "A Reforma Tributária e seus Impactos para Empresas",
      excerpt: "Análise das principais mudanças trazidas pela reforma tributária e como as empresas devem se preparar para o novo cenário fiscal.",
      date: "18 Mai 2023",
      author: "Dr. Leonardo Ramos",
      category: "Direito Tributário",
      image: "/assets/images/legal-tax-law.jpg"
    },
    {
      id: 2,
      title: "Novas Decisões do STF sobre Mandados de Segurança",
      excerpt: "Comentários sobre recentes julgados do Supremo Tribunal Federal que modificam o entendimento sobre mandados de segurança.",
      date: "03 Abr 2023",
      author: "Dr. Luís Henrique Machado",
      category: "Jurisprudência",
      image: "/assets/images/supreme-court.jpg"
    },
    {
      id: 3,
      title: "Compliance Trabalhista: Prevenção de Passivos",
      excerpt: "Como implementar um programa de compliance trabalhista eficaz para reduzir riscos jurídicos e financeiros nas empresas.",
      date: "22 Mar 2023",
      author: "Dr. Marcos von Glehn",
      category: "Direito Trabalhista",
      image: "/assets/images/labor-law.jpg"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Conhecimento Jurídico</span>
          <h2 className="text-4xl font-[Playfair_Display] font-bold text-gray-800 mt-2 mb-4">
            Últimas Publicações
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Acompanhe análises, comentários e artigos jurídicos elaborados por nossa equipe sobre temas relevantes do cenário jurídico nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-xs bg-gray-100 text-gray-700 py-1 px-2 rounded">{post.category}</span>
                </div>
                <h3 className="text-xl font-[Playfair_Display] font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <a href="#" className="text-gray-800 hover:text-gray-600 text-sm font-medium flex items-center">
                    Leia mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 font-medium rounded transition-colors">
            Ver Todas as Publicações
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;