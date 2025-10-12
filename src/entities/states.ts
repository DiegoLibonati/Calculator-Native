import { Operation } from "@src/entities/app";

export type UiState = {
  isDarkModeEnabled: boolean;
};

export type CalculatorState = {
  firstValue: number | null;
  operation: Operation | null;
  screen: string;
  comma: boolean;
};
