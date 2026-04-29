import { render, screen, fireEvent } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";

import NumraScreen from "@/screens/NumraScreen/NumraScreen";

import { UiProvider } from "@/contexts/UiContext/UiProvider";
import { CalculatorProvider } from "@/contexts/CalculatorContext/CalculatorProvider";

const renderScreen = (): RenderAPI =>
  render(
    <UiProvider>
      <CalculatorProvider>
        <NumraScreen />
      </CalculatorProvider>
    </UiProvider>
  );

describe("NumraScreen", () => {
  describe("rendering", () => {
    it("should render the main root container", () => {
      renderScreen();
      expect(screen.getByTestId("main-root")).toBeTruthy();
    });

    it("should render the Switch component", () => {
      renderScreen();
      expect(screen.getByTestId("switch-root-view")).toBeTruthy();
    });

    it("should render the Screen component with the initial value", () => {
      renderScreen();
      expect(screen.getByTestId("screen-root-view")).toBeTruthy();
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("0");
    });

    it("should render the ActionButtons component", () => {
      renderScreen();
      expect(screen.getByTestId("buttons-root-view")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should update the screen display when a digit button is pressed", () => {
      renderScreen();
      fireEvent.press(screen.getByTestId("root-touchable-button-7"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("7");
    });

    it("should reset the screen to '0' when AC is pressed", () => {
      renderScreen();
      fireEvent.press(screen.getByTestId("root-touchable-button-7"));
      fireEvent.press(screen.getByTestId("root-touchable-button-AC"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("0");
    });

    it("should toggle dark mode when the switch is toggled on", () => {
      renderScreen();
      expect(screen.getByRole("switch")).toHaveProp("value", false);
      fireEvent(screen.getByRole("switch"), "valueChange", true);
      expect(screen.getByRole("switch")).toHaveProp("value", true);
    });
  });
});
