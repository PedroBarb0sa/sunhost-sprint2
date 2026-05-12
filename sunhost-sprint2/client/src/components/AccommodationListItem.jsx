import { Star, MapPin, Award } from "lucide-react";

/**
 * AccommodationListItem - Componente separado em .jsx
 * Exibe um item de acomodação em formato de lista
 */
export default function AccommodationListItem({ accommodation, onRemove }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow flex gap-4">
      {/* Imagem */}
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={accommodation.image}
          alt={accommodation.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{accommodation.title}</h3>
        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
          <MapPin className="w-4 h-4" />
          {accommodation.location}
        </div>
        <p className="text-gray-600 text-sm mt-2">{accommodation.description}</p>

        {/* Detalhes */}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-900">{accommodation.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-gray-700">
              {accommodation.civic_points} pontos
            </span>
          </div>
          <div className="text-lg font-bold text-orange-600">
            R$ {accommodation.price.toFixed(2)}/noite
          </div>
        </div>
      </div>

      {/* Botão Remover */}
      {onRemove && (
        <button
          onClick={() => onRemove(accommodation.id)}
          className="flex-shrink-0 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors"
        >
          Remover
        </button>
      )}
    </div>
  );
}
