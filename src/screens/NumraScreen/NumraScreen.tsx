import { StyleSheet, View } from "react-native";

import type { JSX } from "react";

import Switch from "@/components/Switch/Switch";
import Screen from "@/components/Screen/Screen";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const NumraScreen = (): JSX.Element => {
  const { uiState } = useUiContext();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: uiState.isDarkModeEnabled
            ? theme.background.dark.primary
            : theme.background.light.primary,
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

export default NumraScreen;
