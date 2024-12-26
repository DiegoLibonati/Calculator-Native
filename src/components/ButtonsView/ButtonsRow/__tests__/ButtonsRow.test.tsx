import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../../entities/entities";

import { ButtonsRow } from "../ButtonsRow";

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

test("It must render the component.", () => {
  const { gets } = renderComponent();

  const buttonsRow = gets?.getByTestId!("buttons-row-root");

  expect(buttonsRow).toBeTruthy();
});
