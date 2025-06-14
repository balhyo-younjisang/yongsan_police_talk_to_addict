import { AddictionScenario } from "@/types/addiction";
import { getSeverityColor, getTypeColor, getTypeIcon } from "@/utils/styles";

interface ScenarioCardProps {
  scenario: AddictionScenario;
  isSelected: boolean;
  onClick: () => void;
}

export default function ScenarioCard({ scenario, isSelected, onClick }: ScenarioCardProps) {
  return (
    <div
      className={`bg-gray-800/30 backdrop-blur-sm border-2 rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
        isSelected
          ? "border-red-500 bg-gray-700/30 shadow-lg shadow-red-500/20"
          : "border-gray-700 hover:border-gray-600"
      }`}
      onClick={onClick}
    >
      {/* Type badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(scenario.type)} flex items-center gap-1`}>
          {getTypeIcon(scenario.type)}
          {scenario.type === "drug" ? "마약 중독" : "도박 중독"}
        </span>
        <span className={`text-xs font-semibold border px-2 py-1 rounded ${getSeverityColor(scenario.severity)}`}>
          {scenario.severity === "low" ? "경미" : scenario.severity === "medium" ? "중간" : "심각"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{scenario.subtitle}</p>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{scenario.description}</p>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-xs text-gray-500">
          <span className="font-semibold mr-2">연령:</span>
          <span className="text-gray-300">{scenario.age}</span>
        </div>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">중독 경로:</span>
          <p className="text-gray-300 mt-1">{scenario.background}</p>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-red-900/20 border border-red-500/30 rounded p-3">
        <p className="text-red-400 text-xs font-semibold">⚠️ 주의사항</p>
        <p className="text-gray-300 text-xs mt-1">{scenario.warning}</p>
      </div>
    </div>
  );
} 