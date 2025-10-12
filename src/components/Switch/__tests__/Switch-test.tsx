import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { Switch } from "@src/components/Switch/Switch";

import { UiProvider, useUiContext } from "@src/contexts/NameChange";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <UiProvider>
      <Switch></Switch>
    </UiProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
    },
  };
};

jest.mock("@src/contexts/UiContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));

describe("Switch.tsx", () => {
  describe("If dark mode is enabled", () => {
    const mockEnableDarkMode = jest.fn();
    const mockDisableDarkMode = jest.fn();

    const isDarkModeEnabled = true;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
        enableDarkMode: mockEnableDarkMode,
        disableDarkMode: mockDisableDarkMode,
      });
    });

    test("It should render the switch and execute the relevant functions when pressed.", () => {
      const { gets } = renderComponent();

      const switchComponent = gets?.getByRole!("switch");

      expect(switchComponent).toBeTruthy();
      expect(switchComponent.props.value).toBe(isDarkModeEnabled);

      fireEvent(switchComponent, "onValueChange");

      expect(mockDisableDarkMode).toHaveBeenCalledTimes(1);
    });
  });

  describe("If dark mode is disabled", () => {
    const mockEnableDarkMode = jest.fn();
    const mockDisableDarkMode = jest.fn();

    const isDarkModeEnabled = false;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
        enableDarkMode: mockEnableDarkMode,
        disableDarkMode: mockDisableDarkMode,
      });
    });

    test("It should render the switch and execute the relevant functions when pressed.", () => {
      const { gets } = renderComponent();

      const switchComponent = gets?.getByRole!("switch");

      expect(switchComponent).toBeTruthy();
      expect(switchComponent.props.value).toBe(isDarkModeEnabled);

      fireEvent(switchComponent, "onValueChange");

      expect(mockEnableDarkMode).toHaveBeenCalledTimes(1);
    });
  });
});
