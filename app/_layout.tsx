import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import type { JSX } from "react";

export default function RootLayout(): JSX.Element {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <Slot />
    </>
  );
}
