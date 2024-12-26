import { DebugFunction } from "@testing-library/react-native";
import {
  GetAllByQuery,
  GetByQuery,
  QueryByQuery,
} from "@testing-library/react-native/build/queries/make-queries";
import {
  TextMatch,
  TextMatchOptions,
} from "@testing-library/react-native/build/matches";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import {
  ByRoleMatcher,
  ByRoleOptions,
} from "@testing-library/react-native/build/queries/role";

// Types

export type Number = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type Comma = ".";
export type Operation = "+" | "-" | "*" | "/" | "%";

export type UiState = {
  isDarkModeEnabled: boolean;
};

export type UiContext = {
  uiState: UiState;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
};

export type CalculatorState = {
  firstValue: number | null;
  operation: Operation | null;
  screen: string;
  comma: boolean;
};

export type CalculatorContext = {
  calculatorState: CalculatorState;
  resetInitialValues: () => void;
  handleInputScreen: (value: Number | Comma) => void;
  handleInputOperation: (value: Operation) => void;
  handleGetEqual: () => void;
  handleNumberConvert: () => void;
};

// Interfaces

export interface GeneralProps {
  children?: React.ReactNode;
  className?: string;
}

// Tests

export type GlobalTest = {
  debug: DebugFunction;
  gets?: {
    getByText?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getByRole?: GetByQuery<ByRoleMatcher, ByRoleOptions>;
    getByTestId?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getAllByTestId?: GetAllByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
  querys?: {
    queryByText?: QueryByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
};
