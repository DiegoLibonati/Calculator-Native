import type { JSX } from "react";

import NumraScreen from "@/screens/NumraScreen/NumraScreen";

import { CalculatorProvider } from "@/contexts/CalculatorContext/CalculatorProvider";
import { UiProvider } from "@/contexts/UiContext/UiProvider";

export default function NumraRoute(): JSX.Element {
  return (
    <CalculatorProvider>
      <UiProvider>
        <NumraScreen></NumraScreen>
      </UiProvider>
    </CalculatorProvider>
  );
}
