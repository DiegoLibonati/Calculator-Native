import { StyleSheet, Switch, View } from "react-native";
import Constants from "expo-constants";

import { useUiContext } from "../../contexts/UiContext";
import { theme } from "../../theme/theme";

export const SwitchView = (): JSX.Element => {
  const { uiState, enableDarkMode, disableDarkMode } = useUiContext();

  return (
    <View style={styles.container} testID="switch-root-view">
      <Switch
        trackColor={{
          true: theme.constants.black,
          false: theme.constants.white,
        }}
        thumbColor={
          uiState.isDarkModeEnabled ? theme.dot.dark : theme.dot.light
        }
        onValueChange={
          uiState.isDarkModeEnabled ? disableDarkMode : enableDarkMode
        }
        value={uiState.isDarkModeEnabled}
      ></Switch>
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
