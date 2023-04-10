import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { UIContext } from "../../../contexts/UIContext";
import { theme } from "../../../theme/theme";

export const Button = ({ text, containerStyle, buttonStyle, fn }) => {
  const { isDarkMode } = useContext(UIContext);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? theme.background.secondaryDark
            : theme.background.secondaryLight,
          ...containerStyle,
        },
      ]}
      onPress={fn}
    >
      <Text
        style={[
          styles.buttonText,
          {
            ...buttonStyle,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
  buttonText: {
    fontSize: 30,
    color: theme.colors.white,
  },
});
