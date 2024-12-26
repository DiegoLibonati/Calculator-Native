import { StyleSheet, Text, View } from "react-native";

import { useCalculatorContext } from "../../contexts/CalculatorContext";
import { theme } from "../../theme/theme";

export const ScreenView = (): JSX.Element => {
  const { calculatorState } = useCalculatorContext();

  const { screen } = calculatorState;

  return (
    <View style={styles.container} testID="screen-root-view">
      <Text style={styles.text}>{screen}</Text>
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
    color: theme.colors.white,
  },
});
