import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { SwitchView } from "../SwitchView/SwitchView";
import { ScreenView } from "../ScreenView/ScreenView";
import { Dimensions } from "react-native";
import { ButtonsView } from "../ButtonsView/ButtonsView";

export const Main = () => {
  const { isDarkMode } = useContext(UIContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? theme.background.primaryDark
            : theme.background.primaryLight,
        },
      ]}
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
