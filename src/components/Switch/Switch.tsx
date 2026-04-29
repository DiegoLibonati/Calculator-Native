import { StyleSheet, Switch as SwitchNative, View } from "react-native";
import Constants from "expo-constants";

import type { JSX } from "react";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const Switch = (): JSX.Element => {
  const { uiState, enableDarkMode, disableDarkMode } = useUiContext();

  const colors = uiState.isDarkModeEnabled ? theme.colors.dark : theme.colors.light;

  return (
    <View style={styles.container} testID="switch-root-view">
      <SwitchNative
        trackColor={{
          true: uiState.isDarkModeEnabled ? colors.quaternary : colors.primary,
          false: uiState.isDarkModeEnabled ? colors.tertiary : colors.secondary,
        }}
        thumbColor={theme.colors.white}
        onValueChange={uiState.isDarkModeEnabled ? disableDarkMode : enableDarkMode}
        value={uiState.isDarkModeEnabled}
      ></SwitchNative>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: Constants.statusBarHeight,
    alignSelf: "flex-start",
  },
});

export default Switch;
