import { useState } from "react";

import type { JSX } from "react";
import type { UiState } from "@/types/states";
import type { UiProviderProps } from "@/types/props";

import { UiContext } from "@/contexts/UiContext/UiContext";

export const UiProvider = ({ children }: UiProviderProps): JSX.Element => {
  const [uiState, setUiState] = useState<UiState>({
    isDarkModeEnabled: false,
  });

  const enableDarkMode = (): void => {
    setUiState((state) => ({ ...state, isDarkModeEnabled: true }));
  };

  const disableDarkMode = (): void => {
    setUiState((state) => ({ ...state, isDarkModeEnabled: false }));
  };

  return (
    <UiContext.Provider
      value={{
        uiState: uiState,
        enableDarkMode: enableDarkMode,
        disableDarkMode: disableDarkMode,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
