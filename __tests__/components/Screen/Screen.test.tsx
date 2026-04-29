import { render, screen } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";

import Screen from "@/components/Screen/Screen";

import { CalculatorProvider } from "@/contexts/CalculatorContext/CalculatorProvider";

const renderComponent = (): RenderAPI =>
  render(
    <CalculatorProvider>
      <Screen />
    </CalculatorProvider>
  );

describe("Screen", () => {
  describe("rendering", () => {
    it("should render the root container", () => {
      renderComponent();
      expect(screen.getByTestId("screen-root-view")).toBeTruthy();
    });

    it("should display the initial screen value of '0'", () => {
      renderComponent();
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("0");
    });
  });
});
