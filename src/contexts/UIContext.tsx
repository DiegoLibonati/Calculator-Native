import { createContext, useState } from "react";
import { UiContextT, UiProviderProps } from "../entities/entities";

export const UIContext = createContext<UiContextT | null>(null);

export const UIProvider = ({ children }: UiProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
    return;
  };

  return (
    <UIContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </UIContext.Provider>
  );
};
