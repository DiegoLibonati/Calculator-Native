import { render } from "@testing-library/react-native";

import { CalculatorState, GlobalTest } from "../../../entities/entities";

import { ScreenView } from "../ScreenView";

import {
  CalculatorProvider,
  useCalculatorContext,
} from "../../../contexts/CalculatorContext";

type RenderComponent = {} & GlobalTest;

const INITIAL_CALCULATOR_STATE: CalculatorState = {
  firstValue: 10,
  operation: "+",
  screen: "20",
  comma: false,
};

jest.mock("../../../contexts/CalculatorContext", () => ({
  ...jest.requireActual("../../../contexts/CalculatorContext"),
  useCalculatorContext: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();

  (useCalculatorContext as jest.Mock).mockReturnValue({
    calculatorState: INITIAL_CALCULATOR_STATE,
  });
});

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

test("It must render the screen.", () => {
  const { gets } = renderComponent();

  const screen = gets?.getByText!(INITIAL_CALCULATOR_STATE.screen);

  expect(screen).toBeTruthy();
});
