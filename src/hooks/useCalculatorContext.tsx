import { useContext } from "react";

import { UseCalculatorContext } from "@src/entities/hooks";

import { CalculatorContext } from "@src/contexts/CalculatorContext";

export const useCalculatorContext = (): UseCalculatorContext => {
  const context = useContext(CalculatorContext);
  if (!context)
    throw new Error(
      "useCalculatorContext must be used within CalculatorProvider"
    );
  return context;
};
