import { Dimensions, StyleSheet, View } from "react-native";

import { ActionButtonsRowProps } from "@src/entities/props";

export const ActionButtonsRow = ({ children }: ActionButtonsRowProps) => {
  return (
    <View style={styles.container} testID="buttons-row-root">
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
  },
});
