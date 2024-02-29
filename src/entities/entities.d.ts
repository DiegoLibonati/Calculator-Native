// Types
export type UiContextT = {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

export type CalculatorContextT = {
  values: CalculatorState;
  handleScreen: (value: string) => void;
  handleOperation: (value: string) => void;
  resetInitialValues: () => void;
  handleEqual: () => void;
  handleConvertNumber: () => void;
};

export type CalculatorState = {
  firstValue: number | null;
  operation: string | null;
  screen: string;
  comma: boolean;
};

export type ButtonsRowProps = {
  children: React.ReactNode;
};

// Interfaces

export interface UiProviderProps {
  children: React.ReactNode;
}

export interface CalculatorProviderProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  text: string;
  fn: () => void;
  containerStyle?: Record<string, string | number>;
  buttonStyle?: Record<string, string | number>;
}
