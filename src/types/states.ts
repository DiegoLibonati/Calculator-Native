import type { Operation } from "@/types/app";

export interface UiState {
  isDarkModeEnabled: boolean;
}

export interface CalculatorState {
  firstValue: number | null;
  operation: Operation | null;
  screen: string;
  comma: boolean;
}
