import { render, screen, fireEvent } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";
import type { ActionButtonProps } from "@/types/props";

import ActionButton from "@/components/ActionButton/ActionButton";

import { UiProvider } from "@/contexts/UiContext/UiProvider";

const mockOnPressButton = jest.fn();

const renderComponent = (props: Partial<ActionButtonProps> = {}): RenderAPI => {
  const defaultProps: ActionButtonProps = {
    text: "5",
    onPressButton: mockOnPressButton,
    ...props,
  };
  return render(
    <UiProvider>
      <ActionButton {...defaultProps} />
    </UiProvider>
  );
};

describe("ActionButton", () => {
  describe("rendering", () => {
    it("should render the button text", () => {
      renderComponent();
      expect(screen.getByText("5")).toBeTruthy();
    });

    it("should render with a custom text", () => {
      renderComponent({ text: "AC" });
      expect(screen.getByText("AC")).toBeTruthy();
    });

    it("should render with a testID derived from the text prop", () => {
      renderComponent({ text: "+" });
      expect(screen.getByTestId("root-touchable-button-+")).toBeTruthy();
    });

    it("should render with containerStyle prop without crashing", () => {
      renderComponent({ containerStyle: { flex: 2 } });
      expect(screen.getByText("5")).toBeTruthy();
    });

    it("should render with textStyle prop without crashing", () => {
      renderComponent({ textStyle: { color: "#ff0000" } });
      expect(screen.getByText("5")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should call onPressButton when pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      expect(mockOnPressButton).toHaveBeenCalledTimes(1);
    });

    it("should call onPressButton each time the button is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      fireEvent.press(screen.getByTestId("root-touchable-button-5"));
      expect(mockOnPressButton).toHaveBeenCalledTimes(2);
    });
  });
});
