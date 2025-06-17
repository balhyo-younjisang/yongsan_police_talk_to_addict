import { AddictionScenario } from "@/types/addiction";

interface ScenarioCardProps {
  scenario: AddictionScenario;
  isSelected: boolean;
  onClick: () => void;
}

export default function ScenarioCard({ scenario, isSelected, onClick }: ScenarioCardProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-500 bg-red-500/10";
      case "medium":
        return "border-yellow-500 bg-yellow-500/10";
      case "low":
        return "border-green-500 bg-green-500/10";
      default:
        return "border-gray-500 bg-gray-500/10";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "drug":
        return "bg-red-600";
      case "gambling":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected
          ? "ring-2 ring-blue-500 bg-blue-500/10"
          : "hover:bg-gray-800/50"
      } bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 sm:p-6`}
    >
      {/* Type badge */}
      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-1 text-xs sm:text-sm text-white rounded-full ${getTypeColor(scenario.type)}`}>
        {scenario.type === "drug" ? "마약" : "도박"}
      </div>

      {/* Severity indicator */}
      <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 ${getSeverityColor(scenario.severity)}`}></div>

      {/* Content */}
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
          {scenario.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3 font-medium">
          {scenario.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
          {scenario.description}
        </p>

        {/* Details */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center text-xs sm:text-sm text-gray-400">
            <span className="font-medium mr-2">나이:</span>
            <span>{scenario.age}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-400">
            <span className="font-medium mr-2">중독 경로:</span>
            <span>{scenario.background}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-400">
            <span className="font-medium mr-2">위험도:</span>
            <span className={`px-2 py-1 rounded text-xs ${
              scenario.severity === "high" ? "bg-red-500/20 text-red-300" :
              scenario.severity === "medium" ? "bg-yellow-500/20 text-yellow-300" :
              "bg-green-500/20 text-green-300"
            }`}>
              {scenario.severity === "high" ? "높음" :
               scenario.severity === "medium" ? "보통" : "낮음"}
            </span>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-red-500/10 border border-red-500/30 rounded text-xs sm:text-sm text-red-300">
          ⚠️ {scenario.warning}
        </div>
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
} 