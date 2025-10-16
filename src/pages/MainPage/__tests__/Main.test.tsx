import { render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { MainPage } from "@src/pages/MainPage/MainPage";

import { UiProvider } from "@src/contexts/UiContext";
import { CalculatorProvider } from "@src/contexts/CalculatorContext";

import { useUiContext } from "@src/hooks/useUiContext";

import { theme } from "@src/styles/theme";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CalculatorProvider>
      <UiProvider>
        <MainPage></MainPage>
      </UiProvider>
    </CalculatorProvider>
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

jest.mock("@src/hooks/useUiContext", () => ({
  useUiContext: jest.fn(),
}));

describe("Main.tsx", () => {
  describe("If dark mode is enabled", () => {
    const isDarkModeEnabled = true;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });
    });

    test("It must render the main container with the relevant styles.", () => {
      const { gets } = renderComponent();

      const main = gets?.getByTestId!("main-root");

      expect(main).toBeTruthy();
      expect(main).toHaveStyle({
        backgroundColor: theme.background.primaryDark,
      });
    });
  });

  describe("If dark mode is disabled", () => {
    const isDarkModeEnabled = false;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });
    });

    test("It must render the main container with the relevant styles.", () => {
      const { gets } = renderComponent();

      const main = gets?.getByTestId!("main-root");

      expect(main).toBeTruthy();
      expect(main).toHaveStyle({
        backgroundColor: theme.background.primaryLight,
      });
    });
  });

  describe("General Tests", () => {
    const isDarkModeEnabled = false;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });
    });

    test("It must render the main container, the switch view, the screen view, and the button view.", () => {
      const { gets } = renderComponent();

      const main = gets?.getByTestId!("main-root");
      const switchView = gets?.getByTestId!("switch-root-view");
      const screenView = gets?.getByTestId!("screen-root-view");
      const buttonsView = gets?.getByTestId!("buttons-root-view");

      expect(main).toBeTruthy();
      expect(switchView).toBeTruthy();
      expect(screenView).toBeTruthy();
      expect(buttonsView).toBeTruthy();
    });
  });
});
