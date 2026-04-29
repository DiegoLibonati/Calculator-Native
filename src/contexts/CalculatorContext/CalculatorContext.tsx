import { createContext } from "react";

import type { CalculatorContext as CalculatorContextT } from "@/types/contexts";

export const CalculatorContext = createContext<CalculatorContextT | null>(null);
