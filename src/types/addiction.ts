export interface AddictionScenario {
  id: string;
  type: "drug" | "gambling";
  title: string;
  subtitle: string;
  description: string;
  age: string;
  background: string;
  severity: "low" | "medium" | "high";
  warning: string;
}

export type FilterType = "all" | "drug" | "gambling"; 