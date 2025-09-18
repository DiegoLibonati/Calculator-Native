import { StyleSheet, View } from "react-native";

import { SwitchView } from "@src/components/SwitchView/SwitchView";
import { ScreenView } from "@src/components/ScreenView/ScreenView";
import { ButtonsView } from "@src/components/ButtonsView/ButtonsView";

import { useUiContext } from "@src/contexts/UIContext";
import { theme } from "@src/theme/theme";

export const Main = () => {
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
