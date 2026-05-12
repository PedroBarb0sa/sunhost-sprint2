import { useState, useEffect } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccommodationCard from "@/components/AccommodationCard";
import AddAccommodationModal from "@/components/modals/AddAccommodationModal";

/**
 * Accommodations Page - Listagem dinâmica com filtros e localStorage
 * Features: Busca, filtros, adição de acomodações, persistência
 */
export default function Accommodations() {
  const [accommodations, setAccommodations] = useState<any[]>([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [addModalOpen, setAddModalOpen] = useState(false);

  // Carregar acomodações do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("sunhost_accommodations");
    if (stored) {
      const data = JSON.parse(stored);
      setAccommodations(data);
      setFilteredAccommodations(data);
    } else {
      // Dados iniciais de exemplo
      const initialData = [
        {
          id: 1,
          title: "Apartamento Praia Central",
          location: "Praia Central, Florianópolis",
          price: 250,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
          civic_points: 50,
          description: "Lindo apartamento com vista para o mar",
        },
        {
          id: 2,
          title: "Casa na Lagoa",
          location: "Lagoa da Conceição",
          price: 180,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
          civic_points: 35,
          description: "Casa aconchegante perto da lagoa",
        },
        {
          id: 3,
          title: "Studio Beira-Mar",
          location: "Praia Mole",
          price: 320,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
          civic_points: 65,
          description: "Studio moderno com acesso direto à praia",
        },
      ];
      setAccommodations(initialData);
      setFilteredAccommodations(initialData);
      localStorage.setItem("sunhost_accommodations", JSON.stringify(initialData));
    }
  }, []);

  // Filtrar acomodações
  useEffect(() => {
    let filtered = accommodations;

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(
        (acc) =>
          acc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          acc.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro de preço
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter((acc) => acc.price >= min && acc.price <= max);
    }

    setFilteredAccommodations(filtered);
  }, [searchTerm, priceFilter, accommodations]);

  const handleAddAccommodation = (newAccommodation: any) => {
    const id = Math.max(...accommodations.map((a) => a.id), 0) + 1;
    const accommodation = {
      ...newAccommodation,
      id,
      rating: 5,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    };
    const updated = [...accommodations, accommodation];
    setAccommodations(updated);
    localStorage.setItem("sunhost_accommodations", JSON.stringify(updated));
    setAddModalOpen(false);
  };

  const handleRemoveAccommodation = (id: number) => {
    const updated = accommodations.filter((acc) => acc.id !== id);
    setAccommodations(updated);
    localStorage.setItem("sunhost_accommodations", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-16 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Acomodações</h1>
              <p className="text-gray-600 mt-1">
                {filteredAccommodations.length} acomodações disponíveis
              </p>
            </div>
            <Button
              onClick={() => setAddModalOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar Acomodação
            </Button>
          </div>

          {/* Filtros */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Filtro de Preço */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">Todos os Preços</option>
                <option value="0-150">Até R$ 150</option>
                <option value="150-250">R$ 150 - R$ 250</option>
                <option value="250-500">R$ 250 - R$ 500</option>
                <option value="500-10000">Acima de R$ 500</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Acomodações */}
      <div className="container mx-auto px-4 py-12">
        {filteredAccommodations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations.map((accommodation) => (
              <div key={accommodation.id} className="relative">
                <AccommodationCard {...accommodation} />
                <button
                  onClick={() => handleRemoveAccommodation(accommodation.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 hover:opacity-100 transition-opacity"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchTerm || priceFilter !== "all"
                ? "Nenhuma acomodação encontrada com esses filtros."
                : "Nenhuma acomodação cadastrada ainda."}
            </p>
            <Button
              onClick={() => setAddModalOpen(true)}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white"
            >
              Adicionar Primeira Acomodação
            </Button>
          </div>
        )}
      </div>

      {/* Modal de Adicionar Acomodação */}
      <AddAccommodationModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        onAdd={handleAddAccommodation}
      />
    </div>
  );
}
