import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export const ScreenView = (): JSX.Element => {
  const { values } = useContext(CalculatorContext)!;

  const { screen } = values;

  return (
    <View style={styles.container}>
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
