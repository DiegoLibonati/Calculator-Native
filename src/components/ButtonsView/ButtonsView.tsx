import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonsRow } from "./ButtonsRow/ButtonsRow";
import { Button } from "./Button/Button";
import { theme } from "../../theme/theme";
import { UIContext } from "../../contexts/UIContext";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export const ButtonsView = (): JSX.Element => {
  const { isDarkMode } = useContext(UIContext)!;
  const {
    handleScreen,
    resetInitialValues,
    handleOperation,
    handleEqual,
    handleConvertNumber,
  } = useContext(CalculatorContext)!;
  return (
    <View style={styles.container}>
      <ButtonsRow>
        <Button text="AC" fn={resetInitialValues}></Button>
        <Button text="+/-" fn={() => handleConvertNumber()}></Button>
        <Button text="%" fn={() => handleOperation("%")}></Button>
        <Button text="/" fn={() => handleOperation("/")}></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="7" fn={() => handleScreen("7")}></Button>
        <Button text="8" fn={() => handleScreen("8")}></Button>
        <Button text="9" fn={() => handleScreen("9")}></Button>
        <Button text="X" fn={() => handleOperation("*")}></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="4" fn={() => handleScreen("4")}></Button>
        <Button text="5" fn={() => handleScreen("5")}></Button>
        <Button text="6" fn={() => handleScreen("6")}></Button>
        <Button text="-" fn={() => handleOperation("-")}></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button text="3" fn={() => handleScreen("3")}></Button>
        <Button text="2" fn={() => handleScreen("2")}></Button>
        <Button text="1" fn={() => handleScreen("1")}></Button>
        <Button text="+" fn={() => handleOperation("+")}></Button>
      </ButtonsRow>

      <ButtonsRow>
        <Button
          text="0"
          fn={() => handleScreen("0")}
          containerStyle={{ flex: 2.03 }}
        ></Button>
        <Button text="." fn={() => handleScreen(".")}></Button>
        <Button
          text="="
          fn={() => handleEqual()}
          containerStyle={{
            backgroundColor: isDarkMode
              ? theme.background.primaryDark
              : theme.background.primaryLight,
          }}
          buttonStyle={{ color: theme.colors.white }}
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
