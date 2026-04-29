import { StyleSheet, Text, View } from "react-native";

import type { JSX } from "react";

import { useCalculatorContext } from "@/hooks/useCalculatorContext";
import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const Screen = (): JSX.Element => {
  const { calculatorState } = useCalculatorContext();
  const { uiState } = useUiContext();

  const { screen } = calculatorState;

  return (
    <View style={styles.container} testID="screen-root-view">
      <Text
        style={[
          styles.text,
          { color: uiState.isDarkModeEnabled ? theme.colors.white : theme.colors.black },
        ]}
      >
        {screen}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 4,
  },
  text: {
    fontSize: 30,
  },
});

export default Screen;
