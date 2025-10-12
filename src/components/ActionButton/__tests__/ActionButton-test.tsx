import { render, fireEvent } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { ActionButton } from "@src/components/ActionButton/ActionButton";

import { UiProvider, useUiContext } from "@src/contexts/NameChange";

import { theme } from "@src/styles/theme";

type RenderComponent = {
  props: {
    text: string;
    containerStyle?: Record<string, string | number>;
    textStyle?: Record<string, string | number>;
    mockOnPressButton: jest.Mock;
  };
} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const props = {
    text: "text",
    containerStyle: { color: "red" },
    textStyle: { color: "blue" },
    mockOnPressButton: jest.fn(),
  };

  const { debug, getByText, getByRole, getByTestId } = render(
    <UiProvider>
      <ActionButton
        text={props.text}
        containerStyle={props.containerStyle}
        textStyle={props.textStyle}
        onPressButton={props.mockOnPressButton}
      ></ActionButton>
    </UiProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
    },
    props: props,
  };
};

jest.mock("@src/contexts/UiContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));

describe("ActionButton.tsx", () => {
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

    test("It must render the touchableOpacity with the relevant styles.", () => {
      const { props, gets } = renderComponent();

      const touchableOpacity = gets?.getByTestId!(
        `root-touchable-button-${props.text}`
      );

      expect(touchableOpacity).toBeTruthy();
      expect(touchableOpacity).toHaveStyle({
        backgroundColor: theme.background.secondaryDark,
        ...props.containerStyle,
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

    test("It must render the touchableOpacity with the relevant styles.", () => {
      const { props, gets } = renderComponent();

      const touchableOpacity = gets?.getByTestId!(
        `root-touchable-button-${props.text}`
      );

      expect(touchableOpacity).toBeTruthy();
      expect(touchableOpacity).toHaveStyle({
        backgroundColor: theme.background.secondaryLight,
        ...props.containerStyle,
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

    test("The 'onPressButton' function must be executed when it is pressed.", () => {
      const { props, gets } = renderComponent();

      const touchableOpacity = gets?.getByTestId!(
        `root-touchable-button-${props.text}`
      );

      fireEvent.press(touchableOpacity);

      expect(props.mockOnPressButton).toHaveBeenCalledTimes(1);
    });

    test("It must render the text element with your styles.", () => {
      const { props, gets } = renderComponent();

      const btnText = gets?.getByText!(props.text);

      expect(btnText).toBeTruthy();
      expect(btnText).toHaveStyle(props.textStyle);
    });
  });
});
