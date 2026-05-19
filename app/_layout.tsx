import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens, enableFreeze } from "react-native-screens";

import type { JSX } from "react";

enableScreens(true);
enableFreeze(true);

export default function RootLayout(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar style="light"></StatusBar>
      <Slot />
    </SafeAreaProvider>
  );
}
