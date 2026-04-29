import { useContext } from "react";

import type { UseCalculatorContext } from "@/types/hooks";

import { CalculatorContext } from "@/contexts/CalculatorContext/CalculatorContext";

export const useCalculatorContext = (): UseCalculatorContext => {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error("useCalculatorContext must be used within CalculatorProvider");
  return context;
};
