import { Main } from "./src/components/Main/Main";
import { CalculatorProvider } from "./src/contexts/CalculatorContext";
import { UIProvider } from "./src/contexts/UIContext";
import { StatusBar } from "expo-status-bar";

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <CalculatorProvider>
        <UIProvider>
          <Main></Main>
        </UIProvider>
      </CalculatorProvider>
    </>
  );
}
