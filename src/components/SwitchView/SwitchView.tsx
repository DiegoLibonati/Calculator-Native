import { StyleSheet, Switch, View } from "react-native";
import { theme } from "../../theme/theme";
import { UIContext } from "../../contexts/UIContext";
import { useContext } from "react";
import Constants from "expo-constants";

export const SwitchView = (): JSX.Element => {
  const { isDarkMode, handleDarkMode } = useContext(UIContext)!;
  
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{
          false: theme.constants.white,
          true: theme.constants.black,
        }}
        thumbColor={isDarkMode ? theme.dot.dark : theme.dot.light}
        onValueChange={handleDarkMode}
        value={isDarkMode}
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
