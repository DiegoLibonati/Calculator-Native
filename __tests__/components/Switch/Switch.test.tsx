import { render, screen, fireEvent } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";

import Switch from "@/components/Switch/Switch";

import { UiProvider } from "@/contexts/UiContext/UiProvider";

const renderComponent = (): RenderAPI =>
  render(
    <UiProvider>
      <Switch />
    </UiProvider>
  );

describe("Switch", () => {
  describe("rendering", () => {
    it("should render the root container", () => {
      renderComponent();
      expect(screen.getByTestId("switch-root-view")).toBeTruthy();
    });

    it("should render the switch with dark mode disabled by default", () => {
      renderComponent();
      expect(screen.getByRole("switch")).toHaveProp("value", false);
    });
  });

  describe("behavior", () => {
    it("should enable dark mode when the switch is toggled on", () => {
      renderComponent();
      fireEvent(screen.getByRole("switch"), "valueChange", true);
      expect(screen.getByRole("switch")).toHaveProp("value", true);
    });

    it("should disable dark mode when the switch is toggled off after being enabled", () => {
      renderComponent();
      fireEvent(screen.getByRole("switch"), "valueChange", true);
      fireEvent(screen.getByRole("switch"), "valueChange", false);
      expect(screen.getByRole("switch")).toHaveProp("value", false);
    });
  });
});
