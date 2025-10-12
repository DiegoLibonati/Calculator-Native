import { StyleSheet, View } from "react-native";

import { ActionButtonsRow } from "@src/components/ActionButtonsRow/ActionButtonsRow";
import { ActionButton } from "@src/components/ActionButton/ActionButton";

import { useCalculatorContext } from "@src/contexts/CalculatorContext";
import { useUiContext } from "@src/contexts/NameChange";

import { theme } from "@src/styles/theme";

export const ActionButtons = () => {
  const { uiState } = useUiContext();
  const {
    handleInputScreen,
    resetInitialValues,
    handleInputOperation,
    handleGetEqual,
    handleNumberConvert,
  } = useCalculatorContext();

  return (
    <View style={styles.container} testID="buttons-root-view">
      <ActionButtonsRow>
        <ActionButton
          text="AC"
          onPressButton={resetInitialValues}
        ></ActionButton>
        <ActionButton
          text="+/-"
          onPressButton={handleNumberConvert}
        ></ActionButton>
        <ActionButton
          text="%"
          onPressButton={() => handleInputOperation("%")}
        ></ActionButton>
        <ActionButton
          text="/"
          onPressButton={() => handleInputOperation("/")}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="7"
          onPressButton={() => handleInputScreen("7")}
        ></ActionButton>
        <ActionButton
          text="8"
          onPressButton={() => handleInputScreen("8")}
        ></ActionButton>
        <ActionButton
          text="9"
          onPressButton={() => handleInputScreen("9")}
        ></ActionButton>
        <ActionButton
          text="X"
          onPressButton={() => handleInputOperation("*")}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="4"
          onPressButton={() => handleInputScreen("4")}
        ></ActionButton>
        <ActionButton
          text="5"
          onPressButton={() => handleInputScreen("5")}
        ></ActionButton>
        <ActionButton
          text="6"
          onPressButton={() => handleInputScreen("6")}
        ></ActionButton>
        <ActionButton
          text="-"
          onPressButton={() => handleInputOperation("-")}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="3"
          onPressButton={() => handleInputScreen("3")}
        ></ActionButton>
        <ActionButton
          text="2"
          onPressButton={() => handleInputScreen("2")}
        ></ActionButton>
        <ActionButton
          text="1"
          onPressButton={() => handleInputScreen("1")}
        ></ActionButton>
        <ActionButton
          text="+"
          onPressButton={() => handleInputOperation("+")}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="0"
          onPressButton={() => handleInputScreen("0")}
          containerStyle={{ flex: 2.03 }}
        ></ActionButton>
        <ActionButton
          text="."
          onPressButton={() => handleInputScreen(".")}
        ></ActionButton>
        <ActionButton
          text="="
          onPressButton={() => handleGetEqual()}
          containerStyle={{
            backgroundColor: uiState.isDarkModeEnabled
              ? theme.background.primaryDark
              : theme.background.primaryLight,
          }}
          textStyle={{ color: theme.colors.white }}
        ></ActionButton>
      </ActionButtonsRow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
});
