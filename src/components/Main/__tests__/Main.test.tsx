import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { Main } from "../Main";

import { UiProvider, useUiContext } from "../../../contexts/UiContext";
import { CalculatorProvider } from "../../../contexts/CalculatorContext";
import { theme } from "../../../theme/theme";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CalculatorProvider>
      <UiProvider>
        <Main></Main>
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

jest.mock("../../../contexts/UiContext", () => ({
  ...jest.requireActual("../../../contexts/UiContext"),
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
