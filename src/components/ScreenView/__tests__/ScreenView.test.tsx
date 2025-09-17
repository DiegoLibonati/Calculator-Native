import { render } from "@testing-library/react-native";

import { CalculatorState, GlobalTest } from "@src/entities/entities";

import { ScreenView } from "@src/components/ScreenView/ScreenView";

import {
  CalculatorProvider,
  useCalculatorContext,
} from "@src/contexts/CalculatorContext";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CalculatorProvider>
      <ScreenView></ScreenView>
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

jest.mock("../../../contexts/CalculatorContext", () => ({
  ...jest.requireActual("../../../contexts/CalculatorContext"),
  useCalculatorContext: jest.fn(),
}));

describe("ScreenView.tsx", () => {
  describe("General Tests.", () => {
    const INITIAL_CALCULATOR_STATE: CalculatorState = {
      firstValue: 10,
      operation: "+",
      screen: "20",
      comma: false,
    };

    beforeEach(() => {
      jest.clearAllMocks();

      (useCalculatorContext as jest.Mock).mockReturnValue({
        calculatorState: INITIAL_CALCULATOR_STATE,
      });
    });

    test("It must render the screen.", () => {
      const { gets } = renderComponent();

      const screen = gets?.getByText!(INITIAL_CALCULATOR_STATE.screen);

      expect(screen).toBeTruthy();
    });
  });
});
