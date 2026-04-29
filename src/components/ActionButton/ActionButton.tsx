import { StyleSheet, Text, TouchableOpacity } from "react-native";

import type { JSX } from "react";
import type { ActionButtonProps } from "@/types/props";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const ActionButton = ({
  text,
  containerStyle,
  textStyle,
  onPressButton,
}: ActionButtonProps): JSX.Element => {
  const { uiState } = useUiContext();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: uiState.isDarkModeEnabled
            ? theme.background.dark.secondary
            : theme.background.light.secondary,
          ...containerStyle,
        },
      ]}
      testID={`root-touchable-button-${text}`}
      onPress={onPressButton}
    >
      <Text style={[styles.buttonText, { ...textStyle }]}>{text}</Text>
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

export default ActionButton;
