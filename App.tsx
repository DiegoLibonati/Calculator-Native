import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import { MainPage } from "@src/pages/MainPage/MainPage";

import { CalculatorProvider } from "@src/contexts/CalculatorContext";
import { UiProvider } from "@src/contexts/UiContext";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light"></StatusBar>
      <CalculatorProvider>
        <UiProvider>
          <MainPage></MainPage>
        </UiProvider>
      </CalculatorProvider>
    </Fragment>
  );
}
