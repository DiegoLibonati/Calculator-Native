import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { GeneralProps } from "../../../entities/entities";

import { useUiContext } from "../../../contexts/UiContext";
import { theme } from "../../../theme/theme";

interface ButtonProps extends GeneralProps {
  text: string;
  containerStyle?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
  onPressButton: () => void;
}

export const Button = ({
  text,
  containerStyle,
  textStyle,
  onPressButton,
}: ButtonProps): JSX.Element => {
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
