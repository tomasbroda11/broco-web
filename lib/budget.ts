export type BudgetInfo = {
  qualifies: boolean;
  value: number;
};

export const BUDGET_MAP: Record<string, BudgetInfo> = {
  "USD 400 - 800": { qualifies: false, value: 400 },
  "USD 800 - 2.000": { qualifies: true, value: 800 },
  "USD 2.000 - 5.000": { qualifies: true, value: 2000 },
  "USD 5.000 - 10.000": { qualifies: true, value: 5000 },
  "USD +10.000": { qualifies: true, value: 10000 },
};

export function getBudgetInfo(label: string): BudgetInfo {
  return BUDGET_MAP[label] ?? { qualifies: false, value: 0 };
}
