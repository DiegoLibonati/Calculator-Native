import type { CalculatorState, UiState } from "@/types/states";
import type { Comma, Operation, Number as NumberT } from "@/types/app";

export interface UiContext {
  uiState: UiState;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

export interface CalculatorContext {
  calculatorState: CalculatorState;
  resetInitialValues: () => void;
  handleInputScreen: (value: NumberT | Comma) => void;
  handleInputOperation: (value: Operation) => void;
  handleGetEqual: () => void;
  handleNumberConvert: () => void;
}
