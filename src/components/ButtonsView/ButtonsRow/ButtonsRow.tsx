import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ButtonsRowProps } from "../../../entities/entities";

export const ButtonsRow = ({ children }: ButtonsRowProps): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
  },
});
