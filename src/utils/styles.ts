import { FilterType } from "@/types/addiction";

export const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case "low": return "border-yellow-500 text-yellow-400";
    case "medium": return "border-orange-500 text-orange-400";
    case "high": return "border-red-500 text-red-400";
    default: return "border-gray-500 text-gray-400";
  }
};

export const getTypeColor = (type: string): string => {
  return type === "drug" ? "bg-purple-600" : "bg-blue-600";
};

export const getTypeIcon = (type: string): string => {
  return type === "drug" ? "💊" : "🎰";
};

export const getFilterButtonClass = (isSelected: boolean, type: FilterType): string => {
  const baseClass = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm";
  
  if (isSelected) {
    const gradientClass = type === "all" 
      ? "bg-gradient-to-r from-red-600 to-red-700" 
      : type === "drug" 
        ? "bg-gradient-to-r from-purple-600 to-purple-700" 
        : "bg-gradient-to-r from-blue-600 to-blue-700";
    return `${baseClass} ${gradientClass} text-white shadow-lg scale-105`;
  }
  
  return `${baseClass} bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-600`;
}; 