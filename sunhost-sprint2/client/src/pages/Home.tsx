import { useState } from "react";
import Header from "@/components/Header";
import AccommodationCard from "@/components/AccommodationCard";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, ArrowRight } from "lucide-react";

/**
 * Home Page - SunHost Floripa Sprint 1
 * Demonstra: Componentes React, Estados, Eventos, Interatividade
 * 
 * Funcionalidades:
 * - Header com navegação e modais de autenticação
 * - Hero section com proposta de valor
 * - Seção de Pontos Cívicos explicando o diferencial
 * - Grid de acomodações em destaque
 * - Seção "Seja Anfitrião"
 * - Footer com informações
 */
export default function Home() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<number | null>(null);

  // Mock data - Acomodações em destaque
  const accommodations = [
    {
      id: 1,
      title: "Apartamento Vista Mar - Lagoa da Conceição",
      location: "Lagoa da Conceição, Florianópolis",
      price: 280,
      rating: 4.8,
      reviews: 24,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029569430/JXg8MAWYjsxbGX7nGdvmXA/sunhost-accommodation-modern-WgWRxvnpy2UfxHFPHprnCC.webp",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Casa Aconchegante - Praia Mole",
      location: "Praia Mole, Florianópolis",
      price: 320,
      rating: 4.9,
      reviews: 31,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029569430/JXg8MAWYjsxbGX7nGdvmXA/sunhost-accommodation-modern-WgWRxvnpy2UfxHFPHprnCC.webp",
      badge: "Novo",
    },
    {
      id: 3,
      title: "Estúdio Moderno - Centro",
      location: "Centro, Florianópolis",
      price: 200,
      rating: 4.7,
      reviews: 18,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029569430/JXg8MAWYjsxbGX7nGdvmXA/sunhost-accommodation-modern-WgWRxvnpy2UfxHFPHprnCC.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029569430/JXg8MAWYjsxbGX7nGdvmXA/sunhost-hero-beach-m5H2HsZcBC7UfXQWQRqgoo.webp"
            alt="Florianópolis"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Poppins" }}>
              Hospedagem com Propósito
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Conectamos viajantes com anfitriões em Florianópolis. Cada estadia gera <span className="text-orange-600 font-semibold">Pontos Cívicos</span> que transformam turismo em impacto comunitário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-lg flex items-center gap-2">
                Buscar Acomodações
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 text-lg px-8 py-6 rounded-lg hover:bg-gray-50">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Civic Points Section */}
      <section id="civic-points" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins" }}>
              O que são Pontos Cívicos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nosso sistema inovador transforma cada hospedagem em uma contribuição para a comunidade local
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ganhe Pontos</h3>
              <p className="text-gray-600">
                A cada noite hospedado, você acumula pontos que podem ser trocados por benefícios locais
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ajude a Comunidade</h3>
              <p className="text-gray-600">
                Parte dos pontos é destinada a projetos sociais que beneficiam moradores locais
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Explore Florianópolis</h3>
              <p className="text-gray-600">
                Descubra experiências autênticas e conecte-se com a cultura local de forma genuína
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section id="accommodations" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins" }}>
              Acomodações em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Escolha entre nossas melhores opções em Florianópolis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((acc) => (
              <div
                key={acc.id}
                onClick={() => setSelectedAccommodation(acc.id)}
                className={`transition-all ${
                  selectedAccommodation === acc.id ? "ring-2 ring-orange-600" : ""
                }`}
              >
                <AccommodationCard {...acc} />
              </div>
            ))}
          </div>

          {selectedAccommodation && (
            <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Acomodação selecionada:</span> {accommodations.find(a => a.id === selectedAccommodation)?.title}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                (Este é um exemplo de estado React funcionando - clique em outro card para mudar)
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Poppins" }}>
              Seja um Anfitrião
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Compartilhe seu espaço e ganhe renda enquanto contribui para a comunidade local
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-lg">
              Cadastre Seu Imóvel
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins" }}>
                SunHost Floripa
              </h3>
              <p className="text-gray-400 text-sm">
                Hospedagem com propósito em Florianópolis
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pontos Cívicos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 SunHost Floripa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
