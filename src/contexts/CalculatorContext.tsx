import { createContext, useContext, useState } from "react";

import {
  CalculatorContext as CalculatorContextT,
  CalculatorState,
  Comma,
  Number as NumberT,
  Operation,
} from "../entities/entities";

import { getIfLastCharIsAnOperation } from "../helpers/getIfLastCharIsAnOperation";

interface CalculatorProviderProps {
  children: React.ReactNode;
}

export const CalculatorContext = createContext<CalculatorContextT | null>(null);

const initialCalculatorState: CalculatorState = {
  firstValue: null,
  operation: null,
  screen: "0",
  comma: false,
};

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(
    initialCalculatorState
  );

  const handleInputScreen = (value: NumberT | Comma): void => {
    if (calculatorState.comma && value === ".") return;
    if (value === ".")
      setCalculatorState((state) => ({ ...state, comma: true }));

    if (
      (calculatorState.screen === "0" ||
        (calculatorState.firstValue && !calculatorState.operation)) &&
      !(value === ".")
    )
      return setCalculatorState((state) => ({
        ...state,
        screen: `${value}`,
        firstValue: null,
      }));

    const lastChar = calculatorState.screen[calculatorState.screen.length - 1];

    if (getIfLastCharIsAnOperation(lastChar))
      return setCalculatorState((state) => ({
        ...state,
        screen: `${state.screen} ${value}`,
      }));

    return setCalculatorState((state) => ({
      ...state,
      screen: `${state.screen}${value}`,
    }));
  };

  const resetInitialValues = (): void => {
    return setCalculatorState(initialCalculatorState);
  };

  const handleInputOperation = (value: Operation): void => {
    setCalculatorState((state) => ({ ...state, comma: false }));

    const lastChar = calculatorState.screen[calculatorState.screen.length - 1];

    if (
      calculatorState.firstValue &&
      calculatorState.operation &&
      !getIfLastCharIsAnOperation(lastChar)
    ) {
      handleGetEqual();

      return setCalculatorState((state) => ({
        ...state,
        screen: `${state.firstValue} ${value}`,
        operation: value,
      }));
    }

    if (calculatorState.operation)
      return setCalculatorState((state) => ({
        ...state,
        operation: value,
        screen: `${state.firstValue} ${value}`,
      }));

    return setCalculatorState((state) => ({
      ...state,
      firstValue: Number(state.screen),
      operation: value,
      screen: `${state.screen} ${value}`,
    }));
  };

  const handleNumberConvert = (): void => {
    if (calculatorState.firstValue && calculatorState.operation) return;

    if (Number(calculatorState.screen) > 0) {
      return setCalculatorState((state) => ({
        ...state,
        firstValue: -Number(state.screen),
        operation: null,
        screen: `-${state.screen}`,
      }));
    }

    return setCalculatorState((state) => ({
      ...state,
      firstValue: Math.abs(Number(state.screen)),
      operation: null,
      screen: `${Math.abs(Number(state.screen))}`,
    }));
  };

  const handleGetEqual = (): void => {
    const secondValue = Number(calculatorState.screen.split(" ").pop());

    let result = null;

    switch (calculatorState.operation) {
      case "+":
        result = calculatorState.firstValue! + secondValue;
        break;

      case "-":
        result = calculatorState.firstValue! - secondValue;
        break;

      case "*":
        result = calculatorState.firstValue! * secondValue;
        break;

      case "/":
        result = calculatorState.firstValue! / secondValue;
        break;

      case "%":
        result = (calculatorState.firstValue! * secondValue) / 100;
        break;

      default:
        return;
    }

    return setCalculatorState((state) => ({
      ...state,
      screen: String(result),
      operation: null,
      firstValue: result,
    }));
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculatorState: calculatorState,
        resetInitialValues: resetInitialValues,
        handleInputScreen: handleInputScreen,
        handleInputOperation: handleInputOperation,
        handleGetEqual: handleGetEqual,
        handleNumberConvert: handleNumberConvert,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = (): CalculatorContextT => {
  return useContext(CalculatorContext)!;
};
