import { FilterType } from "@/types/addiction";
import { getFilterButtonClass } from "@/utils/styles";
import { getScenarioCount } from "@/utils/filters";
import { scenarios } from "@/data/scenarios";

interface FilterButtonsProps {
  selectedType: FilterType;
  onTypeChange: (type: FilterType) => void;
}

export default function FilterButtons({ selectedType, onTypeChange }: FilterButtonsProps) {
  const filterOptions: { type: FilterType; label: string; icon: string }[] = [
    { type: "all", label: "전체 보기", icon: "👥" },
    { type: "drug", label: "마약 중독자", icon: "💊" },
    { type: "gambling", label: "도박 중독자", icon: "🎰" }
  ];

  return (
    <div className="flex flex-wrap justify-center mb-8 gap-4">
      {filterOptions.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={getFilterButtonClass(selectedType === type, type)}
        >
          <span>{icon}</span>
          {label} ({getScenarioCount(scenarios, type)})
        </button>
      ))}
    </div>
  );
} 