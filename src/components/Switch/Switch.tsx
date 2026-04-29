import { StyleSheet, Switch as SwitchNative, View } from "react-native";
import Constants from "expo-constants";

import type { JSX } from "react";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const Switch = (): JSX.Element => {
  const { uiState, enableDarkMode, disableDarkMode } = useUiContext();

  return (
    <View style={styles.container} testID="switch-root-view">
      <SwitchNative
        trackColor={{
          true: theme.constants.black,
          false: theme.constants.white,
        }}
        thumbColor={uiState.isDarkModeEnabled ? theme.dot.dark : theme.dot.light}
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
