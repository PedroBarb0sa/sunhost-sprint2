/**
 * CivicPointsCard - Componente separado em .jsx
 * Card reutilizável para exibir informações de Pontos Cívicos
 */
export default function CivicPointsCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div className={`${bg} rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
        </div>
        <Icon className={`w-12 h-12 ${color} opacity-20`} />
      </div>
    </div>
  );
}
