import { render } from "@testing-library/react-native";

import { CalculatorState } from "@src/entities/states";
import { GlobalTest } from "@src/entities/tests";

import { Screen } from "@src/components/Screen/Screen";

import {
  CalculatorProvider,
  useCalculatorContext,
} from "@src/contexts/CalculatorContext";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CalculatorProvider>
      <Screen></Screen>
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

jest.mock("@src/contexts/CalculatorContext", () => ({
  ...jest.requireActual("@src/contexts/CalculatorContext"),
  useCalculatorContext: jest.fn(),
}));

describe("Screen.tsx", () => {
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
