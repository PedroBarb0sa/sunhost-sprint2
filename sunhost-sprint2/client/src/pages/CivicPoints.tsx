import { useState, useEffect } from "react";
import { Award, TrendingUp, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Civic Points Page - Dashboard de Pontos Cívicos
 * Features: Visualização de pontos, histórico, impacto comunitário
 */
export default function CivicPoints() {
  const [userPoints, setUserPoints] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  // Carregar dados do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("sunhost_user_points");
    if (stored) {
      setUserPoints(JSON.parse(stored));
    } else {
      setUserPoints(250);
      localStorage.setItem("sunhost_user_points", JSON.stringify(250));
    }

    const historyStored = localStorage.getItem("sunhost_points_history");
    if (historyStored) {
      setHistory(JSON.parse(historyStored));
    } else {
      const initialHistory = [
        {
          id: 1,
          date: "2026-05-10",
          action: "Hospedagem em Apartamento Praia Central",
          points: 50,
          type: "earned",
        },
        {
          id: 2,
          date: "2026-05-08",
          action: "Doação para Projeto Social",
          points: 100,
          type: "donated",
        },
        {
          id: 3,
          date: "2026-05-05",
          action: "Hospedagem em Casa na Lagoa",
          points: 35,
          type: "earned",
        },
        {
          id: 4,
          date: "2026-05-01",
          action: "Referência de Amigo",
          points: 65,
          type: "earned",
        },
      ];
      setHistory(initialHistory);
      localStorage.setItem("sunhost_points_history", JSON.stringify(initialHistory));
    }
  }, []);

  const stats = [
    {
      icon: Award,
      label: "Pontos Totais",
      value: userPoints,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: TrendingUp,
      label: "Pontos Este Mês",
      value: 150,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Heart,
      label: "Impacto Gerado",
      value: `R$ ${(userPoints * 0.5).toFixed(2)}`,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Users,
      label: "Comunidade Ajudada",
      value: "3 Projetos",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  const handleRedeemPoints = () => {
    if (userPoints >= 100) {
      const newPoints = userPoints - 100;
      setUserPoints(newPoints);
      localStorage.setItem("sunhost_user_points", JSON.stringify(newPoints));

      const newEntry = {
        id: history.length + 1,
        date: new Date().toISOString().split("T")[0],
        action: "Resgate de Pontos para Desconto",
        points: 100,
        type: "redeemed",
      };
      const updatedHistory = [newEntry, ...history];
      setHistory(updatedHistory);
      localStorage.setItem("sunhost_points_history", JSON.stringify(updatedHistory));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-16 z-30">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Meus Pontos Cívicos</h1>
          <p className="text-gray-600 mt-2">
            Acompanhe seu impacto na comunidade de Florianópolis
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bg} rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color} mt-2`}>{stat.value}</p>
                  </div>
                  <Icon className={`w-12 h-12 ${stat.color} opacity-20`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Redeem Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resgate de Pontos</h2>
          <p className="text-gray-600 mb-6">
            Você tem <span className="font-bold text-orange-600">{userPoints} pontos</span> disponíveis para resgate.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              💡 <strong>Dica:</strong> A cada 100 pontos resgatados, você ganha 10% de desconto em sua próxima hospedagem!
            </p>
            <Button
              onClick={handleRedeemPoints}
              disabled={userPoints < 100}
              className={`${
                userPoints >= 100
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white`}
            >
              Resgate 100 Pontos
            </Button>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Histórico de Pontos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Data</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ação</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tipo</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Pontos</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{entry.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{entry.action}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          entry.type === "earned"
                            ? "bg-green-100 text-green-800"
                            : entry.type === "donated"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {entry.type === "earned"
                          ? "Ganho"
                          : entry.type === "donated"
                          ? "Doado"
                          : "Resgatado"}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 text-right text-sm font-semibold ${
                        entry.type === "earned"
                          ? "text-green-600"
                          : entry.type === "donated"
                          ? "text-blue-600"
                          : "text-purple-600"
                      }`}
                    >
                      {entry.type === "earned" || entry.type === "donated"
                        ? `+${entry.points}`
                        : `-${entry.points}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
