import { Dimensions, StyleSheet, View } from "react-native";

import { GeneralProps } from "@src/entities/entities";

interface ButtonsRowProps extends GeneralProps {
  children: React.ReactNode;
}

export const ButtonsRow = ({ children }: ButtonsRowProps) => {
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
