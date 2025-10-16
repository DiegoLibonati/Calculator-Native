import { useContext } from "react";

import { UseUiContext } from "@src/entities/hooks";

import { UiContext } from "@src/contexts/UiContext";

export const useUiContext = (): UseUiContext => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useUiContext must be used within UiProvider");
  return context;
};
