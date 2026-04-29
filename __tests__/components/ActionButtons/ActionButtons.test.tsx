import { render, screen, fireEvent } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";

import ActionButtons from "@/components/ActionButtons/ActionButtons";
import Screen from "@/components/Screen/Screen";

import { UiProvider } from "@/contexts/UiContext/UiProvider";
import { CalculatorProvider } from "@/contexts/CalculatorContext/CalculatorProvider";

const renderComponent = (): RenderAPI =>
  render(
    <UiProvider>
      <CalculatorProvider>
        <Screen />
        <ActionButtons />
      </CalculatorProvider>
    </UiProvider>
  );

describe("ActionButtons", () => {
  describe("rendering", () => {
    it("should render the root container", () => {
      renderComponent();
      expect(screen.getByTestId("buttons-root-view")).toBeTruthy();
    });

    it("should render all digit buttons", () => {
      renderComponent();
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((digit) => {
        expect(screen.getByTestId(`root-touchable-button-${digit}`)).toBeTruthy();
      });
    });

    it("should render all operation buttons", () => {
      renderComponent();
      ["+", "-", "X", "/", "%"].forEach((op) => {
        expect(screen.getByTestId(`root-touchable-button-${op}`)).toBeTruthy();
      });
    });

    it("should render the special action buttons", () => {
      renderComponent();
      expect(screen.getByTestId("root-touchable-button-AC")).toBeTruthy();
      expect(screen.getByTestId("root-touchable-button-+/-")).toBeTruthy();
      expect(screen.getByTestId("root-touchable-button-.")).toBeTruthy();
      expect(screen.getByTestId("root-touchable-button-=")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should update the screen when a digit button is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("5");
    });

    it("should reset the screen to '0' when AC is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-AC"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("0");
    });

    it("should show the operation symbol after pressing an operation button", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-+"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("5 +");
    });

    it("should compute the sum when = is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-+"));
      fireEvent.press(screen.getByTestId("root-touchable-button-3"));
      fireEvent.press(screen.getByTestId("root-touchable-button-="));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("8");
    });

    it("should negate a positive number when +/- is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-+/-"));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("-5");
    });

    it("should append a decimal point when . is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-."));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("5.");
    });

    it("should not append a second decimal point when . is pressed twice", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-."));
      fireEvent.press(screen.getByTestId("root-touchable-button-."));
      expect(screen.getByTestId("screen-root-view")).toHaveTextContent("5.");
    });
  });
});
