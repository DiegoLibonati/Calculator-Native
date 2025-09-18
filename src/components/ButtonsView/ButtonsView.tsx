import { StyleSheet, View } from "react-native";

import { ButtonsRow } from "@src/components/ButtonsView/ButtonsRow/ButtonsRow";
import { Button } from "@src/components/ButtonsView/Button/Button";

import { useCalculatorContext } from "@src/contexts/CalculatorContext";
import { useUiContext } from "@src/contexts/UIContext";
import { theme } from "@src/theme/theme";

export const ButtonsView = () => {
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
      <ButtonsRow>
        <Button text="AC" onPressButton={resetInitialValues}></Button>
        <Button text="+/-" onPressButton={handleNumberConvert}></Button>
        <Button
          text="%"
          onPressButton={() => handleInputOperation("%")}
        ></Button>
        <Button
          text="/"
          onPressButton={() => handleInputOperation("/")}
        ></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="7" onPressButton={() => handleInputScreen("7")}></Button>
        <Button text="8" onPressButton={() => handleInputScreen("8")}></Button>
        <Button text="9" onPressButton={() => handleInputScreen("9")}></Button>
        <Button
          text="X"
          onPressButton={() => handleInputOperation("*")}
        ></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="4" onPressButton={() => handleInputScreen("4")}></Button>
        <Button text="5" onPressButton={() => handleInputScreen("5")}></Button>
        <Button text="6" onPressButton={() => handleInputScreen("6")}></Button>
        <Button
          text="-"
          onPressButton={() => handleInputOperation("-")}
        ></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="3" onPressButton={() => handleInputScreen("3")}></Button>
        <Button text="2" onPressButton={() => handleInputScreen("2")}></Button>
        <Button text="1" onPressButton={() => handleInputScreen("1")}></Button>
        <Button
          text="+"
          onPressButton={() => handleInputOperation("+")}
        ></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button
          text="0"
          onPressButton={() => handleInputScreen("0")}
          containerStyle={{ flex: 2.03 }}
        ></Button>
        <Button text="." onPressButton={() => handleInputScreen(".")}></Button>
        <Button
          text="="
          onPressButton={() => handleGetEqual()}
          containerStyle={{
            backgroundColor: uiState.isDarkModeEnabled
              ? theme.background.primaryDark
              : theme.background.primaryLight,
          }}
          textStyle={{ color: theme.colors.white }}
        ></Button>
      </ButtonsRow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
});
