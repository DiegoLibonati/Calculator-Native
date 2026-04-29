import { useContext } from "react";

import type { UseUiContext } from "@/types/hooks";

import { UiContext } from "@/contexts/UiContext/UiContext";

export const useUiContext = (): UseUiContext => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useUiContext must be used within UiProvider");
  return context;
};
