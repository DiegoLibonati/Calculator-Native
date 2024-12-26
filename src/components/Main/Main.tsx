import { StyleSheet, View } from "react-native";

import { SwitchView } from "../SwitchView/SwitchView";
import { ScreenView } from "../ScreenView/ScreenView";
import { ButtonsView } from "../ButtonsView/ButtonsView";

import { useUiContext } from "../../contexts/UiContext";
import { theme } from "../../theme/theme";

export const Main = (): JSX.Element => {
  const { uiState } = useUiContext();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: uiState.isDarkModeEnabled
            ? theme.background.primaryDark
            : theme.background.primaryLight,
        },
      ]}
      testID="main-root"
    >
      <SwitchView></SwitchView>
      <ScreenView></ScreenView>
      <ButtonsView></ButtonsView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
