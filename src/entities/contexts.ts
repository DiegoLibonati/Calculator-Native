import { CalculatorState, UiState } from "@src/entities/states";
import { Comma, Operation, Number as NumberT } from "@src/entities/app";

export type UiContext = {
  uiState: UiState;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
};

export type CalculatorContext = {
  calculatorState: CalculatorState;
  resetInitialValues: () => void;
  handleInputScreen: (value: NumberT | Comma) => void;
  handleInputOperation: (value: Operation) => void;
  handleGetEqual: () => void;
  handleNumberConvert: () => void;
};
