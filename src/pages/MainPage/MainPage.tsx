import { StyleSheet, View } from "react-native";

import { Switch } from "@src/components/Switch/Switch";
import { Screen } from "@src/components/Screen/Screen";
import { ActionButtons } from "@src/components/ActionButtons/ActionButtons";

import { useUiContext } from "@src/hooks/useUiContext";

import { theme } from "@src/styles/theme";

export const MainPage = () => {
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
      <Switch></Switch>
      <Screen></Screen>
      <ActionButtons></ActionButtons>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
