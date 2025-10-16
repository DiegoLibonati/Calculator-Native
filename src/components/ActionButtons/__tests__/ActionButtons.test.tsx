import { render, fireEvent } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { ActionButtons } from "@src/components/ActionButtons/ActionButtons";

import { UiProvider } from "@src/contexts/UiContext";
import { CalculatorProvider } from "@src/contexts/CalculatorContext";

import { useUiContext } from "@src/hooks/useUiContext";
import { useCalculatorContext } from "@src/hooks/useCalculatorContext";

import { theme } from "@src/styles/theme";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CalculatorProvider>
      <UiProvider>
        <ActionButtons></ActionButtons>
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

jest.mock("@src/hooks/useCalculatorContext", () => ({
  useCalculatorContext: jest.fn(),
}));

describe("ActionButtons.tsx", () => {
  describe("If dark mode is enabled", () => {
    const mockHandleInputScreen = jest.fn();
    const mockResetInitialValues = jest.fn();
    const mockHandleInputOperation = jest.fn();
    const mockHandleGetEqual = jest.fn();
    const mockHandleNumberConvert = jest.fn();

    const isDarkModeEnabled = true;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });

      (useCalculatorContext as jest.Mock).mockReturnValue({
        handleInputScreen: mockHandleInputScreen,
        resetInitialValues: mockResetInitialValues,
        handleInputOperation: mockHandleInputOperation,
        handleGetEqual: mockHandleGetEqual,
        handleNumberConvert: mockHandleNumberConvert,
      });
    });

    test("It must render the = element with the relevant styles.", () => {
      const buttonText = "=";

      const { gets } = renderComponent();

      const rootEqual = gets?.getByTestId!(
        `root-touchable-button-${buttonText}`
      );
      const equal = gets?.getByText!(buttonText);

      expect(rootEqual).toBeTruthy();
      expect(rootEqual).toHaveStyle({
        backgroundColor: theme.background.primaryDark,
      });
      expect(equal).toBeTruthy();
    });
  });

  describe("If dark mode is disabled", () => {
    const mockHandleInputScreen = jest.fn();
    const mockResetInitialValues = jest.fn();
    const mockHandleInputOperation = jest.fn();
    const mockHandleGetEqual = jest.fn();
    const mockHandleNumberConvert = jest.fn();

    const isDarkModeEnabled = false;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });

      (useCalculatorContext as jest.Mock).mockReturnValue({
        handleInputScreen: mockHandleInputScreen,
        resetInitialValues: mockResetInitialValues,
        handleInputOperation: mockHandleInputOperation,
        handleGetEqual: mockHandleGetEqual,
        handleNumberConvert: mockHandleNumberConvert,
      });
    });

    test("It must render the = element with the relevant styles.", () => {
      const buttonText = "=";

      const { gets } = renderComponent();

      const rootEqual = gets?.getByTestId!(
        `root-touchable-button-${buttonText}`
      );
      const equal = gets?.getByText!(buttonText);

      expect(rootEqual).toBeTruthy();
      expect(rootEqual).toHaveStyle({
        backgroundColor: theme.background.primaryLight,
      });
      expect(equal).toBeTruthy();
    });
  });

  describe("General Tests", () => {
    const mockHandleInputScreen = jest.fn();
    const mockResetInitialValues = jest.fn();
    const mockHandleInputOperation = jest.fn();
    const mockHandleGetEqual = jest.fn();
    const mockHandleNumberConvert = jest.fn();

    const isDarkModeEnabled = false;

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: {
          isDarkModeEnabled: isDarkModeEnabled,
        },
      });

      (useCalculatorContext as jest.Mock).mockReturnValue({
        handleInputScreen: mockHandleInputScreen,
        resetInitialValues: mockResetInitialValues,
        handleInputOperation: mockHandleInputOperation,
        handleGetEqual: mockHandleGetEqual,
        handleNumberConvert: mockHandleNumberConvert,
      });
    });

    test("It should render the AC element and execute the relevant functions when pressed.", () => {
      const buttonText = "AC";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockResetInitialValues).toHaveBeenCalledTimes(1);
    });

    test("It should render the +/- element and execute the relevant functions when pressed.", () => {
      const buttonText = "+/-";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleNumberConvert).toHaveBeenCalledTimes(1);
    });

    test("It should render the % element and execute the relevant functions when pressed.", () => {
      const buttonText = "%";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputOperation).toHaveBeenCalledTimes(1);
      expect(mockHandleInputOperation).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the / element and execute the relevant functions when pressed.", () => {
      const buttonText = "/";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputOperation).toHaveBeenCalledTimes(1);
      expect(mockHandleInputOperation).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 7 element and execute the relevant functions when pressed.", () => {
      const buttonText = "7";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 8 element and execute the relevant functions when pressed.", () => {
      const buttonText = "8";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 9 element and execute the relevant functions when pressed.", () => {
      const buttonText = "9";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the * element and execute the relevant functions when pressed.", () => {
      const buttonText = "X";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputOperation).toHaveBeenCalledTimes(1);
      expect(mockHandleInputOperation).toHaveBeenCalledWith("*");
    });

    test("It should render the 4 element and execute the relevant functions when pressed.", () => {
      const buttonText = "4";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 5 element and execute the relevant functions when pressed.", () => {
      const buttonText = "5";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 6 element and execute the relevant functions when pressed.", () => {
      const buttonText = "6";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the - element and execute the relevant functions when pressed.", () => {
      const buttonText = "-";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputOperation).toHaveBeenCalledTimes(1);
      expect(mockHandleInputOperation).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 3 element and execute the relevant functions when pressed.", () => {
      const buttonText = "3";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 2 element and execute the relevant functions when pressed.", () => {
      const buttonText = "2";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 1 element and execute the relevant functions when pressed.", () => {
      const buttonText = "1";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the + element and execute the relevant functions when pressed.", () => {
      const buttonText = "+";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputOperation).toHaveBeenCalledTimes(1);
      expect(mockHandleInputOperation).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the 0 element and execute the relevant functions when pressed.", () => {
      const buttonText = "0";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the . element and execute the relevant functions when pressed.", () => {
      const buttonText = ".";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleInputScreen).toHaveBeenCalledTimes(1);
      expect(mockHandleInputScreen).toHaveBeenCalledWith(buttonText);
    });

    test("It should render the = element and execute the relevant functions when pressed.", () => {
      const buttonText = "=";

      const { gets } = renderComponent();

      const element = gets?.getByTestId!(`root-touchable-button-${buttonText}`);

      expect(element).toBeTruthy();

      fireEvent.press(element);

      expect(mockHandleGetEqual).toHaveBeenCalledTimes(1);
    });
  });
});
