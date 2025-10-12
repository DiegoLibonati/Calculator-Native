import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ActionButtonProps } from "@src/entities/props";

import { useUiContext } from "@src/contexts/UiContext";

import { theme } from "@src/styles/theme";

export const ActionButton = ({
  text,
  containerStyle,
  textStyle,
  onPressButton,
}: ActionButtonProps) => {
  const { uiState } = useUiContext();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: uiState.isDarkModeEnabled
            ? theme.background.secondaryDark
            : theme.background.secondaryLight,
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
