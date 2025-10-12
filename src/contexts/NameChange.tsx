import { createContext, useContext, useState } from "react";

import { UiContext as UiContextT } from "@src/entities/contexts";
import { UiState } from "@src/entities/states";
import { UiProviderProps } from "@src/entities/props";

export const UiContext = createContext<UiContextT | null>(null);

export const UiProvider = ({ children }: UiProviderProps) => {
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

export const useUiContext = (): UiContextT => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useUiContext must be used within UiProvider");
  return context;
};
