import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import type { RenderAPI } from "@testing-library/react-native";

import ActionButtonsRow from "@/components/ActionButtonsRow/ActionButtonsRow";

const renderComponent = (children?: React.ReactNode): RenderAPI =>
  render(<ActionButtonsRow>{children}</ActionButtonsRow>);

describe("ActionButtonsRow", () => {
  describe("rendering", () => {
    it("should render the root container", () => {
      renderComponent();
      expect(screen.getByTestId("buttons-row-root")).toBeTruthy();
    });

    it("should render without children", () => {
      renderComponent();
      expect(screen.getByTestId("buttons-row-root")).toBeTruthy();
    });

    it("should render a single child", () => {
      renderComponent(<Text>child text</Text>);
      expect(screen.getByText("child text")).toBeTruthy();
    });

    it("should render multiple children", () => {
      renderComponent(
        <>
          <Text>first</Text>
          <Text>second</Text>
          <Text>third</Text>
        </>
      );
      expect(screen.getByText("first")).toBeTruthy();
      expect(screen.getByText("second")).toBeTruthy();
      expect(screen.getByText("third")).toBeTruthy();
    });
  });
});
