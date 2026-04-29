import { StyleSheet, View } from "react-native";

import type { JSX } from "react";

import ActionButtonsRow from "@/components/ActionButtonsRow/ActionButtonsRow";
import ActionButton from "@/components/ActionButton/ActionButton";

import { useUiContext } from "@/hooks/useUiContext";
import { useCalculatorContext } from "@/hooks/useCalculatorContext";

import { theme } from "@/styles/theme";

const ActionButtons = (): JSX.Element => {
  const { uiState } = useUiContext();
  const {
    handleInputScreen,
    resetInitialValues,
    handleInputOperation,
    handleGetEqual,
    handleNumberConvert,
  } = useCalculatorContext();

  const colors = uiState.isDarkModeEnabled ? theme.colors.dark : theme.colors.light;

  return (
    <View style={styles.container} testID="buttons-root-view">
      <ActionButtonsRow>
        <ActionButton text="AC" onPressButton={resetInitialValues}></ActionButton>
        <ActionButton text="+/-" onPressButton={handleNumberConvert}></ActionButton>
        <ActionButton
          text="%"
          onPressButton={() => {
            handleInputOperation("%");
          }}
        ></ActionButton>
        <ActionButton
          text="/"
          onPressButton={() => {
            handleInputOperation("/");
          }}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="7"
          onPressButton={() => {
            handleInputScreen("7");
          }}
        ></ActionButton>
        <ActionButton
          text="8"
          onPressButton={() => {
            handleInputScreen("8");
          }}
        ></ActionButton>
        <ActionButton
          text="9"
          onPressButton={() => {
            handleInputScreen("9");
          }}
        ></ActionButton>
        <ActionButton
          text="X"
          onPressButton={() => {
            handleInputOperation("*");
          }}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="4"
          onPressButton={() => {
            handleInputScreen("4");
          }}
        ></ActionButton>
        <ActionButton
          text="5"
          onPressButton={() => {
            handleInputScreen("5");
          }}
        ></ActionButton>
        <ActionButton
          text="6"
          onPressButton={() => {
            handleInputScreen("6");
          }}
        ></ActionButton>
        <ActionButton
          text="-"
          onPressButton={() => {
            handleInputOperation("-");
          }}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="3"
          onPressButton={() => {
            handleInputScreen("3");
          }}
        ></ActionButton>
        <ActionButton
          text="2"
          onPressButton={() => {
            handleInputScreen("2");
          }}
        ></ActionButton>
        <ActionButton
          text="1"
          onPressButton={() => {
            handleInputScreen("1");
          }}
        ></ActionButton>
        <ActionButton
          text="+"
          onPressButton={() => {
            handleInputOperation("+");
          }}
        ></ActionButton>
      </ActionButtonsRow>

      <ActionButtonsRow>
        <ActionButton
          text="0"
          onPressButton={() => {
            handleInputScreen("0");
          }}
          containerStyle={{ flex: 2.03 }}
        ></ActionButton>
        <ActionButton
          text="."
          onPressButton={() => {
            handleInputScreen(".");
          }}
        ></ActionButton>
        <ActionButton
          text="="
          onPressButton={() => {
            handleGetEqual();
          }}
          containerStyle={{
            backgroundColor: uiState.isDarkModeEnabled ? colors.quaternary : colors.primary,
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

export default ActionButtons;
