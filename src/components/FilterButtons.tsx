import { FilterType } from "@/types/addiction";

interface FilterButtonsProps {
  selectedType: FilterType;
  onTypeChange: (type: FilterType) => void;
}

export default function FilterButtons({ selectedType, onTypeChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <button
        onClick={() => onTypeChange("all")}
        className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg transition-all duration-300 ${
          selectedType === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
        }`}
      >
        전체
      </button>
      <button
        onClick={() => onTypeChange("drug")}
        className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg transition-all duration-300 ${
          selectedType === "drug"
            ? "bg-red-600 text-white"
            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
        }`}
      >
        마약 중독
      </button>
      <button
        onClick={() => onTypeChange("gambling")}
        className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg transition-all duration-300 ${
          selectedType === "gambling"
            ? "bg-yellow-600 text-white"
            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
        }`}
      >
        도박 중독
      </button>
    </div>
  );
} 