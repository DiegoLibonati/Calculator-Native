import { Dimensions, StyleSheet, View } from "react-native";

import type { JSX } from "react";
import type { ActionButtonsRowProps } from "@/types/props";

const ActionButtonsRow = ({ children }: ActionButtonsRowProps): JSX.Element => {
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

export default ActionButtonsRow;
