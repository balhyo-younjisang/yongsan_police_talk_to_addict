import { AddictionScenario, FilterType } from "@/types/addiction";

export const filterScenarios = (
  scenarios: AddictionScenario[],
  selectedType: FilterType,
  searchTerm: string
): AddictionScenario[] => {
  return scenarios.filter(scenario => {
    const matchesType = selectedType === "all" || scenario.type === selectedType;
    const matchesSearch = searchTerm === "" || 
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });
};

export const getScenarioCount = (scenarios: AddictionScenario[], type: FilterType): number => {
  if (type === "all") return scenarios.length;
  return scenarios.filter(scenario => scenario.type === type).length;
}; 