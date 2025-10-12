import { render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { ActionButtonsRow } from "@src/components/ActionButtonsRow/ActionButtonsRow";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const text = "pepe";

  const { debug, getByText, getByRole, getByTestId } = render(
    <ActionButtonsRow>{text}</ActionButtonsRow>
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

describe("ActionButtonsRow.tsx", () => {
  describe("General Tests.", () => {
    test("It must render the component.", () => {
      const { gets } = renderComponent();

      const buttonsRow = gets?.getByTestId!("buttons-row-root");

      expect(buttonsRow).toBeTruthy();
    });
  });
});
