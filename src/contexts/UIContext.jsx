import { createContext, useState } from "react";

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    return setIsDarkMode(!isDarkMode);
  };

  return (
    <UIContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </UIContext.Provider>
  );
};
