import { createContext, useContext, useState } from "react";

import { UiContext as UiContextT, UiState } from "@src/entities/entities";

interface UiProviderProps {
  children: React.ReactNode;
}

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
  return useContext(UiContext)!;
};
