import { render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/entities";

import { ButtonsRow } from "@src/components/ButtonsView/ButtonsRow/ButtonsRow";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const text = "pepe";

  const { debug, getByText, getByRole, getByTestId } = render(
    <ButtonsRow>{text}</ButtonsRow>
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

describe("ButtonsRow.tsx", () => {
  describe("General Tests.", () => {
    test("It must render the component.", () => {
      const { gets } = renderComponent();

      const buttonsRow = gets?.getByTestId!("buttons-row-root");

      expect(buttonsRow).toBeTruthy();
    });
  });
});
