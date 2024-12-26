import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import { Main } from "./src/components/Main/Main";

import { CalculatorProvider } from "./src/contexts/CalculatorContext";
import { UiProvider } from "./src/contexts/UiContext";

export default function App(): JSX.Element {
  return (
    <Fragment>
      <StatusBar style="light"></StatusBar>
      <CalculatorProvider>
        <UiProvider>
          <Main></Main>
        </UiProvider>
      </CalculatorProvider>
    </Fragment>
  );
}
